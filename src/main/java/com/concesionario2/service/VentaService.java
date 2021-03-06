package com.concesionario2.service;

import com.concesionario2.domain.Venta;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link Venta}.
 */
public interface VentaService {

    /**
     * Save a venta.
     *
     * @param venta the entity to save.
     * @return the persisted entity.
     */
    Venta save(Venta venta);

    /**
     * Get all the ventas.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Venta> findAll(Pageable pageable);


    /**
     * Get the "id" venta.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Venta> findOne(Long id);

    /**
     * Delete the "id" venta.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
