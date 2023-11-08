package com.example.cantinago.repository;
import com.example.cantinago.model.Comida;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComidaRepository extends JpaRepository<Comida, Long> {
    List<Comida> findByNome(String Nome)
}
