""" 
The ApisData function is called from the main file.
All you need to pass is a Tron wallet address and it will return
a dictionary that contains the following:

From Tron API:
    1. Tx Value
    2. Tx_id
    3. Tx Type
    4. name of token
    5. nbr of decimals
    6. the address of the smartcontract (to check if we are 
    actually working with USDT token)
    7. symbol

From BROU API:
    1. Fx average

"""

from bothAPIs import ApisData
import json
wallet = "TYvYRiuVU6B4dQKTuyhvxxFsJKiJZiTCfL"

data_dict = ApisData(wallet)
print("below is type{}".format(type(data_dict)))
print(data_dict)
print()
data_json = json.dumps(data_dict)
print("below is type{}".format(type(data_json)))
print(json.dumps(data_dict))
