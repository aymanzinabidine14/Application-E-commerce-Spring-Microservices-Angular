package org.sid.orderservice.modal;


import lombok.Data;

@Data
public class Product {
    private Long id;
    private String nom;
    private double price;
    private int quantity;
    private String imageUrl;
}
