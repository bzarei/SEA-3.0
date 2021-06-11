// suche nach eindeutige id=id4711 in index.html
var para = document.getElementById("id4711");
para.textContent = "Hello from JavaScript";

//  fetch("http://localhost:8080/personen.json");
//  var cell = document.getElementById("IdSabine");
//	fetch("personen.json")
//		.then( irgendwas => irgendwas.json() )
//		.then(myjson => console.log(myjson.personen[0].vorname));// json einlesen

function getPic(anrede) {
	switch (anrede) {
		case "Herr":
			return 'images/man.png';
		case "Frau":
			return 'images/frau.png';
		default:
			return 'images/fragezeichen.png';
	}
}

function getJson(meta) { 	// meta beinhaltet json mit allen kommunikations-metadaten
	return meta.json();	    // meta.json ist der reine json-inhalt
}

// celle ersetzen
function getTxtFromJsonUndPackInsHTML(myjson) {

	var tabelle = document.getElementById("tid001");
	var i = 0;
	for (var laufvariable of myjson.personen) {
		tabelle.insertAdjacentHTML("beforeend",
			"<tr>"
			+ `<td> ${++i} </td>`
			+ "<td><img src='" + getPic(laufvariable.anrede) + "'></td>"
			+ "<td>" + laufvariable.anrede + "</td>"
			+ "<td>" + laufvariable.vorname + "</td>"
			+ "<td>" + laufvariable.nachname + "</td>"
			+ "</tr>")
		//	document.getElementById("IdAnredeHerr").textContent = laufvariable.anrede;
		//	document.getElementById("IdVornameMicki").textContent = laufvariable.vorname;
		//	document.getElementById("IdNachnameMaus").textContent = laufvariable.nachname;
	}
}

fetch("personen.json")
	.then(getJson) 					  	 // entspricht: .then( irgendwas => irgendwas.json() )
	.then(getTxtFromJsonUndPackInsHTML)  // entpricht: cell.textContent = myjson.personen[0].vorname);