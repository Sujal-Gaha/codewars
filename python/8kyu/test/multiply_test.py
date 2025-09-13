import pytest
from solution.multiply import multiply


def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(0, 0) == 0
    assert multiply(2, -3) == -6
    assert multiply(-2, 3) == -6
    assert multiply(-2, -3) == 6
    
@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 6),
    (0, 0, 0),
    (2, -3, -6),
    (-2, 3, -6),
    (-2, -3, 6),
])
def test_multiply_parametrized(a, b, expected):
    assert multiply(a, b) == expected