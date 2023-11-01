package com.example.cantinago.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter

public class Gerente {
      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_gerente;
    private String nome;
    private String email; 
}
