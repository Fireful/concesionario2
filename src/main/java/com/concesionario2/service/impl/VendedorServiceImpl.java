package com.concesionario2.service.impl;

import com.concesionario2.service.VendedorService;
import com.concesionario2.domain.Vendedor;
import com.concesionario2.repository.VendedorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Vendedor}.
 */
@Service
@Transactional
public class VendedorServiceImpl implements VendedorService {

    private final Logger log = LoggerFactory.getLogger(VendedorServiceImpl.class);

    private final VendedorRepository vendedorRepository;

    public VendedorServiceImpl(VendedorRepository vendedorRepository) {
        this.vendedorRepository = vendedorRepository;
    }

    @Override
    public Vendedor save(Vendedor vendedor) {
        log.debug("Request to save Vendedor : {}", vendedor);
        return vendedorRepository.save(vendedor);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Vendedor> findAll(Pageable pageable) {
        log.debug("Request to get all Vendedors");
        return vendedorRepository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Vendedor> findOne(Long id) {
        log.debug("Request to get Vendedor : {}", id);
        return vendedorRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Vendedor : {}", id);
        vendedorRepository.deleteById(id);
    }
}
