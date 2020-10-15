from geopy.geocoders import Nominatim
from geopy.geocoders import GeoNames
from geopy.extra.rate_limiter import RateLimiter
import pandas as pd
import geopandas as gpd

from datetime import datetime

# ugly ssl fix
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

# current date and time
now = datetime.now()
t = now.strftime("%Y-%m-%d-%H-%M-%S")

locator = Nominatim(user_agent="angst-frei-test")
#locator = GeoNames(username="leylines", user_agent="angst-frei", scheme="http")

#df = pd.read_csv("/home/nodejs/geocode/demotermine.csv")
df = pd.read_csv("./demotermine.csv")
df.head()

df["latitude"]   = ""
df["longitude"]   = ""

geocode = RateLimiter(locator.geocode, error_wait_seconds=11, min_delay_seconds=5)

for index, row in df.iterrows():

  geoinfo = {
    'country': row["land"],
    'city': row["stadt"],
    'postalcode': row["postleitzahl"],
    'street': row["treffpunkt"]
  }
  
#  gc_full = row["treffpunkt"] + ',' + \
#                str(row["postleitzahl"]) + ',' + \
#                row["stadt"] + ',' + \
#                row["land"]
  try:
    location = geocode(geoinfo, timeout=10)
  except:
    pass
  if location is None:
    print(geoinfo)
    print("Full did not work")
    del geoinfo['city']
#    gc_tp = row["treffpunkt"] + ',' + \
#                str(row["postleitzahl"]) + ',' + \
#                row["land"]
    try:
      location = geocode(geoinfo, timeout=10)
    except:
      pass
  if location is None:
    print(geoinfo)
    print("TP did not work")
    del geoinfo['street']
    geoinfo['city'] = row["stadt"]
#    gc_city = str(row["postleitzahl"]) + ',' + \
#                 row["stadt"] + ',' + \
#                 row["land"]
    try:
      location = geocode(geoinfo, timeout=10)
    except:
      pass
  if location is None:
    print(geoinfo)
    print("City did not work")
    del geoinfo['city']
#    gc_plz = str(row["postleitzahl"]) + ',' + \
#                 row["land"]
    try:
      location = geocode(geoinfo, timeout=10)
    except:
      pass
  if location is None:
    print(geoinfo)
    print("PLZ did not work")

  df.loc[index,"latitude"] = location.latitude
  df.loc[index,"longitude"] = location.longitude

df.to_csv('./demotermine_geo.csv-' + t, index=False)
#df.to_csv('/usr/local/geodata/anonymous/demotermine_geo.csv', index=False)
