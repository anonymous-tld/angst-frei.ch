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
#geocode = RateLimiter(locator.geocode, error_wait_seconds=11, min_delay_seconds=10)
geocode = RateLimiter(locator.geocode, error_wait_seconds=11, min_delay_seconds=10)

for index, row in df.iterrows():

  gc_col_full = row["treffpunkt"] + ',' + \
                str(row["postleitzahl"]) + ',' + \
                row["stadt"] + ',' + \
                row["land"]   

  location = locator.geocode(gc_col_full, timeout=10)
  if location is None:
    gc_col_tp = row["treffpunkt"] + ',' + \
                str(row["postleitzahl"]) + ',' + \
                row["land"]   
    print(gc_col_full)
    print("Full did not work")
    location = locator.geocode(gc_col_tp, timeout=10)
  if location is None:
    gc_col_plz = str(row["postleitzahl"]) + ',' + \
                 row["land"]   

    print(gc_col_tp)
    print("TP did not work")
    location = locator.geocode(gc_col_plz, timeout=10)
  if location is None:
    print(gc_col_plz)
    print("PLZ did not work")

  df.loc[index,"latitude"] = location.latitude 
  df.loc[index,"longitude"] = location.longitude 

df.to_csv('./demotermine_geo.csv-' + t, index=False)


