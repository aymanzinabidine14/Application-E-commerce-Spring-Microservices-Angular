package org.sid.costumerservice;

import org.junit.jupiter.api.Test;
import org.sid.costumerservice.entities.Customer;
import org.sid.costumerservice.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CostumerServiceApplicationTests {

    @Autowired
    CustomerRepository customerRepository;

    @Test
    Customer get() {
       return  customerRepository.findByNom("anass");
    }

}
