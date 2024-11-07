import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputField");
const boto = document.getElementById("afegir");
const lista = document.getElementById("llista");

const appSettings = {
    databaseURL: "https://console.firebase.google.com/project/serie-nexflix/database/serie-nexflix-default-rtdb/data/~2F?hl=es-419"
}



let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");


function gfg(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}


function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}

import { getDatabase } from "firebase/database";

const database = getDatabase();



import { getDatabase, ref, push, set } from "firebase/database";

// Create a new post reference with an auto-generated id
const db = getDatabase();
const postListRef = ref(db, 'posts');
const newPostRef = push(postListRef);
set(newPostRef, {
    // ...
});





import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

const db = getDatabase();
const commentsRef = ref(db, 'post-comments/' + postId);
onChildAdded(commentsRef, (data) => {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

onChildChanged(commentsRef, (data) => {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});

onChildRemoved(commentsRef, (data) => {
  deleteComment(postElement, data.key);
});






import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const dbRef = ref(db, '/a/b/c');

onValue(dbRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    // ...
  });
}, {
  onlyOnce: true
});






import { getDatabase, ref, query, orderByChild } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();

const myUserId = auth.currentUser.uid;
const topUserPostsRef = query(ref(db, 'user-posts/' + myUserId), orderByChild('starCount'));







*/








/* https://firebase.google.com/docs/database/admin/save-data?hl=es-419#java*/
/* https://www.geeksforgeeks.org/star-rating-using-html-css-and-javascript/*/

