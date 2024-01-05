package org.sid.costumerservice.services;

import org.sid.costumerservice.Dto.CostumerDto;
import org.sid.costumerservice.entities.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ICostumerService {
    Customer saveCustomer(Customer c);
    Customer updateCustomer(Customer c);
    Customer getCustomer(Long id);

    Long getCustomer(String nom);

    List<Customer> getCustomers();

    void Inscription(CostumerDto costomerDto);





}
