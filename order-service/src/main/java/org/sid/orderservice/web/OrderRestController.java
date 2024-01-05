package org.sid.orderservice.web;

import org.sid.orderservice.entities.Order;
import org.sid.orderservice.entities.ProductItem;
import org.sid.orderservice.enums.OrderStatus;
import org.sid.orderservice.modal.Costumer;
import org.sid.orderservice.modal.Product;
import org.sid.orderservice.modal.ProductDto;
import org.sid.orderservice.repositories.OrderRepository;
import org.sid.orderservice.repositories.ProductItemRepository;
import org.sid.orderservice.services.CustomerRestClientService;
import org.sid.orderservice.services.InventoryRestClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class OrderRestController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductItemRepository productItemRepository;
    @Autowired
    private CustomerRestClientService customerRestClientService;
    @Autowired
    private InventoryRestClientService inventoryRestClientService;


    @GetMapping("/testApi/{id}")
    public Product getHello (@PathVariable Long id){

        Product product=inventoryRestClientService.getProduct(id);
        return product;
    }

    @GetMapping("/ordersByCustomer/{id}")
    public List<Order> ordersByCustomer(@PathVariable Long id){
        return orderRepository.findByCustomerId(id);
    }


    @GetMapping("/fullOrder/{id}")
    public Order getOrder(@PathVariable Long id){
        Order order=orderRepository.findById(id).get();
        //Costumer costumer=customerRestClientService.getCustomer(order.getCustomerId());
        //order.setCostumer(costumer);

       order.getProductItems().forEach(pi->{
            Product product=inventoryRestClientService.getProduct(pi.getProductId());
            pi.setProduct(product);
        });
        return order;
    }


    @PostMapping("Order/{id}")
    public void Order(@RequestBody List<ProductDto> productItems , @PathVariable long id){
        //System.out.println("-------------------------------------"+costumer.getNom());

        //Costumer costumer=customerRestClientService.getCustomer(id);

        Order order= Order.builder()
                .customerId(id)
                .status(OrderStatus.CREATED)
                //.costumer(costumer)
                .createdAt(new Date())
                .build();
        Order saveOrder= orderRepository.save(order);

        for (int j = 0; j < productItems.size(); j++) {
            System.out.println("Product ID: " + productItems.get(j).getId());
            System.out.println("Order Quantity: " + productItems.get(j).getOrderQuantity());

                Product product=inventoryRestClientService.getProduct(productItems.get(j).getId());
                ProductItem productItem = ProductItem.builder()
                        .order(saveOrder)
                        .productId(product.getId())
                        .price(product.getPrice())
                        .quantity(productItems.get(j).getOrderQuantity())
                        .imageUrl(product.getImageUrl())
                        //.discount(Math.random())
                        .build();
                productItemRepository.save(productItem);

                inventoryRestClientService.UpdateQuantity(product.getId(),productItems.get(j).getOrderQuantity());

        }

    }






}
