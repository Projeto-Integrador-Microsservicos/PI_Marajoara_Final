package br.com.projetoMarajoara.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.projetoMarajoara.Model.MailStructure;
import br.com.projetoMarajoara.Service.MailService;

@Controller
@RequestMapping("/emailSender")
public class InfoMailController {

	@Autowired
	MailService ms;

	@PostMapping("/sendAdm")
	public String sendMailAdm(@RequestParam String titulo, @RequestParam String mensagem, @RequestParam String email) {
		MailStructure mail = new MailStructure();
		System.out.println(titulo);
		System.out.println(mensagem);
		System.out.println(email);
		mail.setTitulo(titulo);
		mail.setMensagem(mensagem);
		ms.sendMail(email, mail);
		return "redirect:/adm/reclamacoes";
	}
	
	@PostMapping("/sendMor")
	public String sendMailMor(@RequestParam String titulo, @RequestParam String mensagem, @RequestParam String email) {
		MailStructure mail = new MailStructure();
		mail.setTitulo(titulo);
		mail.setMensagem(mensagem);
		ms.sendMail(email, mail);
		return "redirect:/morador/reclamacoes";
	}
	
	@PostMapping("/sendCodMor")
	public ResponseEntity<String> sendCodMailMor(@RequestParam String titulo, @RequestParam String mensagem, @RequestParam String email) {
		MailStructure mail = new MailStructure();
		mail.setTitulo(titulo);
		mail.setMensagem(mensagem);
		ms.sendMail(email, mail);
		return ResponseEntity.ok("Código enviado!");
	}

}
