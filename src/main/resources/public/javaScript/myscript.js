// suche nach eindeutige id=id4711 in index.html
var para = document.getElementById("id4711");
para.textContent = "Erleben, was verbindet!";

//  fetch("http://localhost:8080/personen.json");
//  var cell = document.getElementById("IdSabine");
//	fetch("personen.json")
//		.then( irgendwas => irgendwas.json() )
//		.then(myjson => console.log(myjson.personen[0].vorname));// json einlesen

function getImg(anrede) {
	switch (anrede) {
		case "Herr":
			return 'images/man_.png';
		case "Frau":
			return 'images/frau_.png';
		case "Sonstiges":
			return 'images/fragezeichen_.png';
		default:
			return 'images/fragezeichen_.png';
	}
}

function oninputclick(event) {   // bei event-click
	event.preventDefault();      // verhindert dass das event von Browser verwendet wird (verhindert GET-Request)
	console.log("click");
	var id = document.getElementById("id000").value;
	console.log(id);	
	var anrede = document.getElementById("id001").value;
	console.log(anrede);	
	var vorname = document.getElementById("id002").value;
	console.log(vorname);
	var nachname = document.getElementById("id003").value;
	console.log(nachname);
	
	var jsonDataString = `{"id": "${id}","anrede": "${anrede}", "vorname": "${vorname}", "nachname": "${nachname}"}`;
		console.log(jsonDataString);
		
	fetch("http://localhost:8080/json/person", {
		method: 'POST',  // oder PUT
		body: jsonDataString,
		headers: {
			'Content-Type': 'application/json'
        } 		    
	});   // fetch ist eigentlich PUSH wir wollen json an Server geben	
}

function onDeleteClick(event) {   
	event.preventDefault();      	
	var id = document.getElementById("id005").value;
	fetch(`http://localhost:8080/json/person/${id}`, {
		method: 'DELETE'
	});	
}

// Submit
var input = document.getElementById("id004");
input.addEventListener("click",oninputclick);


// Delete
var input = document.getElementById("id006");
input.addEventListener("click",onDeleteClick);

/* Update
var input = document.getElementById("id007");
input.addEventListener("click",onUpdateClick);*/

function getJson(meta) { 	// meta beinhaltet json mit allen kommunikations-metadaten
	return meta.json();	    // meta.json ist der reine json-inhalt
}

// Eine Zelle ersetzen
function getTxtFromJsonUndPackInsHTML(myjson) {
	var tabelle = document.getElementById("tid001");
	var i = 0;
	for (var laufvariable of myjson.personen) {
		tabelle.insertAdjacentHTML("beforeend",
			"<tr>"
			+ `<td> ${++i} </td>`
			+ "<td><img src='" + getImg(laufvariable.anrede) + "'></td>"
			+ "<td>" + laufvariable.anrede + "</td>"
			+ "<td>" + laufvariable.vorname + "</td>"
			+ "<td>" + laufvariable.nachname + "</td>"
			+ "</tr>")
			//	document.getElementById("IdAnredeHerr").textContent = laufvariable.anrede;
			//	document.getElementById("IdVornameMicki").textContent = laufvariable.vorname;
			//	document.getElementById("IdNachnameMaus").textContent = laufvariable.nachname;
	}
}

//console.log("Get ALL");
// Verbindung mit dem Server für Anzeige aller Personen bzw. fetch lädt die Seite auf dem Server
fetch("http://localhost:8080/json/persons/all")
	.then(getJson) 					  	 // entspricht: .then( irgendwas => irgendwas.json() )
	.then(getTxtFromJsonUndPackInsHTML)  // entpricht: cell.textContent = myjson.personen[0].vorname);
		
		
		
		
		
		