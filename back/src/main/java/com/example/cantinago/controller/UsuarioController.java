package com.example.cantinago.controller;
import com.example.cantinago.model.Usuario;
import com.example.cantinago.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173") // Endereço do front
@RestController

@RequestMapping("/usuario")

public class UsuarioController {
    @Autowired
    private UsuarioRepository UsuarioRepository;

    @GetMapping

    public List<Usuario> listarUsuario() {
        return usuarioRepository.findAll();
    }

    @PostMapping

    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

}
