//Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

//Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

//Exemplu 1:

//Input: 1

//Output: “Luni”

//Exemplu 2:

//Input: 5

//Output: “Vineri”

function week_day(numberday) {

    switch (numberday) {
        case 0:
            return "Duminica";

        case 1:
            return "Luni";

        case 2:
            return "Marti";

        case 3:
            return "Miercuri";

        case 4:
            return "Joi";

        case 5:
            return "Vineri";

        case 6:
            return "Sambata";

    }
}

console.log(week_day(6))