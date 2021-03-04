package com.pickfresh.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pickfresh.model.Kit;
import com.pickfresh.repository.KitRepository;

@Service
public class KitService {

	@Autowired
	private KitRepository kitRepository;
	
	@Transactional
    public Kit saveKit(Kit kit) {
        return kitRepository.save(kit);
    }
	
	@Transactional
    public List<Kit> saveKits(List<Kit> kit) {
        return  kitRepository.saveAll(kit);
    }
   
	public List<Kit> getKit() {
        return kitRepository.findAll();
    }
	
	 public Optional<Kit> getKitById(Long id)
	 {
		return kitRepository.findById(id);
	 }
	 
	public List<Kit> getKitName(String name)
    {
    	return  kitRepository.findByKitName(name);  
    }
	
	public List<Kit> getKitCategory(String name)
    {
    	return  kitRepository.findByKitCategory(name);  
    }

	public List<Kit> getKitCost(double  kitCost)
   	{
	   	return  kitRepository.findByKitCost(kitCost); 
   	}

	public List<Kit> getKitCostGreaterThanEqual(double price)
    {
    	return  kitRepository.findByKitCostGreaterThanEqual(price);
    }

	public List<Kit> getKitCostLessThanEqual(double price)
    {
    	return  kitRepository.findByKitCostLessThanEqual(price);
    }
   
}
