// suche nach eindeutige id=id4711 in index.html
var para = document.getElementById("id4711");
para.textContent = "Erleben, was verbindet!";

//  fetch("http://localhost:8080/personen.json");
//  var cell = document.getElementById("IdSabine");
//	fetch("personen.json")
//		.then( irgendwas => irgendwas.json() )
//		.then(myjson => console.log(myjson.personen[0].vorname));// json einlesen

function getPictoImg(anrede) {
	switch (anrede) {
		case "Herr":
			return 'images/man.png';
		case "Frau":
			return 'images/frau.png';
		case "Sonstiges":
			return 'images/unbekannt.png';
		default:
			return 'images/unbekannt.png';
	}
}

// Submit: aus dem Browser einlesen und an den Server posten (method: POST)
function oninputclick(event) {   // bei event-click
	event.preventDefault();      // verhindert dass das event von Browser verwendet wird (verhindert GET-Request)
	var id = document.getElementById("id000").value;
	var anrede = document.getElementById("id001").value;
	var vorname = document.getElementById("id002").value;
	var nachname = document.getElementById("id003").value;
	var date = document.getElementById("id004").value;
	var ort = document.getElementById("id005").value;
	var email = document.getElementById("id006").value;
	var jsonDataString = `{"id":"${id}","anrede":"${anrede}","vorname":"${vorname}","nachname":"${nachname}","birthDate":"${date}","standort":"${ort}","email":"${email}"}`;
		
	fetch("/json/person", {
		method: 'POST',
		body: jsonDataString,
		headers: { 'Content-Type': 'application/json' } 		    
	});	
	resetById(idform);
	onRefreshClick();
}

// Update: aus dem Browser einlesen und an den Server aktualisieren (method: PUT)
function onUpdateClick(event) {
	event.preventDefault();
	var id = document.getElementById("id000").value;
	var anrede = document.getElementById("id001").value;
	var vorname = document.getElementById("id002").value;
	var nachname = document.getElementById("id003").value;
	var date = document.getElementById("id004").value;
	var ort = document.getElementById("id005").value;
	var email = document.getElementById("id006").value;
	var jsonDataString = `{"id":"${id}","anrede":"${anrede}","vorname":"${vorname}","nachname":"${nachname}","birthDate":"${date}","standort":"${ort}","email":"${email}"}`;
		
	fetch(`/json/person/${id}`, {
		method: 'PUT',
		body: jsonDataString,
		headers: { 'Content-Type': 'application/json' } 		    
	});	
}

// Delete: ID aus dem Browser einlesen und an den Server zum DELETE routen
function onDeleteClick(event) {   
	event.preventDefault();
	var id = document.getElementById("id000").value;
	fetch(`/json/person/${id}`, {
		method: 'DELETE'
	});	
}

function onDeleteAllClick(event) {
	event.preventDefault();
	fetch("/json/person/all", {
		method: 'DELETE'
	});
}

function getJson(serverResponse) { 	// serverResponse beinhaltet json mit allen kommunikations-metadaten
	return serverResponse.json();	// .json ist der reine json-inhalt
}
	
/**
* Json wird vom Server in Browser ausgegeben
* hier wird gepr??ft, ob Liste der Teilnehmern noch leer ist:
* wenn ja, wird table-header anhand remove ausgeblendet
* (class .hideit in mycss.css)
* und wenn mindestens eine Person submitet ist soll die Tabelle nach dem Refresh mit header angezeigt werden.    
*/
function getTxtFromJsonUndPackInsHTMLForTable(myjson) {
	var i = 0;
	var t_header = document.getElementById("thid001");
	var t_body = document.getElementById("tbid001");

	if (myjson.personen.length == 0) {	
		t_header.classList.add("hideit");     // table-header unsichtbar      
	} 
	else {
		t_header.classList.remove("hideit");  // table-header sichtbar
	}		
	
	// table wird neu gebaut
	for (var laufvariable of myjson.personen) {
		t_body.insertAdjacentHTML("beforeend",
			"<tr>"
		    	+ `<td> ${++i} </td>` // id automatisch vergeben; Neu: Id wird im Browser gelesen und gespeichert
				+ "<td><img src='" + getPictoImg(laufvariable.anrede)+"'+ width=25px height=25px></td>"
				+ "<td>" + laufvariable.id + "</td>"
				+ "<td>" + laufvariable.anrede + "</td>"
				+ "<td>" + laufvariable.vorname + "</td>"
				+ "<td>" + laufvariable.nachname + "</td>"
				+ "<td>" + laufvariable.birthDate + "</td>"
				+ "<td>" + laufvariable.standort + "</td>"
				+ "<td>" + laufvariable.email + "</td>"
			+ "</tr>")
			//	document.getElementById("IdAnredeHerr").textContent = laufvariable.anrede;
			//	document.getElementById("IdVornameMicki").textContent = laufvariable.vorname;
	}
}

function resetById(id) {
	document.getElementById(id).reset();
}

function onRefreshClick() {
	document.getElementById(tbid001).innerHTML="";
	refreshTable();
}

/* bei jedem neu laden dieser Seite "/index.html" wird diese Funktion aufgerufen und die Tabelle
   wird neu gebaut */
function refreshTable() { 
	// Verbindung mit dem Server f??r Anzeige aller Personen bzw. fetch l??dt die Seite auf dem Server
	fetch("/json/persons/all")
		.then(getJson) 				  	 // entspricht: .then( irgendwas => irgendwas.json() )
		.then(getTxtFromJsonUndPackInsHTMLForTable)  // entpricht: cell.textContent = myjson.personen[0].vorname);
}

refreshTable();
	
// Submit
document.getElementById("id010").addEventListener("click",oninputclick);

// Delete
document.getElementById("id012").addEventListener("click",onDeleteClick);

// Update
document.getElementById("id013").addEventListener("click",onUpdateClick);

// Delete All
document.getElementById("id014").addEventListener("click",onDeleteAllClick);

// Refresh
document.getElementById("id015").addEventListener("click",onRefreshClick);		
		