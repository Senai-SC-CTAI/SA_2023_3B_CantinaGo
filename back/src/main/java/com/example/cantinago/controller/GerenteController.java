package com.example.cantinago.controller;
import com.example.cantinago.model.Gerente;
import com.example.cantinago.repository.GerenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")//Endereço do front
@RestController
@RequestMapping("/gerente")

public class GerenteController {
    @Autowired
    private GerenteRepository gerenteRepository;

    @GetMapping
    public List<Gerente> listarGerentes() {
    return gerenteRepository.findAll();
  }
    @PostMapping
    public Gerente criarGerente(@RequestBody Gerente gerente) {
    return gerenteRepository.save(gerente);
  }
    @DeleteMapping("/{id_gerente}")
    public ResponseEntity<String> deletarGerente(@PathVariable Long id_gerente) {
    if (gerenteRepository.existsById(id_gerente)) {
      gerenteRepository.deleteById(id_gerente);
      return ResponseEntity.ok("Gerente deletado com sucesso");
    } else {
      return ResponseEntity.notFound().build();
     }
    }
    @PutMapping("/{id_gerente}")
    public ResponseEntity<Gerente> atualizarGerente(@PathVariable Long id_gerente, @RequestBody Gerente gerenteAtualizado) {
        if (gerenteRepository.existsById(id_gerente)) {
            Gerente gerente = gerenteRepository.findById(id_gerente).get();
            gerente.setNome(gerenteAtualizado.getNome());
            gerente.setEmail(gerenteAtualizado.getEmail());

            Gerente gerenteAtualizadoBD = gerenteRepository.save(gerente);
            return ResponseEntity.ok(gerenteAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

