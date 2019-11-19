/**
 * 
 */
package com.embracon.teste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embracon.teste.model.Colaborador;

/**
 * @author lucianohcaldas
 *
 */


@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Long>{

}
