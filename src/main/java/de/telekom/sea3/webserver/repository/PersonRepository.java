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
	
	public int size() {
		return personen.size();
	}
	
	public boolean add(Person person) {
		return personen.add(person);
	}
	
	public List<Person> getAll() {
		return personen;
	}

	public void remove(int id) {
		System.out.println("Size vor dem Löschen: " + personen.size());
		for (int i = 0; i < personen.size(); i++) {
			if (personen.get(i).getId() == id) {
				System.out.println(String.format("Id: %s wird gelöscht",personen.get(i).getId()));
				personen.remove(i);
			}	
		}
		System.out.println("Size nach dem Löschen: " + personen.size());
	}
	
}

