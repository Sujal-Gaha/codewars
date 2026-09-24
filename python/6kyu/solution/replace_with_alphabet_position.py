# Welcome.
#
# In this kata you are required to, given a string, replace every letter with its position in the alphabet.
#
# If anything in the text isn't a letter, ignore it and don't return it.
#
# "a" = 1, "b" = 2, etc.
# Example
#
# Input = "The sunset sets at twelve o' clock."
# Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


# My Solution
def alphabet_position(text):
    keys = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ]
    values = [str(i) for i in range(1, 27)]

    print(f"Values: {values}")

    alpha_w_pos = {k: v for (k, v) in zip(keys, values)}

    output = ""

    for alphabet in text:
        lowered_alphabet = alphabet.lower()
        if lowered_alphabet in keys:
            value = alpha_w_pos[lowered_alphabet]
            output = output + value + " "

    return output[:-1]


# Best Practices
## 1.
# def alphabet_position(text):
#     return ' '.join(str(ord(c) - 96) for c in text.lower() if c.isalpha())

# ---
# 2.
# alphabet = 'abcdefghijklmnopqrstuvwxyz'

# def alphabet_position(text):
#     if type(text) == str:
#         text = text.lower()
#         result = ''
#         for letter in text:
#             if letter.isalpha() == True:
#                 result = result + ' ' + str(alphabet.index(letter) + 1)
#         return result.lstrip(' ')
