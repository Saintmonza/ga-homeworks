from textwrap import wrap

# to pass the test function, please return a string of 'string' from then function
# eg: test() => 'string'


def test():
    return 'string'


print(test())

# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"


def hello(string="Sugar"):
    if string == 'World':
        return f"Hello {string}!"
    else:
        return f"Hello <argument!>"


print(hello())

# write a function that will calculate the area of a circle, given the radius


def area_of_circle(radius):
    area = radius * radius
    pi = 3.14
    return area * pi


print(area_of_circle(5))


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    convert_to_farenheit = celcius * 1.8 + 32
    return convert_to_farenheit


print(celcius_to_farenheit(10))


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    convert_number_to_string = str(number)
    reverse_string = convert_number_to_string[::-1]
    convert_string_to_number = int(reverse_string)
    return convert_string_to_number


print(number_reverse(7177145))
# Convert number to string √
# Reverse √
# Convert back to number √
# Return √

# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False


def palindrome_check(string):
    convert_to_lowercase = string.lower()
    if str(convert_to_lowercase) == str(convert_to_lowercase)[::-1]:
        return True
    else:
        return False


print(palindrome_check('RacEcaR'))

# if mum === mum return true √
# else return false √
# works with mixed cases √

# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'


def order_string_alphabetically(string):
    return ''.join(sorted(string))


print(order_string_alphabetically('programming'))

# Split letters √
# Put in alphabetical order √
# Return the result √

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'


def title_case(string):
    convert_to_uppercase = string.title()
    return convert_to_uppercase


print(title_case('james and the giant peach'))

# Find first letter of each word (built in function) √
# Convert the first letter to capital (built in function) √
# Return the result (built in function)


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6


def num_of_vowels(string):
    string = string
    vowels = 0

    for i in string:
        if(i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u' or i == 'A' or i == 'E' or i == 'I' or i == 'O' or i == 'U'):
            vowels = vowels + 1
    return vowels


print(num_of_vowels('hOw mAny vOwels can you find?'))


# Covert string to variable √
# Convert string to lowercase √
# Set vowel count √
# loop over 'a', 'e', 'i', 'o', and 'u' √
# convert string to lowercase for shorter for loop [x - failed so had to extend including capital letters]

# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************


def frame(string):
    print('impossible, this was mean')
