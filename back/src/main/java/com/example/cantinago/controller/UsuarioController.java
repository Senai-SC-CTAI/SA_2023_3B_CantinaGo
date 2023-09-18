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

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping

    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping("/{id_usuario}")
    
    public ResponseEntity<String> deletarUsuario(@PathVariable Long id) {
    if (UsuarioRepository.existsById(id_usuario)) {
      UsuarioRepository.deleteById(id_usuario);
      return ResponseEntity.ok("Usuario deletado com sucesso");
    } else {
      return ResponseEntity.notFound().build();
     }
    }
    
    @PutMapping("/{id_usuario}")
    
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Long id_usuario, @RequestBody Usuario usuarioAtualizado) {
        if (UsuarioRepository.existsById(id_usuario)) {
            Usuario usuario = UsuarioRepository.findById(id_usuario).get();
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setSobrenome(usuarioAtualizado.getSobrenome());
            usuario.setEmail(usuarioAtualizado.getEmail());

            Usuario usuarioAtualizadoBD = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
