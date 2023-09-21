package com.example.cantinago.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Comida {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;
  private Integer calorias;
  private Double preco;
  private String categoria;

  @Column(name = "Comida_TIPO")
  private Integer tipo;
}
