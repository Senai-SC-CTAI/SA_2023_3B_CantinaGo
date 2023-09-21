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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
  
  
}
