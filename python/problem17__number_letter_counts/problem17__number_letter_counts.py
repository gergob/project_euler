__author__ = 'greg'

"""
f the numbers 1 to 5 are written out in words:
one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains
23 letters and 115 (one hundred and fifteen) contains 20 letters.
The use of "and" when writing out numbers is in compliance with British usage.

"""

numbers = {0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven',
           8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
           13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
           18: 'eighteen', 19: 'nineteen'}

tens = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}

def get_number_as_string_under_100(number):
    result = ''
    if number < 20:
        result = numbers[number]
    else:
        result = tens[(number / 10) * 10] + '-' + numbers[number % 10]
    return result

def get_number_as_string(number):
    result = ''
    if number < 20:
        result = numbers[number]
    elif number in tens.keys():
        result = tens[number]
    elif number < 100:
        result = get_number_as_string_under_100(number)
    elif number < 1000:
        if number % 100 == 0:
            result = numbers[number / 100] + ' hundred'
        else:
            result = numbers[number / 100] + ' hundred and ' + get_number_as_string_under_100(number % 100)
    elif number == 1000:
        result = 'one thousand'

    return result

def get_number_of_letters_for_number(number):
    number_as_string = get_number_as_string(number)
    words = number_as_string.split(" ")
    return sum([len(x) for x in words])


if __name__ == '__main__':
    print sum([get_number_of_letters_for_number(n) for n in range(1, 1000)])
