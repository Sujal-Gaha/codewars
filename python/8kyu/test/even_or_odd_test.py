import pytest
from solution.even_or_odd import even_or_odd

def test_even_number():
    assert even_or_odd(2) == "Even"
    assert even_or_odd(100) == "Even"

def test_odd_number():
    assert even_or_odd(1) == "Odd"
    assert even_or_odd(99) == "Odd"

@pytest.mark.parametrize("number, expected", [
    (0, "Even"),
    (7, "Odd"),
    (-2, "Even"),
    (-5, "Odd"),
    (42, "Even"),
])
def test_even_or_odd_parametrized(number, expected):
    assert even_or_odd(number) == expected
