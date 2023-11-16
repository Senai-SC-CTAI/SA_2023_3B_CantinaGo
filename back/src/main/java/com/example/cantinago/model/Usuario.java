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
<<<<<<< HEAD
    @Column(name = "is_admin", nullable = false, columnDefinition = "boolean default false")
    private boolean isAdmin;
=======
    //private boolean isAdmin;
>>>>>>> d1ff855c213ddebdbebd950138446a49cf81f510
}
