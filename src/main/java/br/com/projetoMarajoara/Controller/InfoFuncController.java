package br.com.projetoMarajoara.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import br.com.projetoMarajoara.Model.Funcionario;
import br.com.projetoMarajoara.Service.FuncionarioService;

@Controller
public class InfoFuncController {

    @Autowired
    FuncionarioService fs;    
    
    @PostMapping("/addFunc")
    public String addFunc(@ModelAttribute Funcionario func) throws IOException {
        fs.save(func);
        return "redirect:/adm/configuracoes";
    }

    @PostMapping("/updateFunc")
    public String updateFunc(@ModelAttribute Funcionario func) throws IOException {
        fs.save(func);
        return "redirect:/adm/configuracoes";
    }
    
    @GetMapping("/deleteFunc/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        fs.deleteViaId(id);
        return "redirect:/adm/configuracoes";
    }

}
