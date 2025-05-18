package br.com.projetoMarajoara.Service;

import br.com.projetoMarajoara.Model.AchadosPerdidos;
import br.com.projetoMarajoara.Model.Morador;
import br.com.projetoMarajoara.Repository.AchadosPerdidosRepository;
import br.com.projetoMarajoara.Repository.MoradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class AchadosPerdidosService {

        @Autowired
        private AchadosPerdidosRepository achadosRepo;

        public List<AchadosPerdidos> getAllItens()
        {
            return achadosRepo.findAll();
        }

        public void save(AchadosPerdidos achados) throws IOException
        {
            achadosRepo.save(achados);
        }
        public AchadosPerdidos getById(Long id)
        {
            Optional<AchadosPerdidos> optional = achadosRepo.findById(id);
            AchadosPerdidos achados = null;
            if (optional.isPresent())
                achados = optional.get();
            else
                throw new RuntimeException(
                        "Employee not found for id : " + id);
            return achados;
        }
        public void deleteViaId(long id)
        {
            achadosRepo.deleteById(id);
        }

}
