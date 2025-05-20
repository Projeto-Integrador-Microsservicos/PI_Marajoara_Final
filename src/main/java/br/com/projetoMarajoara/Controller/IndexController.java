package br.com.projetoMarajoara.Controller;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    //index
    @GetMapping("/")
    public String viewHomePage(Model model){
        return "adm/pagina_achados_ADM";
    }

}
