package com.ecommerce.service;
import java.util.List;

import org.springframework.data.domain.Page;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Product;
import com.ecommerce.model.Size;
import com.ecommerce.request.CreateProdcutRequest;

public interface ProductService {

	public Product createProduct(CreateProdcutRequest req);
	
	public String deleteProduct(Long productId) throws ProductException;
	
	public Product updateProduct(Long productId, Product req) throws ProductException;
	
	public Product findProductById(Long id) throws ProductException;
	
	public List<Product> findProductByCategory(String category);
	
	public Page<Product> getAllProdcut(String category, List<String>color, List<Size> sizes, 
			Integer minPrice ,Integer maxPrice, Integer minDiscount, 
			String sort, String stock, Integer pageNumber, Integer pageSize);
 }




















