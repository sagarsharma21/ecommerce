package com.ecommerce.request;

import java.util.HashSet;
import java.util.Set;

import com.ecommerce.model.Size;

public class CreateProdcutRequest {

	private String title;
	
	private String description;
	
	private int price;

	private int discountedPrice;
	
	private int discountPercent;
	
	private int quantity;

	private String brand;
	private String color;

	private Set<Size> size = new HashSet<>();

	private String imageUrl;

	private String topLevelcategory;
	private String firstLevelcategory;
	private String secondLevelcategory;

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getDiscountedPrice() {
		return discountedPrice;
	}
	public void setDiscountedPrice(int discountedPrice) {
		this.discountedPrice = discountedPrice;
	}
	public int getDiscountPercent() {
		return discountPercent;
	}
	public void setDiscountPercent(int discountPercent) {
		this.discountPercent = discountPercent;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public Set<Size> getSize() {
		return size;
	}
	public void setSize(Set<Size> size) {
		this.size = size;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getTopLevelcategory() {
		return topLevelcategory;
	}
	public void setTopLevelcategory(String topLevelcategory) {
		this.topLevelcategory = topLevelcategory;
	}
	public String getSecondLevelcategory() {
		return secondLevelcategory;
	}
	public void setSecondLevelcategory(String secondLevelcategory) {
		this.secondLevelcategory = secondLevelcategory;
	}
	public String getFirstLevelcategory() {
		return firstLevelcategory;
	}
	public void setFirstLevelcategory(String firstLevelcategory) {
		this.firstLevelcategory = firstLevelcategory;
	}
	public String getThirdLevelCategory() {
		// TODO Auto-generated method stub
		return null;
	}

}
