package br.com.projetoMarajoara.Controller.Adm;

import br.com.projetoMarajoara.Model.ADM;
import br.com.projetoMarajoara.Service.ADMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class InfoController {

    @Autowired
    ADMService as;


}
