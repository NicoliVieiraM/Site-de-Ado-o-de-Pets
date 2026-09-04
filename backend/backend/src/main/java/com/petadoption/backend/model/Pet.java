package com.petadoption.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String especie;
    private String raca;
    private Integer idade;
    private String sexo;
    private String tamanho;
    
    @Column(name = "descricao_curta")
    private String descricaoCurta;
    
    @Column(columnDefinition = "TEXT")
    private String historia;

    @Column(name = "url_imagem", columnDefinition = "TEXT")
    private String urlImagem;
    
    private String contato;
    private String cidade;
    
    @Column(name = "faz_entrega")
    private Boolean fazEntrega;
    
    @Column(name = "distancia_entrega_km")
    private Integer distanciaEntregaKm;

    public Pet() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEspecie() { return especie; }
    public void setEspecie(String especie) { this.especie = especie; }

    public String getRaca() { return raca; }
    public void setRaca(String raca) { this.raca = raca; }

    public Integer getIdade() { return idade; }
    public void setIdade(Integer idade) { this.idade = idade; }

    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }

    public String getTamanho() { return tamanho; }
    public void setTamanho(String tamanho) { this.tamanho = tamanho; }

    public String getDescricaoCurta() { return descricaoCurta; }
    public void setDescricaoCurta(String descricaoCurta) { this.descricaoCurta = descricaoCurta; }

    public String getHistoria() { return historia; }
    public void setHistoria(String historia) { this.historia = historia; }

    public String getUrlImagem() { return urlImagem; }
    public void setUrlImagem(String urlImagem) { this.urlImagem = urlImagem; }

    public String getContato() { return contato; }
    public void setContato(String contato) { this.contato = contato; }

    public String getCidade() { return cidade; }
    public void setCidade(String cidade) { this.cidade = cidade; }

    public Boolean getFazEntrega() { return fazEntrega; }
    public void setFazEntrega(Boolean fazEntrega) { this.fazEntrega = fazEntrega; }

    public Integer getDistanciaEntregaKm() { return distanciaEntregaKm; }
    public void setDistanciaEntregaKm(Integer distanciaEntregaKm) { this.distanciaEntregaKm = distanciaEntregaKm; }
}