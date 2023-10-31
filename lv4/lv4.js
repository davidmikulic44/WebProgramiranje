class Macka {
    constructor(ime, boja, dob, spol){
        this.ime = ime;
        this.boja = boja;
        this.dob = dob;
        this.spol = spol;
    }

    setDob = (dob) => {
        this.dob = dob;
    }
}

var micika = new Macka("Micika","žuta","3","ž");
var tigar = new Macka("Tigar","narančasta",10,"m");
document.write("Ime mačke: "+tigar.ime+", boja: "+tigar.boja+", dob: "+tigar.dob+" i spol: "+tigar.spol+"<br>");
micika.setDob(10);
document.write("dob micika: "+micika.dob+"<br>");

let mod = document.lastModified

document.write("Dokument je zadnji put modificiran: "+mod);