import pytest
from solution.array_diff import array_diff


def test_array_diff():
    assert array_diff([1, 2], [1]) == [2]
    assert array_diff([1, 2, 2], [1]) == [2, 2]
    assert array_diff([1, 2, 2], [2]) == [1]
    assert array_diff([1, 2, 2], []) == [1, 2, 2]
    assert array_diff([], [1, 2]) == []
    assert array_diff([1, 2, 3], [1, 2]) == [3]


@pytest.mark.parametrize(
    "input_one, input_two, expected",
    [
        ([1, 2], [1], [2]),
        ([1, 2, 2], [1], [2, 2]),
        ([1, 2, 2], [2], [1]),
        ([1, 2, 2], [], [1, 2, 2]),
        ([], [1, 2], []),
        ([1, 2, 3], [1, 2], [3]),
    ],
)
def test_array_diff_parameterized(input_one, input_two, expected):
    assert array_diff(input_one, input_two) == expected
