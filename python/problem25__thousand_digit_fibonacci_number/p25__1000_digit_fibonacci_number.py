__author__ = 'greg'

"""
The Fibonacci sequence is defined by the recurrence relation:


Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
"""

def fibonacci(n):
    result = []
    counter = 1
    if n < 3:
        result = [1, 1]
    else:
        result = [1, 1]
        counter = 2
        while counter < n:
            result.append(result[counter-2] + result[counter-1])
            counter += 1

    return result

def find_1000_digit_fibonacci(start_from):
    length = 0
    n = start_from
    while length <= 1000:
        n += 1
        #print "checking", n, "now"
        length = max([len(str(x)) for x in fibonacci(n)])
        #print "max is", length, "now"
        #print "======================"

    return n-1


if __name__ == '__main__':
    print find_1000_digit_fibonacci(4000)