package br.com.projetoMarajoara.Controller;

import br.com.projetoMarajoara.Model.Morador;
import br.com.projetoMarajoara.Service.MoradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.time.LocalDateTime;

@Controller
public class InfoMoradorController {

    @Autowired
    MoradorService ms;
    
    @Autowired
    PasswordEncoder ps;

    @PostMapping("/addMorador")
    public String addMorador(@ModelAttribute Morador morador) throws IOException {
    	System.out.println("Asdfsdfgsdfghsdfgasdhfg");
    	String senhaCriptografada = ps.encode(morador.getSenha());
        morador.setSenha(senhaCriptografada);
        ms.save(morador);
        return "redirect:/";
    }
    
    @PostMapping("/updateMorador")
    public String updateMorador(@ModelAttribute Morador morador) throws IOException {
    	String senhaCriptografada = ps.encode(morador.getSenha());
        morador.setSenha(senhaCriptografada);
    	morador.setUpdatedOn(LocalDateTime.now());
        ms.save(morador);
        return "redirect:/";
    }
    
    @PostMapping("/updateSenha")
    public String updateSenhaMorador(@RequestParam String email, @RequestParam String nova_senha) throws IOException {
    	Morador morador = ms.getBtEmail(email);
    	String senhaCriptografada = ps.encode(nova_senha);
        morador.setSenha(senhaCriptografada);
        ms.save(morador);
        return "redirect:/";
    }

    @PostMapping("/deleteMorador/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        ms.deleteViaId(id);
        return "redirect:/";
    }

}
