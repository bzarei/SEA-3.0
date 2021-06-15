package de.telekom.sea3.webserver.repository;

import org.springframework.stereotype.Repository;

@Repository  // with this annotation it will created an instance of this class  
public class PersonRepository {
	
	public PersonRepository() {
		super();
	}
	
	public int getSize() {
		return 0;
	}
}

