package com.example.cantinago.controller;
package com.example.cantinago.controller;
import com.example.cantinago.model.Funcionario;
import com.example.cantinago.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")//Endereço do front
@RestController
@RequestMapping("/funcionarios")

public class FuncionarioController {
    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @GetMapping
    public List<Funcionario> listarFuncionarios() {
    return funcionarioRepository.findAll();
  }
    @PostMapping
    public Funcionario criarFuncionario(@RequestBody Funcionario funcionario) {
    return funcionarioRepository.save(funcionario);
  }
    @DeleteMapping("/{id_funcionario}")
    public ResponseEntity<String> deletarFuncionario(@PathVariable Long id_funcionario) {
    if (funcionarioRepository.existsById(id_funcionario)) {
      funcionarioRepository.deleteById(id_funcionario);
      return ResponseEntity.ok("Funcionario deletado com sucesso");
    } else {
      return ResponseEntity.notFound().build();
     }
    }
    @PutMapping("/{id_funcionario}")
    public ResponseEntity<Funcionario> atualizarFuncionario(@PathVariable Long id_funcionario, @RequestBody Funcionario funcionarioAtualizado) {
        if (funcionarioRepository.existsById(id_funcionario)) {
            Funcionario funcionario = funcionarioRepository.findById(id_funcionario).get();
            funcionario.setNome(funcionarioAtualizado.getNome());
            funcionario.setSobrenome(funcionarioAtualizado.getSobrenome());
            funcionario.setEmail(funcionarioAtualizado.getEmail());

            Funcionario funcionarioAtualizadoBD = funcionarioRepository.save(funcionario);
            return ResponseEntity.ok(funcionarioAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

