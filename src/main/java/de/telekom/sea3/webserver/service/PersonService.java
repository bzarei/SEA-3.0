package de.telekom.sea3.webserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.telekom.sea3.webserver.model.Person;
import de.telekom.sea3.webserver.model.Personen;
import de.telekom.sea3.webserver.repository.PersonRepository;

@Service
public class PersonService {

	private PersonRepository personRepository;

	@Autowired
	public PersonService(PersonRepository personRepository) {
		super();
		this.personRepository = personRepository;
	}
	
	public int getSize() {
		return personRepository.getSize();
	}
	
	public Personen getPersons() {
		return new Personen(personRepository.getAll());
	}
	
	public Person get(int id) {
		return new Person("Herr", "Max", "Muster");
	}
	
	public Person add(Person person) {
		System.out.println("Person wurde angelegt.");
		personRepository.add(person);
		return person;
	}

	public Person remove(Person person) {
		System.out.println("Person wurde gelöscht.");
		personRepository.remove(person);
		return person;
	}
	
}
