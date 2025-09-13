import pytest
from solution.return_negative import make_negative

def test_make_negative():
    assert make_negative(1) == -1
    assert make_negative(-5) == -5
    assert make_negative(0) == 0
    assert make_negative(42) == -42
    assert make_negative(-42) == -42
    
@pytest.mark.parametrize("number, expected", [
    (1, -1),
    (-5, -5),
    (0, 0),
    (42, -42),
    (-42, -42),
])
def test_make_negative_parametrized(number, expected):
    assert make_negative(number) == expected