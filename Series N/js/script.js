import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://serie-nexflix-default-rtdb.europe-west1.firebasedatabase.app/"
}; 
  

const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const ranking = ref(baseDades, "Series");
 



let button = document.getElementById('afageix');
button.addEventListener("click", function(){
    let peli = new Object();
    peli.nombre = "daesgfsdg"
    peli.ranking = "sdgsd"
    peli.url = "sdg"

    push(ranking, peli)

})



function addElement() {
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


let b = document.getElementById("afageix")
b.addEventListener("click",push)


document.getElementById("afageix").addEventListener("click",function(){
    
})



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







/*https://es.stackoverflow.com/questions/75631/c%C3%B3mo-almacenar-resultado-de-firebase-m%C3%A9todo-on-en-una-variabl*/




    

