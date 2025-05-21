package br.com.projetoMarajoara.Controller.Funcionario;

import br.com.projetoMarajoara.Model.Funcionario;
import br.com.projetoMarajoara.Service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;

@Controller
public class FuncInfoController {

    @Autowired
    FuncionarioService fs;

    @PostMapping("/addFunc")
    public String addFunc(@RequestBody Funcionario func) throws IOException {
        fs.save(func);
        return "redirect:/";
    }

    @PostMapping("/deleteFunc/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        fs.deleteViaId(id);
        return "redirect:/";
    }

    public void aaaaaaaaaaaa(){

    }

}
