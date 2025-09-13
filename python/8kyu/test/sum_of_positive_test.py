import pytest
from solution.sum_of_positive import positive_sum


def test_positive_sum():
    assert positive_sum([1, 2, 3, 4, 5]) == 15
    assert positive_sum([1, -2, 3, 4, 5]) == 13
    assert positive_sum([-1, 2, 3, 4, 5]) == 14
    assert positive_sum([]) == 0
    assert positive_sum([-1, -2, -3, -4, -5]) == 0
    
@pytest.mark.parametrize("arr, expected", [
    ([1, 2, 3, 4, 5], 15),
    ([1, -2, 3, 4, 5], 13),
    ([-1, 2, 3, 4, 5], 14),
    ([], 0),
    ([-1, -2, -3, -4, -5], 0),
])
def test_positive_sum_parametrized(arr, expected):
    assert positive_sum(arr) == expected