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

    public Long getId_gerente() {
        return id_gerente;
    }

    public void setId_gerente(Long id_gerente) {
        this.id_gerente = id_gerente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

   
}
