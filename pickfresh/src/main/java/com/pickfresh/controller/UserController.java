package com.pickfresh.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pickfresh.model.User;
import com.pickfresh.service.UserService;

@RestController
@RequestMapping(path="/order")
public class UserController {
@Autowired
private UserService userService;

/*
	}
	@GetMapping(path="/retriveKits")
	public ResponseEntity<List<Kit>> getEats()
	{
		List<Kit> kit = kitService.getKit();
		
		return new ResponseEntity<List<Kit>>(kit, HttpStatus.OK);
		
	}*/

	@PostMapping(path="/createUser")
	public ResponseEntity<User>  saveUser(@Valid @RequestBody User user)
	{
	
		User saveUser = userService.saveUser(user);

	
		return new ResponseEntity<User>(saveUser, HttpStatus.CREATED);
	}
	
	@PostMapping(path="/createMultipleUsers")
	public ResponseEntity<List<User>>  saveEats(@Valid @RequestBody List<User> user)
	{
		
		List<User> saveUsers = userService.saveUsers(user);
		
		return new ResponseEntity<List<User>>(saveUsers, HttpStatus.CREATED);
	}
	@GetMapping(path="/retriveUsers")
	public ResponseEntity<List<User>> getEats()
	{
		List<User> userAll = userService.getUserAll();
		
		return new ResponseEntity<List<User>>(userAll, HttpStatus.OK);
		
	}
}
