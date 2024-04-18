package com.ecommerce.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Order;
import com.ecommerce.model.User;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

	private OrderService orderService;
	private UserService userService;
	
	public OrderController(OrderService orderService, UserService userService) {
		// TODO Auto-generated constructor stub
		this.orderService=orderService;
		this.userService=userService;
	}
	
	@PostMapping("/")
	public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress, 
			@RequestHeader("Authorization") String jwt) throws UserException{
		
		User user=userService.findUserProfileByJwt(jwt);
		
		Order order=orderService.createOrder(user, shippingAddress);
		
		System.out.println("Order " + order);
		
		return new ResponseEntity<Order> (order, HttpStatus.CREATED);
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<Order>> usersOrderHistory(@RequestHeader("Authorization") String jwt) throws UserException{
		
		User user=userService.findUserProfileByJwt(jwt);
		
		List<Order> orders=orderService.usersOrderHistory(user.getId());
		
		return new ResponseEntity<>(orders, HttpStatus.CREATED);
	}
	
	@GetMapping("/{orderId}")
	public ResponseEntity<Order> findOrderById(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws UserException, OrderException{
		
		User user=userService.findUserProfileByJwt(jwt);
		
		Order order=orderService.findOrderById(orderId);
		
		return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
	}
	
	
}
