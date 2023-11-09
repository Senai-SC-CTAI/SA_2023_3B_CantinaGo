package com.example.cantinago.controller;

import com.example.cantinago.model.Comida;
import com.example.cantinago.repository.ComidaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173")//Endereço do front
@RestController
@RequestMapping("/comidas")

public class ComidaController {

    @Autowired
    private ComidaRepository comidaRepository;

    @GetMapping
    public List<Comida> listarComidas() {
        return comidaRepository.findAll();
    }

    @PostMapping
    public Comida criarComida(@RequestBody Comida comida) {
        return comidaRepository.save(comida);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarComida(@PathVariable Long id) {
        if (comidaRepository.existsById(id)) {
            comidaRepository.deleteById(id);
            return ResponseEntity.ok("Comida deletada com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comida> atualizarComida(@PathVariable Long id, @RequestBody Comida comidaAtualizado) {
        if (comidaRepository.existsById(id)) {
            Comida comida = comidaRepository.findById(id).get();
            comida.setNome(comidaAtualizado.getNome());
            comida.setCalorias(comidaAtualizado.getCalorias());
            comida.setPreco(comidaAtualizado.getPreco());
            comida.setIngredientes(comidaAtualizado.getIngredientes());

            Comida comidaAtualizadoBD = comidaRepository.save(comida);
            return ResponseEntity.ok(comidaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
