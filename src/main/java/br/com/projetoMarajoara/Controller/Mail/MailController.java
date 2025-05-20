package br.com.projetoMarajoara.Controller.Mail;

import br.com.projetoMarajoara.Model.MailStructure;
import br.com.projetoMarajoara.Service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/emailSender")
public class MailController {

    @Autowired
    MailService ms;

    @PostMapping("/send")
    public String sendMail(@RequestParam String titulo, @RequestParam String mensagem, @RequestParam String email){
        MailStructure mail = new MailStructure();
        mail.setTitulo(titulo);
        mail.setMensagem(mensagem);
        ms.sendMail(email, mail);
        return "redirect:/";
    }

}
