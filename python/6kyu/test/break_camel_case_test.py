import pytest
from solution.break_camel_case import solution as break_camel_case


def test_break_camel_case():
    assert break_camel_case("helloWorld") == "hello World"
    assert break_camel_case("camelCase") == "camel Case"
    assert break_camel_case("breakCamelCase") == "break Camel Case"
    assert break_camel_case("thinkGovernmentLastChild") == "think Government Last Child"
    assert break_camel_case("rightFeel") == "right Feel"


@pytest.mark.parametrize(
    "input, expected",
    [
        ("helloWorld", "hello World"),
        ("camelCase", "camel Case"),
        ("breakCamelCase", "break Camel Case"),
        ("thinkGovernmentLastChild", "think Government Last Child"),
        ("rightFeel", "right Feel"),
    ],
)
def test_break_camel_case_parameterized(input, expected):
    assert break_camel_case(input) == expected
