package com.pickfresh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.pickfresh.model.Kit;

@Repository
public interface KitRepository extends JpaRepository<Kit, Long> {

	List<Kit> findByKitName(String name);
	
	List<Kit> findByKitCategory(String name);

	List<Kit> findByKitCost(double kitCost);

	List<Kit> findByKitCostGreaterThanEqual(double price);

	List<Kit> findByKitCostLessThanEqual(double price);

	
   
}
