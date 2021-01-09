$(document).ready(function(){

	$(".FindPrime").click(function(e){

		const sn1 = $(".startNumber1").val();
		const sn2 = $(".endNumber1").val();

		let k = 0;
		let primes = [];
		for(let i=sn1;i<=sn2;i++){

			let flag = 0;

			for(let j=2;j<i;j++){

				if(i%j==0){
					flag=1;
					break;
				}

			}


			if(i>1 && flag==0){
				primes[k++]=i;
			}


		}

		for (let i = 0;i<primes.length;i++) {
			$(".add-html-title").html("<br><center><h5>All Prime Numbers &nbsp;&nbsp;"+sn1+"&nbsp;To&nbsp;"+sn2+"&nbsp;&nbsp;</h5></center><br>");
			$(".add-html").append("<div class='col-sm-2'><strong>"+primes[i]+"</strong></div>");

		}
		
	});



	$(".FindDivisibility").click(function(e){

		const sn1 = $(".Number1").val();
		const sn2 = $(".Number2").val();

		
		
	});
});