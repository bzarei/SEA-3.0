package de.telekom.sea3.webserver.service;

import java.util.List;
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
	
	public int size() {
		return personRepository.size();
	}
	
	public Personen getAll() {
		return new Personen(personRepository.getAll());
	}
	
	public List<Person> getAll4ServerTemplate() {
		return personRepository.getAll4ServerTemplate();
	}
	
	public Person get(int id) {
		return new Person(1, "Herr", "Max", "Mustermann", "10-12-1980", "Bonn", "Max.Mustermann@telekom.de");
	}
	
	public Person add(Person person) {
		System.out.println("Person wurde angelegt.");
		personRepository.add(person);
		return person;
	}

	public void remove(Integer id) {
		personRepository.remove(id);
	}
	
//	public Person update(Integer id, Person p) {
//		return personRepository.update(id,p);
//	}
}
