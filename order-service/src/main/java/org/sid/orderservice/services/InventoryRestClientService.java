package org.sid.orderservice.services;

import org.sid.orderservice.modal.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@FeignClient (name = "inventory-service")
public interface InventoryRestClientService {

    @GetMapping("/getProduct/{id}")
    public Product getProduct(@PathVariable Long id);

    @GetMapping("/products?projection=fullProduct")
    public PagedModel<Product> allProducts();

    @PostMapping("QuantityDec/{id}/{quantityDec}")
    public Product UpdateQuantity(@PathVariable long id,@PathVariable int quantityDec);


}
