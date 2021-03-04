package com.pickfresh.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pickfresh.repository.UserRepository;
import com.pickfresh.model.User;


@Service
public class UserService {
@Autowired
private UserRepository userRepository;



@Transactional
    public User saveUser(User user) {
		return userRepository.save(user);
      }

@Transactional
public List<User> saveUsers(List<User> user) {
    return userRepository.saveAll(user);
}


public User getUserById(Long id) {
     return userRepository.findById(id).orElse(null);
 }


public List<User> getUserAll() {
    return userRepository.findAll();
}

	public List<User> getUserName(String userName)
	{
		return userRepository.findByUserName(userName);
	}	

}
