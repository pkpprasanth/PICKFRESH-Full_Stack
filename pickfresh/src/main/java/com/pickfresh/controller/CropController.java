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

import com.pickfresh.model.Crop;
import com.pickfresh.service.CropService;


@RestController
@RequestMapping(path="/crop")
@CrossOrigin(origins = "http://localhost:4200")
public class CropController {
	
@Autowired
	private CropService cropService;
	
	
	@PostMapping(path="/cropCreate")
	public ResponseEntity<Crop>  saveCrop(@Valid @RequestBody Crop crop)
	{
		
		@Valid
		Crop save = cropService.saveCrop(crop);
		
		return new ResponseEntity<Crop>(save, HttpStatus.CREATED);
	}
	
	@PostMapping(path="/cropCreateMultiple")
	public ResponseEntity<List<Crop>> SaveCrops(@Valid @RequestBody List<Crop> corps)
	{
		List<Crop> saveCrops = cropService.saveCrops(corps);
		return new ResponseEntity<List<Crop>>(saveCrops, HttpStatus.CREATED);
	}
	
	@GetMapping(path="/retrieveCrops")
	public ResponseEntity<List<Crop>> getCrops()
	{
		List<Crop> crops = cropService.getCrops();
		
		return new ResponseEntity<List<Crop>>(crops, HttpStatus.OK);
		
	}
	
	@GetMapping(path="/retrieveCropById/cropById/{cropId}")
	public ResponseEntity< Optional<Crop>> getCropByID(@PathVariable Long cropId)
	{
		Optional<Crop> cropByID = cropService.getCropById(cropId);	
		return new ResponseEntity< Optional<Crop>>(cropByID, HttpStatus.OK);
		
	}
	
	
	@GetMapping(path="/retrieveCropByName/{cropName}")
	public ResponseEntity<List<Crop>> getCropByName(@PathVariable String cropName)
	{
		List<Crop> cropNames = cropService.getCropNames(cropName);
		
		return new ResponseEntity<List<Crop>>(cropNames, HttpStatus.OK);
		
	}
	
	@GetMapping(path="/retrieveCropByCategory/{cropCategory}")
	public ResponseEntity<List<Crop>> getCropCategory(@PathVariable String cropCategory)
	{
		List<Crop> cropCategory2 = cropService.getCropCategory(cropCategory);
		
		return new ResponseEntity<List<Crop>>(cropCategory2, HttpStatus.OK);
		
	}
	
	@GetMapping(path="/retrieveCropColor/{cropColor}")
	public ResponseEntity<List<Crop>> getCropColor(@PathVariable String cropColor)
	{
		List<Crop> cropColor2 = cropService.getCropColor(cropColor);
		
		return new ResponseEntity<List<Crop>>(cropColor2, HttpStatus.OK);
		
	}
	
	@GetMapping(path="/retrieveCropCostGreaterThanEqual/{cropCostGreaterThanEqual}")
	public ResponseEntity<List<Crop>> getCropCostGreaterThanEqual(@PathVariable double cropCostGreaterThanEqual)
	{
	 List<Crop> getplaceCropCostGreaterThanEqual = cropService.getCropCostGreaterThanEqual(cropCostGreaterThanEqual);
		
		return new ResponseEntity<List<Crop>>( getplaceCropCostGreaterThanEqual , HttpStatus.OK);
		
	}
	@GetMapping(path="/retrieveCropCostLessThanEqual/{cropCostLessThanEqual}")
	public ResponseEntity<List<Crop>> getCropCostLessThanEqual(@PathVariable double cropCostLessThanEqual)
	{
	 List<Crop> getplaceCropCostLessThanEqual = cropService.getCropCostLessThanEqual(cropCostLessThanEqual);
		
		return new ResponseEntity<List<Crop>>( getplaceCropCostLessThanEqual , HttpStatus.OK);
		
	}
	
}
