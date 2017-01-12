var x;

		x = [3.5, "Dojo", "rocks", "Michael", "Sensei"]
		for (var i = 0; i < x.length; i++){
			console.log(x[i]);
		}
		x.push(100);
		console.log(x);
		x.push( ["hello", "world", "JavaScript is Fun"] );
		console.log(x);
		var sum = 0;
		console.log("New page");

		for (var i = 1; i <= 500; i++) {
			sum+=i;
		}
		console.log("This is the sum of 1 to 500 = " + sum);

		// Array used for tests below

		var arrList = [1, 5, 90, 25, -3, 0];

		//Minimum value in an array
		
		function minArr(theArray){
			var min = theArray[0];
			for (var i = 1; i < theArray.length; i++) {
				if (theArray[i] < min)
					min = theArray[i];
			}
			return min;
		}
		console.log("The minimum value in the array was " + minArr(arrList));

		// Average value of the array

		function avgArr(theArray){
			var sum = 0;
			for (var i = 0; i < theArray.length; i++) {
				sum += theArray[i];
			}
			return sum/theArray.length;
		}

		console.log("The average of the values in the array is " + avgArr(arrList));
