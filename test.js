var j = new Date();
var jourSemaine = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
var mois = ['janvier','fÃ©vrier','mars','avril','mai','juin',
            'juillet','aoÃ»t','septembre','octobre','novembre','dÃ©cembre'];

function aujourdHui(){
   return jourSemaine[j.getDay()]+' '+j.getDate()+' '+
          mois[j.getMonth()]+' '+j.getFullYear()+' '+
          j.getHours()+":"+(j.getMinutes()<10?"0":"")+j.getMinutes();
}            

function insererDate(){
    var dateElem = document.getElementById("date");
    var b = document.createElement("b");
    b.appendChild(document.createTextNode(aujourdHui()));
    dateElem.appendChild(b);
}

// une meilleure alternative Ã  l'utilisation de l'attribut "onload='insererDate()'" du body

window.addEventListener("load",insererDate,false);