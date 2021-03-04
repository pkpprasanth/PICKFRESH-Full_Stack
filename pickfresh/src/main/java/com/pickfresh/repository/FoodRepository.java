package com.pickfresh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pickfresh.model.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

	//Customized query to get food by name
	List<Food> findByFoodName(String name);

	List<Food> findByFoodCategory(String name);

	List<Food> findByFoodCost(double eatCost);

	List<Food> findByFoodCostGreaterThanEqual(double price);

	List<Food> findByFoodCostLessThanEqual(double price);

}
