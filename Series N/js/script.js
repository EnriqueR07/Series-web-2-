import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://serie-nexflix-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const ranking = ref(baseDades, "Series");

let button = document.getElementById('afageix');
button.addEventListener("click", function() {
    let peli = {};
    peli.nombre = document.getElementById('inputFieldNom').value;
    peli.ranking = document.getElementById('inputField').value;
    peli.url = document.getElementById('url').value;

    push(ranking, peli);
});

function addElement(e) {
    let elementLista = document.createElement("li");
    elementLista.id = e[0];
    elementLista.textContent = e[1];
    elementLista.addEventListener("click", function() {
        let localitzacioItem = ref(baseDades, `Series/${e[0]}`);
        remove(localitzacioItem);
    });
    document.getElementById('ranking').append(elementLista);
}

function clearList() {
    document.getElementById('ranking').innerHTML = "";
}

function clearScreen() {
    document.getElementById('ranking').value = "";
}

onValue(ranking, function(snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val());
        clearList();
        for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }
    } else {
        document.getElementById('ranking').innerHTML = "No items here yet...";
    }
});


/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://serie-nexflix-default-rtdb.europe-west1.firebasedatabase.app/"
};;
const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const ranking = ref(baseDades, "Series Nexflix");






            <input type="url" id="url" >









let button = document.getElementById('afageix');
button.addEventListener("click", function() {
    let peli = {
        nombre: document.getElementById('inputFieldNom').value,
        ranking: document.getElementById('inputField').value,
        url: document.getElementById('url').value
    };
    push(ranking, peli)
        .then(() => {
            console.log("Data saved successfully!");
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
        });
});


function addElement(e) {
    let elementLista = document.createElement("li");
    elementLista.id = e[0];
    elementLista.textContent = e[1];
    elementLista.addEventListener("click", function() {
        let localitzacioItem = ref(baseDades, `Series Nexflix/${e[0]}`);
        remove(localitzacioItem);
    });
    document.getElementById('ranking').append(elementLista);
}

function clearList() {
    document.getElementById('ranking').innerHTML = "";
}

function clearScreen() {
    document.getElementById('ranking').value = "";
}

onValue(ranking, function(snapshot) {
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val());
        clearList();
        for (let i = 0; i < resultats.length; i++) {
            addElement(resultats[i]);
        }
    } else {
        document.getElementById('ranking').innerHTML = "No items here yet...";
    }
});*/
