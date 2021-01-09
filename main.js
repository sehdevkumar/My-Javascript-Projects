$(document).ready(function(){

	

	$(".CheckPrime").click(function(e){


		$(".Check-Prime").toggleClass("active");
		$(".Check-Disivility").removeClass("active");
		$(".Find-Divisors").removeClass("active");
		$(".Find-Unit-Place").removeClass("active");
		$(".Find-Prime-Factors").removeClass("active");

	});


	$(".CheckDisivility").click(function(e){


		$(".Check-Prime").removeClass("active");
		$(".Check-Disivility").toggleClass("active");
		$(".Find-Divisors").removeClass("active");
		$(".Find-Unit-Place").removeClass("active");
		$(".Find-Prime-Factors").removeClass("active");

	});


	$(".FindDivisors").click(function(e){


		$(".Check-Prime").removeClass("active");
		$(".Check-Disivility").removeClass("active");
		$(".Find-Divisors").toggleClass("active");
		$(".Find-Unit-Place").removeClass("active");
		$(".Find-Prime-Factors").removeClass("active");

	});


	$(".FindUnitPlace").click(function(e){


		$(".Check-Prime").removeClass("active");
		$(".Check-Disivility").removeClass("active");
		$(".Find-Divisors").removeClass("active");
		$(".Find-Unit-Place").toggleClass("active");
		$(".Find-Prime-Factors").removeClass("active");

	});


	$(".FindPrimeFactors").click(function(e){


		$(".Check-Prime").removeClass("active");
		$(".Check-Disivility").removeClass("active");
		$(".Find-Divisors").removeClass("active");
		$(".Find-Unit-Place").removeClass("active");
		$(".Find-Prime-Factors").toggleClass("active");

	});

});