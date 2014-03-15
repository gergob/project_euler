__author__ = 'greg'

"""
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
"""

def get_sum_of_power(number, power):
    result = number ** power
    result_as_string = str(result)
    print "Number %s on %s power is %s" % (str(number), str(power), str(result))
    numbers = [int(c) for c in result_as_string]

    return sum(numbers)


if __name__ == '__main__':
    print get_sum_of_power(2, 15) #results 26
    print get_sum_of_power(2, 1000)