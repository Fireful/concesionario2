package com.concesionario2.service.impl;

import com.concesionario2.service.CocheService;
import com.concesionario2.domain.Coche;
import com.concesionario2.repository.CocheRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Coche}.
 */
@Service
@Transactional
public class CocheServiceImpl implements CocheService {

    private final Logger log = LoggerFactory.getLogger(CocheServiceImpl.class);

    private final CocheRepository cocheRepository;

    public CocheServiceImpl(CocheRepository cocheRepository) {
        this.cocheRepository = cocheRepository;
    }

    @Override
    public Coche save(Coche coche) {
        log.debug("Request to save Coche : {}", coche);
        return cocheRepository.save(coche);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Coche> findAll(Pageable pageable) {
        log.debug("Request to get all Coches");
        return cocheRepository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Coche> findOne(Long id) {
        log.debug("Request to get Coche : {}", id);
        return cocheRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Coche : {}", id);
        cocheRepository.deleteById(id);
    }
}
