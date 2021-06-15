package de.telekom.sea3.webserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.telekom.sea3.webserver.model.Personen;
import de.telekom.sea3.webserver.repository.PersonRepository;

@Service
public class PersonService {

	private PersonRepository personRepository;

	@Autowired
	public PersonService(PersonRepository personRepository) {
		super();
		this.personRepository = personRepository;
		System.out.println("PersonService wird instanziert: " + this.toString());
		System.out.println("Personrepository wird instanziert: " + personRepository.toString());
	}
	
	public int getSize() {
		return personRepository.getSize();
	}
	
	public Personen getPersons() {
		return new Personen();
	}
}
