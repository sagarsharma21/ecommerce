package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecommerce.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
	
	@Query("SELCET c From Cart c WHERE c.user.id=:userId")
	public Cart findByUserId(@Param("userId")Long userId);
}