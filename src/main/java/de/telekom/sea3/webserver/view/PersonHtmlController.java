package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import de.telekom.sea3.webserver.service.PersonService;

@Controller
public class PersonHtmlController {

	private static final String HTML_TEMPLATE = "\n"
			+ "<!doctype html>\n"
			+ "<html lang=de>\n"
			+ "<head>\n"
			+ "<meta charset=utf-8>\n"
			+ "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"images/favicon.ico\">"
			+ "<title>Title</title>\n"
			+ "</head>\n"
			+ "<body>size: %d</body>"
			+ "</html>";
	private PersonService personService;
	
	@Autowired
	public PersonHtmlController(PersonService personService) {
		super();
		this.personService = personService;
	}
	
	@GetMapping("/size")  // URL: "http://localhost:8080/size"  über diese Url wird die Methode getSize() erreicht
	@ResponseBody         // somit sagen wir dem Spring dass die Rückgabe-html String die Antwort in body ist
	public String getSize() {  // Rückgabe ist html 
		return String.format(HTML_TEMPLATE, personService.getSize());
	}
}
