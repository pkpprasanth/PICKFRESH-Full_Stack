package com.pickfresh.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pickfresh.model.Food;
import com.pickfresh.service.FoodService;

@RestController
@RequestMapping(path="/food")
@CrossOrigin(origins = "http://localhost:4200")
public class FoodController {

	@Autowired
	private FoodService foodService;
	
	@PostMapping(path="/createFood")
	public ResponseEntity<Food> saveFood(@Valid @RequestBody Food food)
	{
		Food saveFood = foodService.saveFood(food);
		return new ResponseEntity<Food>(saveFood, HttpStatus.CREATED);
	}
	
	 
	@PostMapping(path="/createMultipleFood")
	public ResponseEntity<List<Food>> saveFoodItems(@Valid @RequestBody List<Food> food)
	{
		List<Food> saveFoodItems = foodService.saveFoodItems(food);	
		return new ResponseEntity<List<Food>>(saveFoodItems, HttpStatus.CREATED);
	}

	
	@GetMapping(path="/retriveFood")
	public ResponseEntity<List<Food>> getFoodItems()
	{
		List<Food> food = foodService.getFoodItems();
		return new ResponseEntity<List<Food>>(food, HttpStatus.OK);
	}
	
	@GetMapping(path="/retriveFood/foodById/{foodId}")
	public ResponseEntity< Optional<Food>> getFoodByID(@PathVariable Long foodId)
	{
		Optional<Food> foodById = foodService.getFoodById(foodId);
		return new ResponseEntity<Optional<Food>>(foodById, HttpStatus.OK);
	}
	
	
	@GetMapping(path="/retrieveFoodName/{foodName}")
	public ResponseEntity<List<Food>> getFoodName(@PathVariable String name)
	{
		List<Food> foodName = foodService.getFoodName(name);
		return new ResponseEntity<List<Food>>(foodName, HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieveFoodCategory/{foodCategory}")
	public ResponseEntity<List<Food>> getFoodCategory(@PathVariable String foodCategory)
	{
		List<Food> foodCategory1 = foodService.getFoodByCategory(foodCategory);
		return new ResponseEntity<List<Food>>(foodCategory1, HttpStatus.OK);
		
	}
	@GetMapping(path="/retrieveFoodCostGreaterThanEqual/{foodCostGreaterThanEqual}")
	public ResponseEntity<List<Food>> getCostGreaterThanEqual(@PathVariable double foodCostGreaterThanEqual)
	{
       List<Food> foodCostGreaterThanEqual2 = foodService.getFoodCostGreaterThanEqual(foodCostGreaterThanEqual);
		
		return new ResponseEntity<List<Food>>(foodCostGreaterThanEqual2, HttpStatus.OK);
		
	}
	@GetMapping(path="/retriveFoodCostLessThanEqual/{foodCostLessThanEqual}")
	public ResponseEntity<List<Food>> getFoodCostLessThanEqual(@PathVariable double foodCostLessThanEqual)
	{
		List<Food> foodCostLessThanEqual2 = foodService.getFoodCostLessThanEqual(foodCostLessThanEqual);
		return new ResponseEntity<List<Food>>(foodCostLessThanEqual2, HttpStatus.OK);
	}

}
