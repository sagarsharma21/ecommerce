package com.ecommerce.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ecommerce.exception.CartItemException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.model.User;
import com.ecommerce.repository.CartItemRepository;
import com.ecommerce.repository.CartRepository;

@Service
public class CartItemServiceImplementation implements CartItemService{

	private CartItemRepository cartItemRepository;
	private UserService userService;
	private CartRepository cartRepository;
	
	public CartItemServiceImplementation(CartItemRepository cartItemRepository, UserService userService, CartRepository cartRepository ) {
		// TODO Auto-generated constructor stub
		this.cartItemRepository=cartItemRepository;
		this.userService=userService;
		this.cartRepository=cartRepository;
	}
	
	
	@Override
	public CartItem createCartItem(CartItem cartItem) {
		// TODO Auto-generated method stub
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice() * cartItem.getQuantity());
		
		CartItem createdCartItem=cartItemRepository.save(cartItem);
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		// TODO Auto-generated method stub
		CartItem item = findCartItemById(id);
		User user=userService.findUserById(item.getUserId());
		
		if(user.getId().equals(userId)) {
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity() * item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountedPrice() * item.getQuantity());
			
		}
		return cartItemRepository.save(item);
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		// TODO Auto-generated method stub
		CartItem cartItem=cartItemRepository.isCartItemExist(cart, product, size, userId);
		return cartItem;
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
		// TODO Auto-generated method stub
		CartItem cartItem = findCartItemById(cartItemId);
		
		User user=userService.findUserById(cartItem.getUserId());
		
		User reqUser=userService.findUserById(userId);
		
		if(user.getId().equals(reqUser.getId())) {
			cartItemRepository.deleteById(cartItemId);
		}
		else {
			throw new UserException("You can't remove another user's items!");
		}
	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		// TODO Auto-generated method stub
		Optional<CartItem> opt=cartItemRepository.findById(cartItemId);
		if(opt.isPresent()) {
			return opt.get();
		}
		else {
			throw new CartItemException("Cart item not found with id "+cartItemId);
		}
		
	}

}






