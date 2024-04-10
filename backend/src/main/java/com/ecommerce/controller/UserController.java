package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	public UserController(UserService userService) {
		// TODO Auto-generated constructor stub
		this.userService=userService;
	}
	
	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws UserException{
		
		System.out.println("/api/users/profile");
		User user=userService.findUserProfileByJwt(jwt);
		
		return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
	}
}
