package com.concesionario2.repository;

import com.concesionario2.domain.Venta;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Venta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {
}
