package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import de.telekom.sea3.webserver.model.Personen;
import de.telekom.sea3.webserver.service.PersonService;

@Controller
public class PersonRestController {

	private PersonService personService;
	
	@Autowired
	public PersonRestController(PersonService personService) {
		super();
		this.personService = personService;
	}
	
	@GetMapping("/personen")         // URL: "http://localhost:8080/personen"  
	@ResponseBody
	public String getAllPersons() {  
		
		Personen personen = personService.getPersons();
//		personen.toJson();
		
		String str = "{\n"
				+ "	\"personen\": [\n"
				+ "		{\n"
				+ "			\"anrede\": \"Frau\",\n"
				+ "			\"vorname\": \"Salma\",\n"
				+ "			\"nachname\": \"Alizadeh\"\n"
				+ "		},\n"
				+ "		{\n"
				+ "			\"anrede\": \"Herr\",\n"
				+ "			\"vorname\": \"Bobi\",\n"
				+ "			\"nachname\": \"Zamani\"\n"
				+ "		},\n"
				+ "		{\n"
				+ "			\"anrede\": \"\",\n"
				+ "			\"vorname\": \"Otto\",\n"
				+ "			\"nachname\": \"Magler\"\n"
				+ "		}\n"
				+ "	]\n"
				+ "}";
		
		return str;
	}
}
