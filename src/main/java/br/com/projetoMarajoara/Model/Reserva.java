package br.com.projetoMarajoara.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Reserva {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private LocalDate data;
    private String periodo;
    private String reservado_por;

    public String getReservado_por() {
        return reservado_por;
    }

    public void setReservado_por(String reservado_por) {
        this.reservado_por = reservado_por;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }
}
