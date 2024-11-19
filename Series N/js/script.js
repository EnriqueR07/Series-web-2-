import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://serie-nexflix-default-rtdb.europe-west1.firebasedatabase.app/"
}; 
  

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const ranking = ref(baseDades, "boton");
 



let button = document.getElementById('boton');

boton.addEventListener("click", function (e) {
    e.preventDefault();
    let seriesNombre = document.getElementById('seriesNombre').value; 
    push(ranking, seriesNombre); 
    clearScreen(); 
});




onValue(ranking, function (snapshot) {
    if (ºsnapshot.exists()) {
        let resultats = Object.entries(snapshot.val());
        clearList();
        for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }

        
    } else {
        lista.innerHTML = "No items here yet...";
    }
});

function addElement() {
    let elementLista = document.createElement("li"); 
    elementLista.id = e[0]; 
    elementLista.textContent = e[1]; 
    elementLista.addEventListener("click", function() {
        let localitzacioItem = ref(baseDades, `Series/${e[0]}`); 
        remove(localitzacioItem); 
    });
    document.getElementById('series-list').append(elementLista); 
}

function clearList() {
    document.getElementById('series-list').innerHTML = ""; 
}

function clearScreen() {
    document.getElementById('seriesNombre').value = ""; 
}


let b = document.getElementById("enviar")
b.addEventListener("click",subir)


function subir(){
    push()
}










/*https://es.stackoverflow.com/questions/75631/c%C3%B3mo-almacenar-resultado-de-firebase-m%C3%A9todo-on-en-una-variabl*/




    

