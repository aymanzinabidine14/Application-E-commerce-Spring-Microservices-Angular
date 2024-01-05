package org.sid.inventoryservice;

import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Random;

@SpringBootApplication
 public class InventoryServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    //@Bean
    CommandLineRunner start(ProductRepository productRepository){
        return args->{
            Random random=new Random();

            for (int i = 1; i <10; i++) {

                productRepository.saveAll(List.of(
                        Product.builder()
                                .nom("IPHONE"+i)
                                .price(1000+Math.random()*10000)
                                .quantity(1+random.nextInt(200)).build()
            ));
            }

        };
    }
}
