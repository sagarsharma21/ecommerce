package com.ecommerce.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Autowired
	public User findByEmail(String email);
	
	public List<User> findAllOrderbyCreatedAtDesc();
}
