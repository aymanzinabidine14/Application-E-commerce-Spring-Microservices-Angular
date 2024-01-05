package org.sid.costumerservice.services;

import org.sid.costumerservice.Dto.CostumerDto;
import org.sid.costumerservice.entities.Customer;
import org.sid.costumerservice.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CostumerService implements ICostumerService{


    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    JdbcUserDetailsManager jdbcUserDetailsManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Customer saveCustomer(Customer c) {
        return customerRepository.save(c);
    }
    @Override
    public Customer updateCustomer(Customer c) {
        return customerRepository.save(c);
    }

    @Override
    public Customer getCustomer(Long id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public Long getCustomer(String nom) {
        return customerRepository.findByNom(nom).getId();
    }

    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }




    @Override
    public void Inscription(CostumerDto costomerDto) {

        Customer customer=new Customer();
        customer.setNom(costomerDto.getUsername());
        customerRepository.save(customer);
        jdbcUserDetailsManager.createUser(User.withUsername(costomerDto.getUsername()).password(passwordEncoder.encode(costomerDto.getPassword())).authorities("USER").build());

    }
}
