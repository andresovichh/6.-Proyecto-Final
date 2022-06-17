
from datetime import datetime
import json
import requests
import pprint
url = "https://cotizaciones-brou.herokuapp.com/api/currency/latest"

headers = {"Accept": "application/json"}

response = requests.get(url, headers=headers)

pprint.pprint(response.json())
timest = response.json()['timestamp']
""" here we are getting the date in regular
year-month-day format, apparently at 00:00:00 hours"""
print(datetime.fromtimestamp(timest))