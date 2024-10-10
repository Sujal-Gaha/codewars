// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna: string): string {
  let res = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      res += dna[i].replace("A", "T");
    } else if (dna[i] === "T") {
      res += dna[i].replace("T", "A");
    } else if (dna[i] === "G") {
      res += dna[i].replace("G", "C");
    } else {
      res += dna[i].replace("C", "G");
    }
  }
  return res;
}

console.log(dnaStrand("AAAA")); // "TTTT"
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"
