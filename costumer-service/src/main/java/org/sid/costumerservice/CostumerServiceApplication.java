package org.sid.costumerservice;

import org.sid.costumerservice.entities.Customer;
import org.sid.costumerservice.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

import java.util.List;

@SpringBootApplication
public class CostumerServiceApplication {



    public static void main(String[] args) {

        SpringApplication.run(CostumerServiceApplication.class, args);




    }



   //@Bean
    CommandLineRunner start(CustomerRepository customerRepository){
        return args -> {

            Customer customer= customerRepository.findByNom("anass");

            System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$");

            System.out.println(customer.getNom());

        };
    }



    @Bean
    CommandLineRunner commandLineRunner(JdbcUserDetailsManager jdbcUserDetailsManager,PasswordEncoder passwordEncoder){


        return args->{
            jdbcUserDetailsManager.createUser(User.withUsername("admin").password(passwordEncoder.encode("admin")).authorities("ADMIN").build());

        };

    }


}
