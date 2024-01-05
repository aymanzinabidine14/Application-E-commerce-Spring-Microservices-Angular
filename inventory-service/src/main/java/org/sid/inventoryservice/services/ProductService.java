package org.sid.inventoryservice.services;

import org.sid.inventoryservice.entities.Product;
import org.sid.inventoryservice.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService implements IProductService{

    @Autowired
    ProductRepository productRepository;
    @Override
    public Product saveProduct(Product p) {
        return productRepository.save(p);
    }
    @Override
    public Product updateProduct(Product p) {
        return productRepository.save(p);
    }
    @Override
    public Product getProduct(Long id) {
        return productRepository.findById(id).get();
    }
    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
    @Override
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);

    }
    @Override
    public void deleteAllProducts() {
        productRepository.deleteAll();
    }
}
