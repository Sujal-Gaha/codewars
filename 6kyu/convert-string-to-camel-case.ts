// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

export function toCamelCase(str: string): string {
  if (!str) return "";
  str = str.replace(/-/g, "_");
  let arr = str.split("_");
  return arr
    .map((word, index) => {
      if (!index) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}
