import pytest
from solution.reversed_strings import solution

def test_reversed_strings():
    assert solution("world") == "dlrow"
    assert solution("word") == "drow"
    assert solution("HeLlo") == "olLeH"
    assert solution("12345") == "54321"
    assert solution("1a2b3c4d5e") == "e5d4c3b2a1"

@pytest.mark.parametrize("string, expected", [
    ("world", "dlrow"),
    ("word", "drow"),
    ("HeLlo", "olLeH"),
    ("12345", "54321"),
    ("1a2b3c4d5e", "e5d4c3b2a1"),
])
def test_reversed_strings_parametrized(string, expected):
    assert solution(string) == expected