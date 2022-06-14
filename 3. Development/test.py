

value = 500000001
str_value = str(value)
str_len = len(str_value)
decimals = 6
f_value = str_value[:(str_len - decimals)]+ '.' + str_value[(str_len - decimals):]
print(type(f_value))
print(f_value)
print(float(f_value))
print(type(float(f_value)))

print(len(str_value))
print()