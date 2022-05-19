
import requests
import json
import pprint
url = "https://api.trongrid.io/v1/accounts/TXSw8R2k8h9GnaYjWAvtHxKB5AAa6A3jQX/transactions"



response = requests.get(url)

with open ("TronTX.json", "w") as f:
    json.dump(response.json(), f)

pprint.pprint(response.json())
# print(response.text)