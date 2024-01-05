package org.sid.orderservice.services;

import org.sid.orderservice.modal.Costumer;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@FeignClient (name = "costumer-service")
public interface CustomerRestClientService {

    @GetMapping("/getCustomer/{id}")
    public Costumer getCustomer(@PathVariable Long id);

}
