package com.example.cantinago.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;


@Entity
@Getter
@Setter
public class Login {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     public boolean autenticar(String email, String senha) {
     }
}
