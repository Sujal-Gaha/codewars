import pytest
from solution.convert_a_number_to_a_string import number_to_string

def test_number_to_string():
    assert number_to_string(67) == "67"
    assert number_to_string(-67) == "-67"
    assert number_to_string(0) == "0"
    assert number_to_string(1) == "1"
    assert number_to_string(9) == "9"

@pytest.mark.parametrize("num, expected", [
    (10, "10"),
    (11, "11"),
    (12, "12"),
    (13, "13"),
    (14, "14"),
])
def test_number_to_string_parametrized(num, expected):
    assert number_to_string(num) == expected