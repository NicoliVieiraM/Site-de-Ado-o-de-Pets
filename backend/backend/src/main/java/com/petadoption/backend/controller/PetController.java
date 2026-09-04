package com.petadoption.backend.controller;

import com.petadoption.backend.model.Pet;
import com.petadoption.backend.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = "*") 
public class PetController {

    @Autowired
    private PetRepository petRepository;

  
    @GetMapping
    public List<Pet> listarTodos() {
        return petRepository.findAll();
    }

    
    @PostMapping
    public Pet salvar(@RequestBody Pet pet) {
        return petRepository.save(pet);
    }

       
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        petRepository.deleteById(id);
    }
}