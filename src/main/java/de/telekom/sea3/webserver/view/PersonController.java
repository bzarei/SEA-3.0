package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import de.telekom.sea3.webserver.service.PersonService;

@Controller
public class PersonController {

	private PersonService personService;
	
	@Autowired
	public PersonController(PersonService personService) {
		super();
		this.personService = personService;
		System.out.println("PersonController wird instanziert: " + this.toString());
		System.out.println("PersonService wird instanziert: " + personService.toString());
	}
	
}
