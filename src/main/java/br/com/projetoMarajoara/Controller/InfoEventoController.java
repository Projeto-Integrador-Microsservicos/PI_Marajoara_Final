package br.com.projetoMarajoara.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import br.com.projetoMarajoara.Model.Evento;
import br.com.projetoMarajoara.Service.EventoService;

@Controller
public class InfoEventoController {

    @Autowired
    EventoService es;

    @PostMapping("/addEvento")
    public String addEvento(@ModelAttribute("evento")Evento evento,
                            @RequestParam("image") MultipartFile image)  throws IOException {
        es.save(evento, image);
        return "redirect:/adm/eventos";
    }

    @PostMapping("/updateEvento")
    public String updateAchado(@ModelAttribute("evento") Evento evento,
                               @RequestParam("image") MultipartFile image) throws IOException {

        Evento oldImage = es.getById(evento.getId());
        if(image.isEmpty()) {
            es.saveButkeepImage(evento, oldImage);
        }else {
            es.save(evento, image);
        }

        return "redirect:/adm/eventos";
    }
    
    @GetMapping("imgEv/{id}/imagem")
	public ResponseEntity<byte[]> getEvImage(@PathVariable long id) throws IOException {
		Evento ev = es.getById(id);

		try {

			if (ev.getImageDados() != null || ev.getImageTipo() != null) {
				return ResponseEntity.ok().contentType(MediaType.parseMediaType(ev.getImageTipo()))
						.body(ev.getImageDados());
			}

			ClassPathResource imgFile = new ClassPathResource("imagens/img_predios.jpg");
			byte[] defaultImage = imgFile.getInputStream().readAllBytes();

			return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(defaultImage);

		} catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }

	}

    @PostMapping("/deleteEvento/{id}")
    public String deleteThroughId(@PathVariable(value = "id") long id) {
        es.deleteViaId(id);
        return "redirect:/";
    }

}
