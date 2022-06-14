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

3. According to https://developers.tron.network/docs/block
"In the TRON network, the block
interval is 3 seconds, that is,
a block is generated every 3 seconds."

And for irreversibility to happen, 20 blocks are needed.
Accordingly, we will be listening for Tx for 1.5 to 2 minutes
to be safe.
"""

import json
import requests
import pprint
from datetime import datetime

def ApisData(TronWallet):
    # url = "https://api.trongrid.io/v1/accounts/TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL/transactions/trc20?only_confirmed=true&limit=1"
    url = "https://api.trongrid.io/v1/accounts/{}/transactions/trc20?only_confirmed=true&limit=1".format(TronWallet)

    headers = {"Accept": "application/json"}

    response = requests.get(url, headers=headers)

    # Here we are creating a dict with the data we want
    target_data = {}
    # print(response.json()['data'])
    for item in response.json()['data']:
        target_data.update({"value":item['value']})
        target_data.update({"Tx_id":item['transaction_id']})
        target_data.update({"Type":item['type']})
        target_data.update({"name":item['token_info']['name']})
        target_data.update({"decimals":item['token_info']['decimals']})
        target_data.update({"address":item['token_info']['address']})
        target_data.update({"symbol":item['token_info']['symbol']})
        # target_data.update({"f_value":item[]


    # print(target_data)

    url2 = "https://cotizaciones-brou.herokuapp.com/api/currency/latest"

    headers2 = {"Accept": "application/json"}

    responseBROU = requests.get(url2, headers=headers2)

    # pprint.pprint(responseBROU.json())
    timest = responseBROU.json()['timestamp']

    buy_price = responseBROU.json()['rates']['USD']['buy']
    sell_price = responseBROU.json()['rates']['USD']['sell']
    average = (buy_price + sell_price)/2
    target_data.update({"FxAverage":average})
    # print(target_data)

    # From here
    value = target_data.get('value')
    decimals = target_data.get('decimals')
    str_value = str(value)
    str_len = len(str_value)
    f_value = str_value[:(str_len - decimals)]+ '.' + str_value[(str_len - decimals):]
    # print("---------{}------".format(f_value))
    target_data['f_value'] = float(f_value)
    # Up to here, we are converting the int we are given as value into a float,
    # using the decimal places we are given. Eg. value = 50000000, decimals 6,
    # should be equal to f_value = 50.000000
    # Finaly, dict is updated with this info, and returned to main.
    return target_data
    
    
    
    
if __name__ == '__main__':
    ApisData()
    
    
    
    
    
    
    
    
    
    
    
    """ here we are getting the date in regular
    year-month-day format, apparently at 00:00:00 hours"""
    # print(datetime.fromtimestamp(timest))

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
    """
    TxData = {"Amount": response['data']['token_info']['value'],
            "Decimals": response['data']['token_info']['decimals']
            }
    print(TxData)
    """
    """
    print(response['data'][0]['decimals'])
    """