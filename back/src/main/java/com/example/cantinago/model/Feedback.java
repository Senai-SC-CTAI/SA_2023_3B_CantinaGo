package com.example.cantinago.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date; 

@Getter
@Setter

@Entity
public class Feedback {
    
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Date data;
  private String comentario;
}
