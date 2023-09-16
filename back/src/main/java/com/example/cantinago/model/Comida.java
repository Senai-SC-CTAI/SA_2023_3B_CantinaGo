package com.example.cantinago.model;
import jakarta.persistence.*;

@Entity
public class Comida {
    
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;
  private Integer calorias;
  private Double preco;

  @ManyToOne
  @JoinColumn(name = "id_bebida")
  private Bebida bebida;

  @ManyToOne
  @JoinColumn(name = "id_doce")
  private Doce doce;
  
  @ManyToOne
  @JoinColumn(name = "id_salgado")
  private Salgado salgado;
  
  @Column(name = "Comida_TIPO")
  private Integer tipo;

  // getters e setters
}
