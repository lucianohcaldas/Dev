/**
 * 
 */
package com.embracon.teste.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * @author lucianohcaldas
 *
 */

@Entity
@Table(name = "colaborador")
public class Colaborador {


    private long id;
    private String firstName;
    private String lastName;
    private int idade;
    private String email;
 
    public Colaborador() {
  
    }
 
    public Colaborador(String firstName, String lastName, int idade,String email) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.idade = idade;
         this.email = email;
    }
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
        public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
 
    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
 
    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    @Column(name = "idade", nullable = false)
    public int getIdade() {
        return idade;
    }
    public void setIdade(int idade) {
        this.idade = idade;
    }
 
    @Column(name = "email", nullable = false)
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Colaborador [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + 
        						", idade" + idade +", email=" + email
        					+ "]";
    }
 
}