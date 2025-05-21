package br.com.projetoMarajoara.Controller.Pages;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    //index
    @GetMapping("/")
    public String viewHomePage(Model model){
        return "morador/pagina_achados_e_perdidos_morador";
    }

    @GetMapping("/logOut")
    public String logOut(){
        return "index";
    }

}
