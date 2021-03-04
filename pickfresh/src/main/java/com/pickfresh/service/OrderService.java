package com.pickfresh.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pickfresh.model.Order;


@Service
public class OrderService {
	
	@Autowired
	private com.pickfresh.repository.OrderRepository orderRepository; 
	@Autowired
	private EntityManager orderEntityManager; 
    
	@Transactional
	public Order SaveOrder(Order order)
	{ 
		/*LocalDateTime now = LocalDateTime.now(); // dtf.format(now) 
	    order.setOrderedDate(now);*/
	    return	orderRepository.save(order);
	}
	@Transactional
	public List<Order> SaveOrders(List<Order> order)
	{
	    return orderRepository.saveAll(order);
	}
	
	public List<Order> getOrders()
	{
	 return	orderRepository.findAll();
	}
	
	 public Optional<Order> getOrderById(Long id)
	 {
		return orderRepository.findById(id);
	 }
	 
	 public List<Order> getOrderName(@Valid Order orderDetails, String name)
	 {
	   	return orderRepository.findByOrderProductName(name);
	 }
	 
	 public void deleteOrderById(Long id)
	 {
		 orderRepository.deleteById(id);
	 }
	 
	 @Transactional
	 public Order updateOrder(Order order, Long id) {
	    	Order existingOrder = orderRepository.findById(id).orElse(null);
	    	existingOrder.setOrderQuantity(order.getOrderQuantity());
	        return orderRepository.save(existingOrder);
	    }

	public List<Order> retrieveUserOrderByEmail(String email, LocalDateTime userLoginDate) {
		// TODO Auto-generated method stub
		return orderRepository.findByUserEmailAndOrderedDateLessThanEqualOrderByOrderIdDesc(email, userLoginDate);
	} 
}
