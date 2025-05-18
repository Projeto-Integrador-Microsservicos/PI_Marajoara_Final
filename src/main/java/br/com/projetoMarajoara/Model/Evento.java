package br.com.projetoMarajoara.Model;

import jakarta.persistence.*;

@Entity
public class Evento {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private String imageNome;
    private String imageTipo;

    @Lob
    private byte[] imageDados;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImageNome() {
        return imageNome;
    }

    public void setImageNome(String imageNome) {
        this.imageNome = imageNome;
    }

    public String getImageTipo() {
        return imageTipo;
    }

    public void setImageTipo(String imageTipo) {
        this.imageTipo = imageTipo;
    }

    public byte[] getImageDados() {
        return imageDados;
    }

    public void setImageDados(byte[] imageDados) {
        this.imageDados = imageDados;
    }
}
