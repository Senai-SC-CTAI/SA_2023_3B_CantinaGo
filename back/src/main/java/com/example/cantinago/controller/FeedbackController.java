package com.example.cantinago.controller;
import com.example.cantinago.model.Feedback;
import com.example.cantinago.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = {"http://localhost:5173","http://localhost:19006"}) // Endereco do front app e web
@RestController
@RequestMapping("/feedback")

public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @GetMapping
    public List<Feedback> listarFeedback() {
        return feedbackRepository.findAll();
    }

    @PostMapping
    public Feedback criarFeedback(@RequestBody Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @DeleteMapping("/{id_feedback}")
    public ResponseEntity<String> deleteFeedback(@PathVariable Long id_feedback) {
        if (feedbackRepository.existsById(id_feedback)) {
            feedbackRepository.deleteById(id_feedback);
            return ResponseEntity.ok("Feedback deletado com sucesso");
          } else {
            return ResponseEntity.notFound().build();
           }
    }

        @PutMapping("/{id_feedback}")
    public ResponseEntity<Feedback> atualizarFeedback(@PathVariable Long id_feedback, @RequestBody Feedback feedbackAtualizado) {
        if (feedbackRepository.existsById(id_feedback)) {
            Feedback feedback = feedbackRepository.findById(id_feedback).get();
            feedback.setData(feedbackAtualizado.getData());
            feedback.setComentario(feedbackAtualizado.getComentario());
            // feedback.setUsuario(feedbackAtualizado.getUsuario());

            Feedback feedbackAtualizadoBD = feedbackRepository.save(feedback);
            return ResponseEntity.ok(feedbackAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}