/*
This file is for bubble sort
*/
exports.index = function(req, res){
	var A = [5,2,7,9,1];
	var swapped;
	do{
		swapped = false;
		for(i= 0; i< A.length; i ++){
			if(A[i]>A[i+1]){
				var temp = A[i];
				A[i] = A[i+1];
				A[i+1] = temp;
				swapped = true;
			}
		//console.log(temp);
		//console.log(A[i++]);
		}
	}while(swapped)
	
	res.send(A);
};