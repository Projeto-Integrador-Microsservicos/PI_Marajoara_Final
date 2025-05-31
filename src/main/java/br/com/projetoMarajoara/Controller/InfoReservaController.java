package br.com.projetoMarajoara.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.projetoMarajoara.Model.Reserva;
import br.com.projetoMarajoara.Service.ReservaService;

@Controller
public class InfoReservaController {

    @Autowired
    ReservaService rs;
    
    @PostMapping("/addReserva")
    public String addReserva(@ModelAttribute("reserva") Reserva reserva, RedirectAttributes redirectAttributes) throws IOException {
        if (rs.isPeriodoReservado(reserva.getEspaco(), reserva.getData(), reserva)) {
            redirectAttributes.addFlashAttribute("erro", "Este período já está reservado. Escolha outro período ou outro dia.");
            return "redirect:/morador/aluguel";
        }

        rs.save(reserva);
        redirectAttributes.addFlashAttribute("sucesso", "Reserva realizada com sucesso!");
        return "redirect:/morador/aluguel";
    }



    @PostMapping("/deleteReserva/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        rs.deleteViaId(id);
        return  "redirect:/morador/aluguel";
    }
}