package org.sid.inventoryservice;

import org.junit.jupiter.api.Test;
import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.services.IProductService;
import org.sid.inventoryservice.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class InventoryServiceApplicationTests {

    @Autowired
    ProductService productService;

    @Test
    public Product contextLoads() {
        return productService.getProduct(1L);
    }

}
