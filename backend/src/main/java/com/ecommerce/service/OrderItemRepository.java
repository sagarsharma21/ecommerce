package com.ecommerce.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	
}
