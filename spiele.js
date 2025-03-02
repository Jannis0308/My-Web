// spiele.js
import { db, ref, onValue } from './firebase.js';  // Importiere die benötigten Funktionen

const spieleListe = document.getElementById("spiele-liste");

onValue(ref(db, "spiele"), snapshot => {
    spieleListe.innerHTML = "";
    snapshot.forEach(childSnapshot => {
        const spiel = childSnapshot.val();
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${spiel.titel}</h3>
            <p>${spiel.beschreibung}</p>
            <a href="${spiel.download}" target="_blank">Download</a>
            ${spiel.spielLink ? `<br><a href="${spiel.spielLink}" target="_blank">Jetzt spielen</a>` : ""}
        `;
        spieleListe.appendChild(li);
    });
});
