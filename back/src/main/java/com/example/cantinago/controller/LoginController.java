package com.example.cantinago.controller;
import com.example.cantinago.model.Login;
import com.example.cantinago.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:19006") // Endereço do front
@RestController

@RequestMapping("/login")

public class LoginController {
    @Autowired
    private LoginRepository loginRepository;

    @GetMapping

    public List<Login> listarLogins() {
        return loginRepository.findAll();
    }

    @PostMapping

    public Login criarLogin(@RequestBody Login login) {
        return loginRepository.save(login);
    }

    
    @PutMapping("/{id_login}")
    
    public ResponseEntity<Login> atualizarLogin(@PathVariable Long id_login, @RequestBody Login loginAtualizado) {
        if (loginRepository.existsById(id_login)) {
            Login login = usuarioRepository.findById(id_login).get();
            login.setSenha(loginAtualizado.getSenha());
            login.setEmail(loginAtualizado.getEmail());
            Login loginAtualizadoBD = loginRepository.save(login);
            return ResponseEntity.ok(loginAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
