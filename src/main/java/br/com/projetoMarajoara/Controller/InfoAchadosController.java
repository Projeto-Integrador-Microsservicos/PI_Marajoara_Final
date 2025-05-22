package br.com.projetoMarajoara.Controller;

import br.com.projetoMarajoara.Model.AchadosPerdidos;
import br.com.projetoMarajoara.Service.AchadosPerdidosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class InfoAchadosController {

    @Autowired
    AchadosPerdidosService as;

    @PostMapping("/addAchado")
    public String addAchado(@ModelAttribute("achado")AchadosPerdidos ac,
                            @RequestParam("image") MultipartFile image) throws IOException {

        as.save(ac, image);
        return "redirect:/";
    }

    @PostMapping("/updateAchado")
    public String updateAchado(@ModelAttribute("achado") AchadosPerdidos ap,
                               @RequestParam("image") MultipartFile image) throws IOException {

        AchadosPerdidos oldImage = as.getById(ap.getId());
        if(image.isEmpty()) {
            as.saveButkeepImage(ap, oldImage);
        }else {
            as.save(ap, image);
        }

        return "redirect:/";
    }

    @PostMapping("/deleteAchado/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        as.deleteViaId(id);
        return "redirect:/";
    }

}
