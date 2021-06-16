package de.telekom.sea3.webserver.model;

public class Person {
	
	private int id;
	private String anrede;
	private String vorname;
	private String nachname;
	
	public Person() {
		
	}
	
	public Person(int id, String anrede, String vorname, String nachname) {
		this.id = id;
		this.anrede = anrede;
		this.vorname = vorname;
		this.nachname = nachname;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAnrede() {
		return anrede;
	}
	public void setAnrede(String anrede) {
		this.anrede = anrede;
	}
	public String getVorname() {
		return vorname;
	}
	public void setVorname(String vorname) {
		this.vorname = vorname;
	}
	public String getNachname() {
		return nachname;
	}
	public void setNachname(String nachname) {
		this.nachname = nachname;
	}
}
