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

import com.pickfresh.model.Kit;
import com.pickfresh.service.KitService;

@RestController
@RequestMapping(path="/kits")
@CrossOrigin(origins = "http://localhost:4200")
public class KitController {

	@Autowired
	private KitService kitService;
	
	@PostMapping(path="/createKit")
	public ResponseEntity<Kit> saveKit(@Valid @RequestBody Kit kit)
	{
		Kit saveKit = kitService.saveKit(kit);
		return new ResponseEntity<Kit>(saveKit, HttpStatus.CREATED);
	}
	
	@PostMapping(path="/createMultipleKits")
	public ResponseEntity<List<Kit>> saveKits(@Valid @RequestBody List<Kit> kit)
	{
		List<Kit> saveKits = kitService.saveKits(kit);
		return new ResponseEntity<List<Kit>>(saveKits, HttpStatus.CREATED);
	}
	
	@GetMapping(path="/retrieveKits/kitById/{kitId}")
	public ResponseEntity< Optional<Kit>> getKitById(@PathVariable Long kitId)
	{
		Optional<Kit> kitByID = kitService.getKitById(kitId);
		return new ResponseEntity<Optional<Kit>>(kitByID, HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieveKits")
	public ResponseEntity<List<Kit>> getKits()
	{
		List<Kit> kit = kitService.getKit();
		return new ResponseEntity<List<Kit>>(kit, HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieveKitName/{kitName}")
	public ResponseEntity<List<Kit>> getKitName(@PathVariable String kitName)
	{
		List<Kit> kitName2 = kitService.getKitName(kitName);
		return new ResponseEntity<List<Kit>>(kitName2, HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieveKits/kitsByCategory/{kitCategory}")
	public ResponseEntity<List<Kit>> getKitsByCategory(@PathVariable String kitCategory)
	{
		List<Kit> kit = kitService.getKitCategory(kitCategory);
		return new ResponseEntity<List<Kit>>(kit, HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieveKitCostGreaterThanEqual/{kitCostGreaterThanEqual}")
	public ResponseEntity<List<Kit>> getKitCostGreaterThanEqual(@PathVariable double kitCostGreaterThanEqual)
	{
		List<Kit> getplaceKitCostGreaterThanEqual = kitService.getKitCostGreaterThanEqual(kitCostGreaterThanEqual);
		return new ResponseEntity<List<Kit>>(getplaceKitCostGreaterThanEqual, HttpStatus.OK);
	}
	
	@GetMapping(path="/retrieveKitCostLessThanEqual/{kitCostLessThanEqual}")
	public ResponseEntity<List<Kit>> getKitCostLessThanEqual(@PathVariable double kitCostLessThanEqual)
	{
		List<Kit> kitCostLessThanEqual2 = kitService.getKitCostLessThanEqual(kitCostLessThanEqual);
		return new ResponseEntity<List<Kit>>(kitCostLessThanEqual2, HttpStatus.OK);
	}
}
