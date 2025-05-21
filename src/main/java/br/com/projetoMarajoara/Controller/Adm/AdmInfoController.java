package br.com.projetoMarajoara.Controller.Adm;

import br.com.projetoMarajoara.Model.ADM;
import br.com.projetoMarajoara.Service.ADMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;

@Controller
public class AdmInfoController {

    @Autowired
    ADMService as;

    @PostMapping("/updateADM")
    public String saveADM(@RequestBody ADM adm) throws IOException {
            as.save(adm);
        return "redirect:/";
    }

}
