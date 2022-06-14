

value = 27082468
str_value = str(value)
str_len = len(str_value)
decimals = 6

print(len(str_value))
print(str_value[:(str_len - decimals)]+ '.' + str_value[(str_len - decimals):])