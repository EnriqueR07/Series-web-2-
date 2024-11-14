import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://serie-nexflix-default-rtdb.europe-west1.firebasedatabase.app/"
};


{
    "type": "module"
  }
  

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const ranking = ref(baseDades, "Series");

let boton = document.getElementById('button');

boton.addEventListener("click", function () {
    push(ranking, input.value);
    clearScreen();
});

function addElement(e) {
    let elementLista = document.createElement("serie1");
    elementLista.id = e[0];
    elementLista.textContent = e[1];
    elementLista.addEventListener("click", function () {
        let localitzacioItem = ref(baseDades, `Series/${e[0]}`);
        remove(localitzacioItem);
    });
    lista.append(elementLista);
}

function clearScreen() {
    input.value = "";
}








/*
onValue(ranking, function (snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val());
        clearList();
        for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }
    } else {
        lista.innerHTML = "No items here yet...";
    }
});

function clearList() {
    lista.innerHTML = "";
}

*/

















    

