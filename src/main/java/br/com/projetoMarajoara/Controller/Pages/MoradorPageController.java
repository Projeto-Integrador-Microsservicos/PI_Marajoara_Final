package br.com.projetoMarajoara.Controller.Pages;

import br.com.projetoMarajoara.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/morador")
public class MoradorPageController {

    @Autowired
    EventoService es;
    @Autowired
    AchadosPerdidosService as;
    @Autowired
    ReservaService rs;

    @GetMapping("/aluguel")
    public String viewAluguel(){
        return "morador/pagina_achados_e_perdidos_morador";
    }

    @GetMapping("/perfil")
    public String viewPerfil(){
        return "morador/pagina_perfil_morador";
    }

    /*ver se coloca id ou se vai pelo js ou como q coloca o e-mail do usuario aqui*/
    @GetMapping("/reclamacoes")
    public String viewreclamacoes(){
        return "morador/pagina_reclamacoes_morador";
    }

    @GetMapping("/achados")
    public String viewAchados(Model model){
        model.addAttribute("listAchados", as.getAllItens());
        return "adm/pagina_achados_ADM";
    }

    @GetMapping("/eventos")
    public String viewEventos(Model model){
        model.addAttribute("listaEventos", es.getAllEventos());
        return "adm/pagina_eventos_ADM";
    }

}
