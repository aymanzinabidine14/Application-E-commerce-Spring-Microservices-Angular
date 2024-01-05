package org.sid.costumerservice.controllers;


import org.sid.costumerservice.Dto.CostumerDto;
import org.sid.costumerservice.entities.Customer;
import org.sid.costumerservice.services.CostumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CostumerService costumerService;
    @Autowired
    JdbcUserDetailsManager jdbcUserDetailsManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired

    @GetMapping("/AllTheCustomers")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public List<Customer> getAllCustomers (){
        return costumerService.getCustomers();
    }

    @GetMapping("/getCustomer/{id}")
    @PreAuthorize("hasAuthority('SCOPE_USER') or hasAuthority('SCOPE_ADMIN')")
    public Customer getCustomer(@PathVariable Long id){
        return costumerService.getCustomer(id);
    }

    @PostMapping("/saveCustomer")
    //@PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public void saveCustomer(@RequestBody CostumerDto CostumerDto){
        costumerService.Inscription(CostumerDto);
    }

    @GetMapping("/getCustomerByNom/{nom}")
   // @PreAuthorize("hasAuthority('SCOPE_USER') or hasAuthority('SCOPE_ADMIN')")
    public Long getCustomerByNom(@PathVariable String nom) {return costumerService.getCustomer(nom);}


    @PostMapping("/Inscription")
    public void Inscription(@RequestBody CostumerDto costumerDto){
        costumerService.Inscription(costumerDto);
    }







}
