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
}

// Update: aus dem Browser einlesen und an den Server updaten (method: PUT)
function onUpdateclick(event) {
	event.preventDefault();
	var id = document.getElementById("id000").value;
	var anrede = document.getElementById("id001").value;
	var vorname = document.getElementById("id002").value;
	var nachname = document.getElementById("id003").value;
	var date = document.getElementById("id004").value;
	var ort = document.getElementById("id005").value;
	var email = document.getElementById("id006").value;
	var jsonDataString = `{"id":"${id}","anrede":"${anrede}","vorname":"${vorname}","nachname":"${nachname}","birthDate":"${date}","standort":"${ort}","email":"${email}"}`;
		
	fetch("/json/person", {
		method: 'PUT',
		body: jsonDataString,
		headers: {
			'Content-Type': 'application/json'
        } 		    
	});   		
}

// Delete: ID aus dem Browser einlesen und an den Server zum DELETE routen
function onDeleteClick(event) {   
	event.preventDefault();      	
	var id = document.getElementById("id000").value;  // old id011
	fetch(`/json/person/${id}`, {
		method: 'DELETE'
	});	
}

function getJson(serverResponse) { 	// serverResponse beinhaltet json mit allen kommunikations-metadaten
	return serverResponse.json();	// .json ist der reine json-inhalt
}
	
// Json vom Server wird in Browser ausgegeben
function getTxtFromJsonUndPackInsHTMLForTable(myjson) {
	var tabelle = document.getElementById("tid001");
	//var i = 0;
	
	//clean up table (shamelessly copied from Stackverflow)
	/*Array.prototype.slice.call(document.getElementsByTagName('tr')).forEach(
  		function(item) {
    	item.remove();
	}); */
	
	// table wird neu gebaut
	for (var laufvariable of myjson.personen) {
		tabelle.insertAdjacentHTML("beforeend",
			"<tr>"
//		    + `<td> ${++i} </td>`
			+ "<td>" + laufvariable.id + "</td>"
			+ "<td><img src='" + getImg(laufvariable.anrede) + "'></td>"
			+ "<td>" + laufvariable.anrede + "</td>"
			+ "<td>" + laufvariable.vorname + "</td>"
			+ "<td>" + laufvariable.nachname + "</td>"
			+ "<td>" + laufvariable.birthDate + "</td>"
			+ "<td>" + laufvariable.standort + "</td>"
			+ "<td>" + laufvariable.email + "</td>"
			+ "</tr>")
			//	document.getElementById("IdAnredeHerr").textContent = laufvariable.anrede;
			//	document.getElementById("IdVornameMicki").textContent = laufvariable.vorname;
			//	document.getElementById("IdNachnameMaus").textContent = laufvariable.nachname;
	}
}

function resetById(id) {
	document.getElementById(id).reset();
}

function onRefreshClick(event) {
	// change HTML content of table
	document.getElementById(tid001).innerHTML="";
	refreshTable();
}

function refreshTable() { 
	// Verbindung mit dem Server für Anzeige aller Personen bzw. fetch lädt die Seite auf dem Server
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
//document.getElementById("id014").addEventListener("click",onDeleteAll);

// Refresh
document.getElementById("id015").addEventListener("click",onRefreshClick);


		
		
		
		
		