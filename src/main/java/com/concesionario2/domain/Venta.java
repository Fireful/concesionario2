package com.concesionario2.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Venta.
 */
@Entity
@Table(name = "venta")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Venta implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fecha")
    private Instant fecha;

    @Column(name = "importe_total")
    private Double importeTotal;

    @OneToOne
    @JoinColumn(unique = true)
    private Coche coche;

    @ManyToOne
    @JsonIgnoreProperties(value = "ventas", allowSetters = true)
    private Cliente cliente;

    @ManyToOne
    @JsonIgnoreProperties(value = "ventas", allowSetters = true)
    private Vendedor vendedor;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getFecha() {
        return fecha;
    }

    public Venta fecha(Instant fecha) {
        this.fecha = fecha;
        return this;
    }

    public void setFecha(Instant fecha) {
        this.fecha = fecha;
    }

    public Double getImporteTotal() {
        return importeTotal;
    }

    public Venta importeTotal(Double importeTotal) {
        this.importeTotal = importeTotal;
        return this;
    }

    public void setImporteTotal(Double importeTotal) {
        this.importeTotal = importeTotal;
    }

    public Coche getCoche() {
        return coche;
    }

    public Venta coche(Coche coche) {
        this.coche = coche;
        return this;
    }

    public void setCoche(Coche coche) {
        this.coche = coche;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public Venta cliente(Cliente cliente) {
        this.cliente = cliente;
        return this;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Vendedor getVendedor() {
        return vendedor;
    }

    public Venta vendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
        return this;
    }

    public void setVendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Venta)) {
            return false;
        }
        return id != null && id.equals(((Venta) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Venta{" +
            "id=" + getId() +
            ", fecha='" + getFecha() + "'" +
            ", importeTotal=" + getImporteTotal() +
            "}";
    }
}
