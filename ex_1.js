//Returnează un boolean dacă un număr este divizibil cu 10

//Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

//Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

//În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

//Exemplu 1:
//Input: 100

//Output: true

//Exemplu 2:

//Input: 23

//Output: false



const numeredivizibile = (number, a)
    {
    if (number % a === 0) { return true; }
    else { return false; }
}
console.log(numeredivizibile(100, 10));
console.log(numeredivizibile(99, 12));