package org.sid.inventoryservice.services;


import org.sid.inventoryservice.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {
    Product saveProduct(Product p);
    Product updateProduct(Product p);

    Product getProduct(Long id);
    List<Product> getProducts();
  //  Page<Product> getAllProductsByPage(int page, int size);
    void deleteProductById(Long id);
    void deleteAllProducts();


}
