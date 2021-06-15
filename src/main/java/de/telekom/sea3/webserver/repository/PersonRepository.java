package de.telekom.sea3.webserver.repository;

import org.springframework.stereotype.Repository;

@Repository  // wird dadurch Instanz dieser Klasse erzeugt
public class PersonRepository {
	
	public PersonRepository() {
		super();
		System.out.println("Personrepository ist instanziert: " + this.toString());
	}
	
	public int getSize() {
		return 0;
	}
}

