package de.telekom.sea3.webserver.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Repository;
import de.telekom.sea3.webserver.model.Person;

@Repository  // with this annotation it will created an instance of this class  
public class PersonRepository {

	private List<Person> personen = new ArrayList<Person>();
	
	public PersonRepository() {
		super();
	}
	
	public int getSize() {
		return personen.size();
	}
	
	public boolean add(Person person) {
		return personen.add(person);
	}
	
	public List<Person> getAll() {
		return personen;
	}

	public boolean remove(Person person) {
		return personen.remove(person);
	}
	
}

