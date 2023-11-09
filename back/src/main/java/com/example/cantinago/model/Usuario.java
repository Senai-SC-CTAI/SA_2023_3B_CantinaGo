package com.example.cantinago.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;


@Entity
@Getter
@Setter
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;
    private String nome;
    private String sobrenome;
    private String senha;
    private String confirmarSenha;
    private String email;
    private String turma;
    private String telefone;
    private boolean isAdmin;
}
