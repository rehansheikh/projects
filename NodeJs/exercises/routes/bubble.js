/*
This file is for bubble sort
*/
exports.index = function(req, res){
	var A = [5,2,7,9,1];

	foreach(i in A){
		if(A[i]>A[i+1]){
			var temp = A[i];
			A[i] = A[i+1];
			A[i+1] = temp;
		}
	}
	res.send(A);
}; 
