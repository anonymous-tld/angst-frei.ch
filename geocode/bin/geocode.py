from geopy.geocoders import Nominatim
from geopy.geocoders import GeoNames
from geopy.extra.rate_limiter import RateLimiter
import pandas as pd 
import geopandas as gpd 

from datetime import datetime

# current date and time
now = datetime.now()
t = now.strftime("%Y-%m-%d-%H-%M-%S")

locator = Nominatim(user_agent="angst-frei")
#locator = GeoNames(username="leylines", user_agent="angst-frei", scheme="http")

df = pd.read_csv("../../_data/demotermine.csv")
#df = pd.read_csv("./demotermine.csv")
df.head()

df["latitude"]   = ""
df["longitude"]   = ""

geocode = RateLimiter(locator.geocode, error_wait_seconds=11, min_delay_seconds=10)

for index, row in df.iterrows():

  gc_full = row["treffpunkt"] + ',' + \
                str(row["postleitzahl"]) + ',' + \
                row["stadt"] + ',' + \
                row["land"]   
  try:
    location = geocode(gc_full, timeout=10)
  except:
    pass
  if location is None:
    print(gc_full)
    print("Full did not work")
    gc_tp = row["treffpunkt"] + ',' + \
                str(row["postleitzahl"]) + ',' + \
                row["land"]   
    try:
      location = geocode(gc_tp, timeout=10)
    except:
      pass
  if location is None:
    print(gc_tp)
    print("TP did not work")
    gc_city = str(row["postleitzahl"]) + ',' + \
                 row["stadt"] + ',' + \
                 row["land"]   
    try:
      location = geocode(gc_city, timeout=10)
    except:
      pass
  if location is None:
    print(gc_city)
    print("City did not work")
    gc_plz = str(row["postleitzahl"]) + ',' + \
                 row["land"]   
    try:
      location = geocode(gc_plz, timeout=10)
    except:
      pass
  if location is None:
    print(gc_plz)
    print("PLZ did not work")

  df.loc[index,"latitude"] = location.latitude 
  df.loc[index,"longitude"] = location.longitude 

#df.to_csv('./demotermine_geo.csv-' + t, index=False)
df.to_csv('../../demotermine_geo.csv', index=False)


