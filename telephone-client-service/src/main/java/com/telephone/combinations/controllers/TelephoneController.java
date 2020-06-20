package com.telephone.combinations.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.telephone.combinations.model.Phonenum;
import com.telephone.combinations.service.TelephoneService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TelephoneController {
	
	@Autowired
	TelephoneService telephoneService;
	
	/**
	 * Selects the home page and populates the model with a message
	 */
	@RequestMapping(value = "/phonenums/{inputPhone}", method = RequestMethod.GET)
	public List <Phonenum> getPhoneNums(@PathVariable String inputPhone) {
		List <Phonenum> phoneList = new ArrayList<Phonenum>();
		
		
		phoneList= telephoneService.getAllCombinations(inputPhone);
		System.out.println(inputPhone);
		
		return phoneList;
	}

}