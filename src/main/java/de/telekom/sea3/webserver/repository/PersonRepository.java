package de.telekom.sea3.webserver.repository;

import org.springframework.stereotype.Repository;

@Repository
public class PersonRepository {
	
	public PersonRepository() {
		super();
		System.out.println("Personrepository ist instanziert: " + this.toString());
	}
}
