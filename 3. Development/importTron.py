"""
This is a module that imports information from the tronscan API.
More information regarding how the api is used can be found here:
https://developers.tron.network/v4.0/reference/trc20-transaction-information-by-account-address"""
import requests
import json
import pprint
url = "https://api.trongrid.io/v1/accounts/TXSw8R2k8h9GnaYjWAvtHxKB5AAa6A3jQX/transactions"



response = requests.get(url)

with open ("TronTX.json", "w") as f:
    json.dump(response.json(), f)

pprint.pprint(response.json())
# print(response.text)