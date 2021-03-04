package com.pickfresh.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.pickfresh.model.Order;

@RestController
@RequestMapping(path="/order")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

	@Autowired
	private com.pickfresh.service.OrderService orderService;
	
	
	@PostMapping(path="/placeOrder")
	public ResponseEntity<Order>  placeOrder(@Valid @RequestBody Order order)
	{
		Order saveOrder = orderService.SaveOrder(order);
		return new ResponseEntity<Order>(saveOrder, HttpStatus.CREATED);
	}
	@PostMapping(path="/multiplePlaceOrder")
	public ResponseEntity<List<Order>> placeOrders(@Valid @RequestBody List<Order> order)
	{
		List<Order> saveOrders = orderService.SaveOrders(order);
		
		
		return new ResponseEntity<List<Order>>(saveOrders, HttpStatus.CREATED);
	}
	
	@GetMapping(path="/retriveOrders")
	public ResponseEntity<List<Order>> getOrderName()
	{
		List<Order> orders = orderService.getOrders();		
		return new ResponseEntity<List<Order>>(orders, HttpStatus.OK);
		
	}

	@PutMapping(path= "/updateById/{id}")
	public Order updateOrder(@Valid @RequestBody Order orderDetails, @PathVariable Long id)
	{  
		return orderService.updateOrder(orderDetails, id);
	}

	@DeleteMapping(path= "/deleteById/{id}")
	public void deleteStudentById(@PathVariable Long id)
	{
		orderService.deleteOrderById(id);
	}
	
	@GetMapping(path="/retrieveOrder/emailId/{email}")
	public ResponseEntity<List<Order>> retrieveOrdersByUserEmail(@PathVariable String email)
	{
		LocalDateTime now = LocalDateTime.now();
		List<Order> retrieveUserOrderByEmail = orderService.retrieveUserOrderByEmail(email, now);
		return new ResponseEntity<List<Order>>(retrieveUserOrderByEmail, HttpStatus.OK);
	} 
}
