package de.telekom.sea3.webserver.model;

import java.util.List;
import java.util.ArrayList;

public class Personen {
	
	private List<Person> personen = new ArrayList<Person>();

	public List<Person> getPersonen() {
		return personen;
	}

	public void setPersonen(List<Person> personen) {
		this.personen = personen;
	}

}