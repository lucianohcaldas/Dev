/**
 * 
 */
package com.embracon.teste.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embracon.teste.exception.ResourceNotFoundException;
import com.embracon.teste.model.Colaborador;
import com.embracon.teste.repository.ColaboradorRepository;



/**
 * @author lucianohcaldas
 *
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/embracon")
public class ColaboradorController {

	@Autowired
	private ColaboradorRepository colaboradorRepository;

	@GetMapping("/colaborador")
	public List<Colaborador> getAllColaboradors() {
		return colaboradorRepository.findAll();
	}

	@GetMapping("/colaborador/{id}")
	public ResponseEntity<Colaborador> getColaboradorById(@PathVariable(value = "id") Long colaboradorId)
			throws ResourceNotFoundException {
		Colaborador colaborador = colaboradorRepository.findById(colaboradorId)
				.orElseThrow(() -> new ResourceNotFoundException("Colaborador not found for this id :: " + colaboradorId));
		return ResponseEntity.ok().body(colaborador);
	}

	@PostMapping("/colaborador")
	public Colaborador createColaborador(@Valid @RequestBody Colaborador colaborador) {
		return colaboradorRepository.save(colaborador);
	}

	@PutMapping("/colaborador/{id}")
	public ResponseEntity<Colaborador> updateColaborador(@PathVariable(value = "id") Long colaboradorId,
			@Valid @RequestBody Colaborador colaboradorDetails) throws ResourceNotFoundException {
		Colaborador colaborador = colaboradorRepository.findById(colaboradorId)
				.orElseThrow(() -> new ResourceNotFoundException("Colaborador not found for this id :: " + colaboradorId));

		colaborador.setEmail(colaboradorDetails.getEmail());
		colaborador.setLastName(colaboradorDetails.getLastName());
		colaborador.setFirstName(colaboradorDetails.getFirstName());
		final Colaborador updatedColaborador = colaboradorRepository.save(colaborador);
		return ResponseEntity.ok(updatedColaborador);
	}

	@DeleteMapping("/colaborador/{id}")
	public Map<String, Boolean> deleteColaborador(@PathVariable(value = "id") Long colaboradorId)
			throws ResourceNotFoundException {
		Colaborador colaborador = colaboradorRepository.findById(colaboradorId)
				.orElseThrow(() -> new ResourceNotFoundException("Colaborador not found for this id :: " + colaboradorId));

		colaboradorRepository.delete(colaborador);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
