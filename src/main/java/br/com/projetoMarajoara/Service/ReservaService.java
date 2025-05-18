package br.com.projetoMarajoara.Service;

import br.com.projetoMarajoara.Model.Morador;
import br.com.projetoMarajoara.Model.Reserva;
import br.com.projetoMarajoara.Repository.MoradorRepository;
import br.com.projetoMarajoara.Repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepo;

    public List<Reserva> getAllReservas() {
        return reservaRepo.findAll();
    }

    public void save(Reserva reserva) throws IOException {
        reservaRepo.save(reserva);
    }

    public Reserva getById(Long id) {
        Optional<Reserva> optional = reservaRepo.findById(id);
        Reserva reserva = null;
        if (optional.isPresent())
            reserva = optional.get();
        else
            throw new RuntimeException(
                    "Employee not found for id : " + id);
        return reserva;
    }

    public void deleteViaId(long id) {
        reservaRepo.deleteById(id);
    }
}


