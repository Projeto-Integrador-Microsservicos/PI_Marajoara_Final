package br.com.projetoMarajoara.Repository;

import br.com.projetoMarajoara.Model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario,Long> {
	Funcionario findByEmail(String email);
}
