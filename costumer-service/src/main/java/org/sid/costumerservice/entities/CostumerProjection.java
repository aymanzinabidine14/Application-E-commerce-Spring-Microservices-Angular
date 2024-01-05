package org.sid.costumerservice.entities;


import org.springframework.data.rest.core.config.Projection;

@Projection(name="fullCustomer",types = Customer.class)
public interface CostumerProjection {
    public Long getId();
    public String getNom();
    public String getEmail();
}
