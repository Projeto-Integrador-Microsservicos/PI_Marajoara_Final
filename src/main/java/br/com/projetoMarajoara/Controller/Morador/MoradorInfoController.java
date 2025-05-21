package br.com.projetoMarajoara.Controller.Morador;

import br.com.projetoMarajoara.Model.Morador;
import br.com.projetoMarajoara.Service.MoradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;

@Controller
public class MoradorInfoController {

    @Autowired
    MoradorService ms;

    @PostMapping("/addMorador")
    public String addMorador(@RequestBody Morador morador) throws IOException {
        ms.save(morador);
        return "redirect:/";
    }

    @PostMapping("/deleteMorador/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        ms.deleteViaId(id);
        return "redirect:/";
    }

}
