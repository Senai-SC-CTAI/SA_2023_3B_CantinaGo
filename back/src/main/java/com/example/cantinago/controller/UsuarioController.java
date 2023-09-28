package com.example.cantinago.controller;
import com.example.cantinago.model.Usuario;
import com.example.cantinago.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:19006") // Endereço do front
@RestController

@RequestMapping("/usuario")

public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping

    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping("/{id_usuario}")
    
    public ResponseEntity<String> deletarUsuario(@PathVariable Long id_usuario) {
    if (usuarioRepository.existsById(id_usuario)) {
      usuarioRepository.deleteById(id_usuario);
      return ResponseEntity.ok("Usuario deletado com sucesso");
    } else {
      return ResponseEntity.notFound().build();
     }
    }
    
    @PutMapping("/{id_usuario}")
    
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Long id_usuario, @RequestBody Usuario usuarioAtualizado) {
        if (usuarioRepository.existsById(id_usuario)) {
            Usuario usuario = usuarioRepository.findById(id_usuario).get();
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setSobrenome(usuarioAtualizado.getSobrenome());
            usuario.setSenha(usuarioAtualizado.getSenha());
            usuario.setConfirmarSenha(usuarioAtualizado.getConfirmarSenha());;
            // usuario.setSobrenome(usuarioAtualizado.getSobrenome());
            usuario.setEmail(usuarioAtualizado.getEmail());
            usuario.setTelefone(usuarioAtualizado.getTelefone());
            usuario.setTurma(usuarioAtualizado.getTurma());
            Usuario usuarioAtualizadoBD = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
