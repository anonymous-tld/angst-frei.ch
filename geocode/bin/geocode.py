from geopy.geocoders import Nominatim
from geopy.extra.rate_limiter import RateLimiter
import pandas as pd 
import geopandas as gpd 

locator = Nominatim(user_agent="angst-frei")

df = pd.read_csv("../../_data/demotermine.csv")
df.head()

df["geocode_col"] = df["treffpunkt"].astype(str) + ',' + \
                    df["postleitzahl"].astype(str) + ',' + \
                    df["stadt"] + ',' + \
                    df["land"]   

geocode = RateLimiter(locator.geocode, min_delay_seconds=1)
df["location"] = df["geocode_col"].apply(geocode)
df["point"] = df["location"].apply(lambda loc: tuple(loc.point) if loc else None)
df[["latitude", "longitude", "altitude"]] = pd.DataFrame(df["point"].tolist(), index=df.index)

df.to_csv('../../demotermine_geo.csv', index=False)


