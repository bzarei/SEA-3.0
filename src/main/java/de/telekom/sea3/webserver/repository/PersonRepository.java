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
	
	public List<Person> getAll4ServerTemplate() {
		return personen;
	}

	public void remove(int id) {
		for (int i = 0; i < personen.size(); i++) {
			if (personen.get(i).getId() == id) {
				System.out.println(String.format("Id: %s wird gelöscht",personen.get(i).getId()));
				personen.remove(i);
			}	
		}
	}

	public Person update(int id, Person p) {
		for (int i = 0; i < personen.size(); i++) {
			if (personen.get(i).getId() == p.getId()) {
				System.out.println(String.format("Id: %s wird aktualisiert",personen.get(i).getId()));
				return personen.set(i, p);
			}	
		}
		return null;
	}

	public void removeAll() {
		personen.removeAll(getAll());
	}		
}

