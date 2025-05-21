package br.com.projetoMarajoara.Controller.Reserva;

import br.com.projetoMarajoara.Model.Reserva;
import br.com.projetoMarajoara.Service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.io.IOException;

@Controller
public class ReservaInfoController {

    @Autowired
    ReservaService rs;

    @PostMapping("/addReserva")
    public String addReserva(@ModelAttribute("achado") Reserva reserva) throws IOException {
        rs.save(reserva);
        return "redirect:/";
    }

    @PostMapping("/deleteReserva/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        rs.deleteViaId(id);
        return "redirect:/";
    }


}
