package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import de.telekom.sea3.webserver.model.Person;
import de.telekom.sea3.webserver.model.Personen;
import de.telekom.sea3.webserver.model.Size;
import de.telekom.sea3.webserver.service.PersonService;

// mit dieser Annotation braucht man @ResponseBody nicht mehr
@RestController 
public class PersonRestController {

	private PersonService personService;
	
	@Autowired
	public PersonRestController(PersonService personService) {
		super();
		this.personService = personService;
	}
	
	/**
	 * @see <a href="http://localhost:8080/json/persons/all">http://localhost:8080/json/persons/all</a>
	 */
	@GetMapping("/json/persons/all")  
	public Personen getAllPersons() {  	
		return personService.getPersons();
	}
	
	/**
	 * @see <a href="http://localhost:8080/json/persons/size">http://localhost:8080/json/persons/size</a>
	 * @return
	 */
	@GetMapping("/json/persons/size")  
	public Size getSize() {
		return new Size(personService.getSize());
	}
	
	/**
	 * @see <a href="http://localhost:8080/json/person/{id}">http://localhost:8080/json/person/{id}</a>
	 * @return
	 */
	@GetMapping("/json/person/{id}")  
	public Person getPerson(@PathVariable("id") int id) {
		return personService.get(id);
	}
	
}
