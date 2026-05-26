import pytest
from solution.convert_boolean_values_to_strings_yes_or_no import bool_to_word


def test_bool_to_word():
    assert bool_to_word(True) == "Yes"
    assert bool_to_word(False) == "No"


@pytest.mark.parametrize(
    "input, expected",
    [
        (True, "Yes"),
        (False, "No"),
    ],
)
def test_bool_to_word_parametrized(input, expected):
    assert bool_to_word(input) == expected
