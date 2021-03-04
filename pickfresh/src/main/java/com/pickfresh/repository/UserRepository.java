package com.pickfresh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.pickfresh.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	List<User> findByUserName(String userName);

}
