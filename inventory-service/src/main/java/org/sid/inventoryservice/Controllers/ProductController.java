package org.sid.inventoryservice.Controllers;


import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService ProductService;

    @PostMapping("QuantityDec/{id}/{quantityDec}")
    public Product UpdateQuantity(@PathVariable long id,@PathVariable int quantityDec){
        Product myp=ProductService.getProduct(id);
        myp.setQuantity(myp.getQuantity()-quantityDec);
        return ProductService.updateProduct(myp);
    }

    @GetMapping("/AllTheProducts")
    public List<Product> getAllProducts (){
        return ProductService.getProducts();
    }

    @GetMapping("/AllTheProductsV2")
    public List<Product> getAllProducts2 (){
        return ProductService.getProducts();
    }


    @GetMapping("/getProduct/{id}")
    public Product getProduct(@PathVariable Long id){
        return ProductService.getProduct(id);
    }

    @PostMapping ("/saveProduct")
    public void saveProduct(@RequestBody Product product){
        ProductService.saveProduct(product);
    }

    @PutMapping ("/UpdateProduct/{id}")
    public Product UpdateProduct(@PathVariable Long id,@RequestBody Product p){
        Product myp=ProductService.getProduct(id);
        myp.setNom(p.getNom());
        myp.setPrice(p.getPrice());
        myp.setQuantity(p.getQuantity());
        myp.setImageUrl(p.getImageUrl());
        return ProductService.updateProduct(myp);
    }

    @DeleteMapping ("DeleteProduct/{id}")
    public void deleteProduct(@PathVariable Long id){
        ProductService.deleteProductById(id);
    }

}
