package com.pickfresh.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pickfresh.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

	List<Order> findByOrderProductName(String name);
	List<Order> findByUserEmailAndOrderedDateLessThanEqualOrderByOrderIdDesc(String email, LocalDateTime userLoginTime);
}
