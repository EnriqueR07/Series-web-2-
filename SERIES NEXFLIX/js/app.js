const firebaseConfig = {
    apiKey: "AIzaSyD-sK2kNgb6-jw5IVX863j2N78qi8a9EZg",
    authDomain: "prueba-a7665.firebaseapp.com",
    projectId: "prueba-a7665",
    storageBucket: "prueba-a7665.appspot.com",
    messagingSenderId: "415205615689",
    appId: "1:415205615689:web:5d3465b4d1180590597798",
    measurementId: "G-XYXMZ1SBPD"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const seriesList = document.querySelector('.series-list');
const ratingForm = document.getElementById('ratingForm');
const stars = document.querySelectorAll('.fa-star');

// Evento de selección de estrellas
stars.forEach(star => {
    star.addEventListener('click', function() {
        stars.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        const rating = this.getAttribute('data-rating');
        ratingForm.dataset.rating = rating;
    });
});

// Función para añadir una serie a la lista en el HTML
const addSeriesToList = (seriesName, rating) => {
    const seriesItem = document.createElement('div');
    seriesItem.innerHTML = `
        <h3>${seriesName}</h3>
        <p>Calificación: ${'★'.repeat(rating)}</p>
    `;
    seriesList.appendChild(seriesItem);
};

// Evento de envío del formulario
ratingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const seriesName = document.getElementById('seriesName').value;
    const rating = ratingForm.dataset.rating;

    if (seriesName && rating) {
        // Guardar en Firestore
        await db.collection('ratings').add({ seriesName, rating: parseInt(rating) });

        // Mostrar en la página
        addSeriesToList(seriesName, rating);
        alert("¡Calificación enviada!");

        // Resetear el formulario y estrellas
        ratingForm.reset();
        stars.forEach(star => star.classList.remove('active'));
    } else {
        alert("Por favor, selecciona una serie y una calificación.");
    }
});

// Cargar calificaciones de Firestore al cargar la página
const loadRatings = async () => {
    const ratings = await db.collection('ratings').get();
    ratings.docs.forEach(doc => {
        const data = doc.data();
        addSeriesToList(data.seriesName, data.rating);
    });
};

loadRatings();
