package br.com.projetoMarajoara.Controller;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageIndexController {

    //index
    @GetMapping("/")
    public String viewHomePage(Model model){
        return "adm/pagina_achados_adm";
    }

    @GetMapping("/logOut")
    public String logOut(){
        return "index";
    }

}
