package br.com.projetoMarajoara.Controller.Pages;

import br.com.projetoMarajoara.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/adm")
public class AdmPageController {

    @Autowired
    EventoService es;
    @Autowired
    AchadosPerdidosService as;
    @Autowired
    FuncionarioService fs;
    @Autowired
    MoradorService ms;
    @Autowired
    ReservaService rs;

    @GetMapping("/aluguel")
    public String viewAluguel(){
        return "adm/pagina_aluguel_ADM";
    }

    @GetMapping("/perfil")
    public String viewPerfil(){
        return "adm/pagina_perfil_ADM";
    }

    /*ver se coloca id ou se vai pelo js ou como q coloca o e-mail do usuario aqui*/
    @GetMapping("/reclamacoes")
    public String viewreclamacoes(){
        return "adm/pagina_reclamacoes_ADM";
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

    @GetMapping("/configuracoes")
    public String viewFuncionarios(Model model){
        model.addAttribute("listaFuncionarios", fs.getAllFunc());
        model.addAttribute("listaMoradores", ms.getAllMorador());
        return "adm/pagina_configuracoes_ADM";
    }

}
