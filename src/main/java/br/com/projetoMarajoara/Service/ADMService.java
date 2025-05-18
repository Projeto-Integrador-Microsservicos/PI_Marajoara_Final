package br.com.projetoMarajoara.Service;

import br.com.projetoMarajoara.Model.ADM;
import br.com.projetoMarajoara.Model.Morador;
import br.com.projetoMarajoara.Repository.ADMRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ADMService {

    @Autowired
    private ADMRepository admRepo;

    public List<Morador> getAllMorador()
    {
        return morRepo.findAll();
    }

    public Morador getById(Long id)
    {
        Optional<Morador> optional = morRepo.findById(id);
        Morador morador = null;
        if (optional.isPresent())
            morador = optional.get();
        else
            throw new RuntimeException(
                    "Employee not found for id : " + id);
        return morador;
    }

    public void save(ADM adm) throws IOException
    {
        admRepo.save(adm);
    }

    public void deleteViaId(long id)
    {
        admRepo.deleteById(id);
    }
}

