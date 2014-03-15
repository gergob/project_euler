__author__ = 'greg'

'''
https://projecteuler.net/problem=14
The following iterative sequence is defined for the set of positive integers:

n = n/2 (n is even)
n = 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
'''

def get_sequence(start):
    result = [start]
    current = start
    while current != 1:
        if current % 2 == 0:
            current = current / 2
        else :
            current = 3 * current + 1
        result.append(current)

    return result

def get_longest_collatz_sequence_under_one_million():
    max_val = 0
    at_number = 1000000
    number = 1000000

    while number != 0:
        print "Calculating for ", number
        seq = get_sequence(number)
        if max_val < len(seq):
            max_val = len(seq)
            at_number = number
        number -= 1


    return at_number

if __name__ == "__main__":

    max_number = get_longest_collatz_sequence_under_one_million()
    seq = get_sequence(max_number )
    print "the longest Collatz seq. is ", len(seq)
    print seq

