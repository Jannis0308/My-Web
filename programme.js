import { db, ref, onValue } from "./firebase.js";

const programmListe = document.getElementById("programme-liste");

// Programme aus Firebase laden
onValue(ref(db, "spiele"), snapshot => {
    spieleListe.innerHTML = "";
    snapshot.forEach(childSnapshot => {
        const spiel = childSnapshot.val();
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${programm.titel}</h3>
            <p>${programm.beschreibung}</p>
            <a href="${programm.download}" target="_blank">Download</a>
            ${programm.programmLink ? `<br><a href="${programm.prLink}" target="_blank">Jetzt spielen</a>` : ""}
        `;
        spieleListe.appendChild(li);
    });
});

