package com.pickfresh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pickfresh.model.Crop;


@Repository
public interface CropRepository extends JpaRepository<Crop, Long> {

	List<Crop> findByCropName(String name);

	List<Crop> findByCropCategory(String name);

	List<Crop> findByCropColor(String name);

	List<Crop> findByCropCost(double cropCost);

	List<Crop> findByCropCostGreaterThanEqual(double price);

	List<Crop> findByCropCostLessThanEqual(double price);


}
