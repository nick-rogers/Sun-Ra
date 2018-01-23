$(document).ready(function(){

	//$(document).ready(page2);

	$('.button').click(page2);

	$('.white-circle').click(page3Full);

	$('.next').click(page4);

	$('.final-button').click(function(){
		/*$('.page-4').fadeOut(400);
		$('.page-3Full').fadeOut(400);
		$('.p2-background').fadeOut(400);*/
		location.reload();
	});

	var c1 = "#c1";
	var c2 = "#c2";
	var c3 = "#c3";
	var c4 = "#c4";


	$(document).ready(makeBig(c1));

	console.log(c1);

	function makeBig(input){



		console.log(input.charAt(2));

		$(input).css('width', '75%');
		$(input).css('height', '75%');
		$(input).css('margin-left', '15%');
		$(input).css('line-height', '30px');

		if(input.charAt(2)=='3'){
			$(input).css('color', '#180218');
		}
		else {
			$(input).css('color', 'white');
		}
	}

	function makeSmaller (input){
		$(input).css('width', '50%');
		$(input).css('height', '50%');
		$(input).css('margin-left', '25%');
		$(input).css('color', 'rgba(0, 0, 0, 0.0)');
		$(input).css('line-height', '20px');
	}



function page2() {

	$(document).ready(makeBig(c2));
	$(document).ready(makeSmaller(c1));

	$('.map').css('display','block');
	$('.p2-background').css('margin-left', '-50%');
	$('#title1').fadeOut(700);
	$('#underline').fadeOut(700);
	$('.button').fadeOut(700);
	$('.alabama').fadeIn(700);
	$('.illinois').fadeIn(700);

	$('#Origins, #Origins2, #Origins3, .p2-1, .p2-2, .p2-3').fadeIn(800);

	setTimeout(backgroundSwitch, 700);
	setTimeout(page3, 2000);

	
	var lineDraw = setInterval(linesAppear, 170);

	function backgroundSwitch(){
		$('body').css('background', 'linear-gradient(-180deg, #f6a06b, #f6a06b)');
	}


	var counter = 1;
	function linesAppear(){

		var theString = "0";
		var idString = "";

		if(counter < 10){
			var thisNumber = counter.toString();
			theString = theString.concat(thisNumber);
			idString = "#d"+theString;
			console.log(idString);

			$(idString).css('display', 'block');
		}
		else if(counter == 10){
			idString = "#d10";
			$(idString).css('display', 'block');
		}
		else {
			idString = "#d11";
			$(idString).css('display', 'block');
			window.clearInterval(lineDraw);
		}
		counter = counter + 1;
	}
}


function page3() {
	$('.page-3').fadeIn(800);
}

function page3Full() {

	$(document).ready(makeBig(c3));
	$(document).ready(makeSmaller(c2));

	console.log('page 3 worked');
	$('.white-circle').css('margin-left', '-175%');
	$('.white-circle').css('margin-top', '-50%');
	$('.white-circle').css('width', '400%');
	$('.white-circle').css('height', '400%');
	$('.circle').addClass('circle-active');
	$('.circle').removeClass('circle');
	$('.active-circle').css('color', '#180218');



	setTimeout(removeOld, 2000);

	function removeOld() {
		$('.page-3').css('display', 'none');
		$('.page-3Full').fadeIn(500);
		$('body').css('background', 'linear-gradient(-180deg, #ffffff, #ffffff)');
		$('.map').css('display','none');
	}

}

function page4(){

	$(document).ready(makeBig(c4));
	$(document).ready(makeSmaller(c3));
	$('.circle-active').css('background-color','white');

	$('.page-4').fadeIn(500);

	setTimeout(buttonGrow, 700);

	function buttonGrow() {
		$('.box').css('width','450px');
		$('.box').css('height','420px');
		$('.box').css('margin-left','460px');
		$('.box').css('margin-top','-50px');

		setTimeout(appearBox, 1000);

		function appearBox() {
			$('.inner-box').fadeIn(300);
		}
	}
}








});