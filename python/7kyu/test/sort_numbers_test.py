import pytest
from solution.sort_numbers import solution


def test_sort_numbers():
    assert solution([1, 2, 3, 10, 5]) == [1, 2, 3, 5, 10]
    assert solution(None) == []
    assert solution([]) == []
    assert solution([20, 2, 10]) == [2, 10, 20]
    assert solution([2, 20, 10]) == [2, 10, 20]


@pytest.mark.parametrize(
    "input, expected",
    [
        ([1, 2, 3, 10, 5], [1, 2, 3, 5, 10]),
        (None, []),
        ([], []),
        ([20, 2, 10], [2, 10, 20]),
        ([2, 20, 10], [2, 10, 20]),
    ],
)
def test_sort_numbers_parametrized(input, expected):
    assert solution(input) == expected
