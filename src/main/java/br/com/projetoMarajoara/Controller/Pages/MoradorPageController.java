package br.com.projetoMarajoara.Controller.Pages;

import br.com.projetoMarajoara.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/morador")
public class MoradorPageController {

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




}
