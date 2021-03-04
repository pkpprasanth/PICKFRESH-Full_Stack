package com.pickfresh.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pickfresh.model.Food;
import com.pickfresh.repository.FoodRepository;


@Service
public class FoodService {

	
	@Autowired 
	private FoodRepository  foodRepository;
	
	    @Transactional
	    public Food saveFood(Food food) {
	        return  foodRepository.save(food);
	    }
	   @Transactional
	    public List<Food> saveFoodItems(List<Food> food) {
	        return  foodRepository.saveAll(food);
	    }
	   
	   public List<Food> getFoodItems() {
	        return  foodRepository.findAll();
	    }
	   public Optional<Food> getFoodById(Long id)
		{
			 return foodRepository.findById(id);
		}

	   public List<Food> getFoodName(String name)
	    {
	    	return  foodRepository.findByFoodName(name);
	    }
	 
	   public List<Food> getFoodByCategory(String name)
	   	{
		   	return  foodRepository.findByFoodCategory(name);
	   	}
	

	   public List<Food> getFoodCost(double  foodCost)
	   	{
		   	return  foodRepository.findByFoodCost(foodCost);
	   	}
	   

	   public List<Food> getFoodCostGreaterThanEqual(double foodCostGreaterThanEqual)
	    {
	    	return  foodRepository.findByFoodCostGreaterThanEqual(foodCostGreaterThanEqual);
	    }

	   public List<Food> getFoodCostLessThanEqual(double price)
	    {
	    	return  foodRepository.findByFoodCostLessThanEqual(price);
	    }
	   
	 
	

}
