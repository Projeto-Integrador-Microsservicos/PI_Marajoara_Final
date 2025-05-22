package br.com.projetoMarajoara.Controller;

import br.com.projetoMarajoara.Model.Evento;
import br.com.projetoMarajoara.Service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class InfoEventoController {

    @Autowired
    EventoService es;

    @PostMapping("/addEvento")
    public String addEvento(@ModelAttribute("evento")Evento evento,
                            @RequestParam("image") MultipartFile image)  throws IOException {
        es.save(evento, image);
        return "redirect:/";
    }

    @PostMapping("/updateEvento")
    public String updateAchado(@ModelAttribute("evento") Evento evento,
                               @RequestParam("image") MultipartFile image) throws IOException {

        Evento oldImage = es.getById(evento.getId());
        if(image.isEmpty()) {
            es.saveButkeepImage(evento, oldImage);
        }else {
            es.save(evento, image);
        }

        return "redirect:/";
    }

    @PostMapping("/deleteEvento/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        es.deleteViaId(id);
        return "redirect:/";
    }

}
