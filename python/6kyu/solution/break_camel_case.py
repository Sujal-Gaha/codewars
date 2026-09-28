# Complete the solution so that the function will break up camel casing, using a space between words.
# Example
#
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""


# My Solution
def solution(s):
    output = ""
    for chr in s:
        if chr.isupper():
            output = output + " " + chr
        else:
            output += chr

    print(f"Output: {output}")

    return output


# Best Practices
# 1.
# def solution(s):
#     newStr = ""
#     for letter in s:
#         if letter.isupper():
#             newStr += " "
#         newStr += letter
#     return newStr
#
#
# 2.
# def solution(s):
#     return ''.join(' ' + c if c.isupper() else c for c in s)
#
#
# 3. Clever
# import re
# def solution(s):
#     return re.sub('([A-Z])', r' \1', s)
