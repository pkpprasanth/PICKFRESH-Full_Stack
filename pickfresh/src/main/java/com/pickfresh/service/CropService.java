package com.pickfresh.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pickfresh.model.Crop;
import com.pickfresh.repository.CropRepository;


@Service
public class CropService {

	
	@Autowired
	private CropRepository cropRepository;
	
	   @Transactional
	    public Crop saveCrop(Crop crop) {
	        return cropRepository.save(crop);
	    }
	   @Transactional
	    public List<Crop> saveCrops(List<Crop> crop) {
	        return cropRepository.saveAll(crop);
	    }
	   
	   public List<Crop> getCrops() {
	        return cropRepository.findAll();
	    }
		
	   public Optional<Crop> getCropById(Long id) {
	        return cropRepository.findById(id);
	    }
	  
		public List<Crop> getCropNames(String name)
	    {
	    	return cropRepository.findByCropName(name);
	    }

	   public List<Crop> getCropCategory(String name)
	   	{
		   	return cropRepository.findByCropCategory(name);
	   	}

	   public List<Crop> getCropColor(String name)
	   	{
		   	return cropRepository.findByCropColor(name);
	   	}

     	public List<Crop> getCropCost(double  cropCost)
	   	{
		   	return cropRepository.findByCropCost(cropCost);
	   	}
	   
	
		public List<Crop> getCropCostGreaterThanEqual(double price)
	    {
	    	return cropRepository.findByCropCostGreaterThanEqual(price);
	    }

		public List<Crop> getCropCostLessThanEqual(double price)
	    {
	    	return cropRepository.findByCropCostLessThanEqual(price);
	    }
	   
	   
	  
}
