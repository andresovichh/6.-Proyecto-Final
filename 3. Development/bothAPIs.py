"""
This module lets you get the latest confirmed transaction
for a certain address, regarding TRC20 tokens. The api used
is in the url.

Key notes:
1. 'decimals' : 6 , means that counting from the right,
the first 6 places are decimals, so fo example, "9,48" usdt
would show as "9480000".

2. To check that we are actually dealing with "USDT", which is
the cryptocurrency we are targeting, we can check that the symbol
is "USDT" or that the address of the smart contrac is
"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
"""

import json
import requests
import pprint
from datetime import datetime
url = "https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1"

headers = {"Accept": "application/json"}

response = requests.get(url, headers=headers)

pprint.pprint(response.json())

url2 = "https://cotizaciones-brou.herokuapp.com/api/currency/latest"

headers2 = {"Accept": "application/json"}

response2 = requests.get(url2, headers=headers2)

pprint.pprint(response2.json())
timest = response2.json()['timestamp']
""" here we are getting the date in regular
year-month-day format, apparently at 00:00:00 hours"""
print(datetime.fromtimestamp(timest))

""" We need to somehow save a couple of things
from both APIS.

From the TRON API we need to store:

a. Amount
b. Decimals
c. token_info
d. Type
e. symbol
f. name

From the BROU API we should store:

a. the exchange rate for the UYU/USD pair
b. the timestamp

We should probably create a dict with all that 
data"""