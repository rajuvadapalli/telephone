package com.telephone.combinations.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.telephone.combinations.model.Phonenum;

@Service
public class TelephoneService {
	
	public List<Phonenum> getAllCombinations(String num) {
		char[][] array = {
			    { '0' }, { '1' }, { 'A', 'B', 'C' }, { 'D', 'E', 'F' },
			    { 'G', 'H', 'I' }, { 'J', 'K', 'L' }, { 'M', 'N', 'O' },
			    { 'P', 'Q', 'R', 'S' }, { 'T', 'U', 'V' }, { 'W', 'X', 'Y', 'Z' }
			};

			// creates an combination Array
			// for 123 this is {{1},{ABC},{DEF}}
			char[][] combinationArr = new char[num.length()][];         
			for(int ix = 0; ix < num.length(); ix++)
			    combinationArr[ix] = array[Character.getNumericValue(num.charAt(ix))];

			// now print all permutations of combination Array
			// ics holds the actual index at each position
			int[] ics = new int[num.length()];
			boolean end = false;
			List<Phonenum> result=new ArrayList<Phonenum>();
			while(!end){ // while there are combinations left       
			    // print the actual combination
				StringBuffer sb=new StringBuffer();
			    for(int i = 0; i < combinationArr.length; i++) {
			        System.out.print(combinationArr[i][ics[i]]);
			        sb.append(combinationArr[i][ics[i]]);
			       
			    }
			    Phonenum phnum= new Phonenum(sb.toString());
		        result.add(phnum);
			    // increases one index, starting with the last one.
			    // If there is no char left it starts again at 0
			    // and the index before will get increased.
			    // If the first one could not get increased
			    // we have all combinations.
			    for(int i = ics.length - 1; i >= 0; i--){
			        ics[i]++;
			        if(ics[i] == combinationArr[i].length)
			            if(i == 0) end = true;
			            else ics[i] = 0;
			        else break;
			    }               
			}
			
			return result;
	}
	


}
