//Scrieți o funcție numită tellFortune care:

//primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
//afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
//În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

//Exemplu 1:

//Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”

//Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.”

function tellFortune(numKids, partener, location, jobTitle) {
    let future = 'Vei fi un ' + jobTitle + ' în ' + location + ', căsătorit cu ' + partener + ' și vei avea ' + numKids + ' copii.';
    console.log(future);
}


const numcopii = 3;
const partener = "Emanuel";
const location = "Italia";
const jobTitle = "Programator";

tellFortune(numcopii, partener, location, jobTitle);

tellFortune(2, "Andrei", "Romania", "sofer");