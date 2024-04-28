package com.ecommerce.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Order;
import com.ecommerce.repository.OrderRepository;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.UserService;
import com.ecommerce.user.domain.OrderStatus;
import com.ecommerce.user.domain.PaymentStatus;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/api")
public class PaymentController {

	@Value("${razorpay.api.key}")
	String apiKey;
	
	@Value("${razorpay.api.secret}")
	String apiSecret;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@PostMapping("/payments/{orderId}")
	public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException, RazorpayException {
		
		Order order=orderService.findOrderById(orderId);
		
		try {
			RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
			
			// Create a JSON object with the payment link request parameters
			JSONObject paymentLinkRequest = new JSONObject();
			paymentLinkRequest.put("amount", order.getTotalPrice()*100);
			paymentLinkRequest.put("currency" ,"INR");
			
			// Create a JSON object with the user information
			JSONObject userInformation = new JSONObject();
			userInformation.put("name", order.getUser().getFirstName());
			userInformation.put("email" ,order.getUser().getEmail());
			paymentLinkRequest.put("userInformation", userInformation);
			
			// Create a JSON object with the notification settings
			JSONObject notify = new JSONObject();
			notify.put("sms", true);
			notify.put("email", true);
			paymentLinkRequest.put("notify", notify);
			
			// Set the callback URL to redirect user after successful payment
			paymentLinkRequest.put("callback_url", "http://localhost:3000/payment/"+orderId);
			paymentLinkRequest.put("callback_method", "get");

			// Create the payment link using the PaymentLink.create() method
			PaymentLink paymentLink = razorpay.paymentLink.create(paymentLinkRequest);
			
			String paymentLinkId = paymentLink.get("id");
			String paymentLinkUrl = paymentLink.get("short_url");
			
			PaymentLinkResponse res = new PaymentLinkResponse();
			res.setPayment_link_url(paymentLinkUrl);
			res.setPayment_link_id(paymentLinkId);
			
			// Print

			return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED);
			
		} catch (Exception e) {
			// TODO: handle exception
			throw new RazorpayException(e.getMessage());
		}
		//return null;
	}
	
	// redirect after payment
	@GetMapping("/payments")
	public ResponseEntity<ApiResponse> redirect(@RequestParam(name="payment_id") String paymentId, 
			@RequestParam(name="order_id") Long orderId) throws OrderException, RazorpayException{
		
		Order order = orderService.findOrderById(orderId);
		
		RazorpayClient razorpayClient = new RazorpayClient(apiKey, apiSecret);
		
		try {
			Payment payment = razorpayClient.payments.fetch(paymentId);

			if(payment.get("status").equals("captured")) {
				order.getPaymentDetails().setPaymentId(paymentId);
				order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);	
				order.setOrderStatus(OrderStatus.PLACED);
				
				orderRepository.save(order);
				}
			
			ApiResponse res = new ApiResponse();
			res.setMessage("Your order is placed.");
			res.setStatus(true);
			
			return new ResponseEntity<ApiResponse>(res, HttpStatus.ACCEPTED);
			
		} catch (Exception e) {
			// TODO: handle exception
			throw new RazorpayException(e.getMessage());
		}
	}
}
