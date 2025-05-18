package br.com.projetoMarajoara.Repository;

import br.com.projetoMarajoara.Model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva,Long> {
}
