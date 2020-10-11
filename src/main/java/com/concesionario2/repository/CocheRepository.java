package com.concesionario2.repository;

import com.concesionario2.domain.Coche;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Coche entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CocheRepository extends JpaRepository<Coche, Long> {
}
