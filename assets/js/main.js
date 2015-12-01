function todaysDate() {
	var today = new Date();
	dd = today.getDate();
	mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = mm+'/'+dd+'/'+yyyy;
	console.log(dd);
}

todaysDate();
window.setInterval(todaysDate, 100000);


var days = ['one', 'two', 'three', 'four'];

for(var i = 0; i < days.length;i++){
	console.log("'#" + days[i] + "'");
	var day = "#" + days[i];
	console.log(day);

	$(+day).addClass("disabledbutton");

}


$(function(){
	console.log(dd);
	if(dd == 1){
		console.log("test1");
	}
	if(dd == 2){
		console.log("test2");
	}
	if(dd == 3){
		console.log("test3");
	}
	if(dd == 4){
		console.log("test4");
	}
	if(dd == 5){
		console.log("test5");
	}
	if(dd == 6){
		console.log("test6");
	}
	if(dd == 7){
		console.log("test7");
	}
	if(dd == 8){
		console.log("test8");
	}
	if(dd == 9){
		console.log("test9");
	}
	if(dd == 10){
		console.log("test10");
	}
	if(dd == 11){
		console.log("test10");
	}
	if(dd == 12){
		console.log("test10");
	}
	if(dd == 13){
		console.log("test10");
	}
	if(dd == 14){
		console.log("test10");
	}
	if(dd == 15){
		console.log("test10");
	}
	if(dd == 16){
		console.log("test10");
	}
	if(dd == 17){
		console.log("test10");
	}
	if(dd == 18){
		console.log("test10");
	}
	if(dd == 19){
		console.log("test10");
	}
	if(dd == 30){
		console.log("test20");
	}
	if(dd == 21){
		console.log("test10");
	}
	if(dd == 22){
		console.log("test10");
	}
	if(dd == 23){
		console.log("test10");
	}
	if(dd == 24){
		console.log("test10");
	}
/*
	$("#two").addClass("disabledbutton");
	$("#three").addClass("disabledbutton");
	$("#four").addClass("disabledbutton");
	$("#five").addClass("disabledbutton");
	$("#six").addClass("disabledbutton");
	$("#seven").addClass("disabledbutton");
	$("#eight").addClass("disabledbutton");
	$("#nine").addClass("disabledbutton");

*/
	$("#ten").addClass("disabledbutton");
	$("#eleven").addClass("disabledbutton");
	$("#twelve").addClass("disabledbutton");
	$("#thirteen").addClass("disabledbutton");
	$("#fourteen").addClass("disabledbutton");
	$("#fifteen").addClass("disabledbutton");
	$("#sixteen").addClass("disabledbutton");
	$("#seventeen").addClass("disabledbutton");
	$("#eighteen").addClass("disabledbutton");
	$("#nineteen").addClass("disabledbutton");
	$("#twenty").addClass("disabledbutton");
	$("#twentyone").addClass("disabledbutton");
	$("#twentytwo").addClass("disabledbutton");
	$("#twentythree").addClass("disabledbutton");
	$("#twentyfour").addClass("disabledbutton");

});





$(function(){

	// SECOND TEST

	function secondTest(){
		/*
		document.cookie = "test=test1";
		alert(document.cookie);
		*/
		var correctAnswer = 23;
		var secondAnswer = $("#secondTest").val();
		$("#secondTest").val("");
		if(secondAnswer == correctAnswer || secondAnswer == "bein"){
			console.log("correct");
			$('#secondModal').modal('hide');
			swal("Good job, genius!", "CHECK it out", "success");
		}
		if(secondAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#secondTest").val("");
			$("#two").addClass("disabledbutton");
			$('#secondModal').modal('hide');
		}
	}

	$("#secondTest").keyup(function(event){
    	if(event.keyCode == 13){
        	secondTest();    
    	}
	});	

	$("#secondBtn").click(function(){
		secondTest();
	});



	// THIRD TEST

	function thirdTest(){
		var correctAnswer = "ben";
		var thirdAnswer = $("#thirdTest").val().toLowerCase();
		$("#thirdTest").val("");
		if(thirdAnswer == correctAnswer){
			$('#thirdModal').modal('hide');
			swal({   title: "Dr. Habhab",   text: "Here's your sign",   imageUrl: "assets/img/thumbs-up.jpg" });

		}
		if(thirdAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#thirdTest").val("");
			$("#three").addClass("disabledbutton");
			$('#thirdModal').modal('hide');
		}
	}

	$("#thirdTest").keyup(function(event){
    	if(event.keyCode == 13){
        	thirdTest();    
    	}
	});	

	$("#thirdBtn").click(function(){
		thirdTest();
	});


	// FOURTH TEST

	function fourthTest(){
		var correctAnswer = 34;
		var fourthAnswer = $("#fourthTest").val();
		$("#fourthTest").val("");
		if(fourthAnswer == correctAnswer){
			$('#fourthModal').modal('hide');
			swal("Gjett hva som er tegnet? <34")

		}
		if(fourthAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#fourthTest").val("");
			$("#four").addClass("disabledbutton");
			$('#fourthModal').modal('hide');
		}
	}

	$("#fourthTest").keyup(function(event){
    	if(event.keyCode == 13){
        	fourthTest();    
    	}
	});	

	$("#fourthBtn").click(function(){
		fourthTest();
	});


	// FIFTH TEST


	$("#fifthBtn").click(function(){
		
		swal({   title: "Denne oppgaven har du vært borti før",   text: "Om 5 sekunder får du ? til å....",   timer: 5000,   showConfirmButton: false });

		setTimeout(function() {
      		$('#fifthModal').modal('show');
    	}, 6000); // milliseconds

    	setTimeout(function(){
    		$('#fifthModal').modal('hide');
    	}, 20000);

    	setTimeout(function(){
    		$("#fifthModalTwo").modal('show');
    	}, 21000);    	

	});

	$("#fifthBtnTwo").click(function(){
		var correctAnswer = "buffalo";
    	var fifthAnswer = $('#fifthTaskTwo').val().toLowerCase();
    	$("#fifthTaskTwo").val("");
    	if(fifthAnswer == correctAnswer){
    		$("#fifthModalTwo").modal('hide');
    		$("#fifthModalThree").modal('show');
    		var audio = new Audio('assets/audio/buffalo-soldier.mp3');
			audio.play();	    		
    	}
    	if(fifthAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#fifthTaskTwo").val("");
			$("#five").addClass("disabledbutton");
			$('#fifthModalTwo').modal('hide');
		}
	})

	$('#sixthBtn').click(function(){
		swal({   title: "This is not supposed to be easy...! ",   text: "Buckle Up & Play The Maze!",   timer: 5500,   showConfirmButton: false });
		setTimeout(function(){
			location.href = 'http://www.maniacworld.com/maze_game.htm';	
		}, 6000);
	});

	$('#seventhBtn').click(function(){
		var correctAnswer = "kor e a";
		var seventhAnswer = $("#seventhTask").val();
		if(seventhAnswer == correctAnswer){
			$('#seventhModal').modal('hide');
			swal({   title: "Beste vitsen ever...",   text: "<3<3<3",   imageUrl: "assets/img/korean-man.png" });
		}

		if(seventhAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#seventhTask").val("");
			$("#seven").addClass("disabledbutton");
			$('#seventhModal').modal('hide');
		}
	});

	$('#eightBtn').click(function(){
		var correctAnswer = "mari";
		var eightAnswer = $('#eightTask').val().toLowerCase();
		if(eightAnswer == correctAnswer){
			$('#eightTask').val('');
			$('#eightModal').modal('hide');
			swal({   title: "Tricky?",   text: "Trodde ikke det...",   imageUrl: "assets/img/cute-girl.png" });
		}

		if(eightAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#eightTask").val("");
			$("#eight").addClass("disabledbutton");
			$('#eightModal').modal('hide');
		}
	});

	$('#ninthBtn').click(function(){
		var correctAnswer = 54;
		var ninthAnswer = $('#ninthTask').val();
		if(ninthAnswer == correctAnswer){
			$('#ninthTask').val('');
			$('#ninthModal').modal('hide');
			var promptAns = prompt("Har du gjort deg fortjent til denne surprisen?");
			if(promptAns == "Ja" || promptAns == "Yes" ||promptAns == "ja" || promptAns == "yes"){
				alert("=)");
			} else {
				$("#nine").addClass("disabledbutton");
			}
		}

		if(ninthAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#ninthTask").val("");
			$("#nine").addClass("disabledbutton");
			$('#ninthModal').modal('hide');
		}
	});

	$('#tenthBtn').click(function(){
		var correctAnswer = "clavicle";
		var tenthAnswer = $('#tenthTask').val().toLowerCase();
		if(tenthAnswer === correctAnswer){
			$('#tenthTask').val('');
			$('#tenthModal').modal('hide');
			swal({   title: "Was it hard?",   text: "Didn't think so..",   imageUrl: "assets/img/line-man.jpeg" });
		}

		if(tenthAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#tenthTask").val("");
			$("#ten").addClass("disabledbutton");
			$('#tenthModal').modal('hide');
		}
	});

	$('#eleventhBtn').click(function(){
		var correctAnswer = $("#elevenOne").hasClass("newID");
		if(correctAnswer){
			$('#eleventhModal').modal('hide');
			swal({   title: "This guys...",   text: "2nd law!",   imageUrl: "assets/img/newton-img.jpg" });
		}

		if(!correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#eleven").addClass("disabledbutton");
			$('#eleventhModal').modal('hide');
		}
		
	});

	$('#twelvthBtn').click(function(){
		var correctAnswer = "sarita";
		var twelvthAnswer = $('#twelvthTask').val().toLowerCase();
		if(twelvthAnswer == correctAnswer){
			$('#twelvthTask').val('');
			$('#twelvthModal').modal('hide');
			swal({   title: "",   text: "",   imageUrl: "assets/img/tiger-face.png" });
		}

		if(twelvthAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#twelvthTask").val("");
			$("#twelve").addClass("disabledbutton");
			$('#twelvthModal').modal('hide');
		}
	});

	$('#thirteenthBtn').click(function(){
		var correctAnswer = 639125487;
		var thirteenthAnswer = $('#thirteenthTask').val();
		if(thirteenthAnswer == correctAnswer){
			$('#thirteenthTask').val('');
			$('#thirteenModal').modal('hide');
			swal({   title: "Sa du ko?",   text: "",   imageUrl: "assets/img/plane-3.jpg" });
		}

		if(thirteenthAnswer != correctAnswer){
			swal("That's not correct!", "Toooo baaad!")
			$("#thirteenthTask").val("");
			$("#thirteen").addClass("disabledbutton");
			$('#thirteenModal').modal('hide');
		}
	});
});

function addIdOne(){
	$('#elevenOne').attr('class', 'newID');
	$('#elevenTwo').attr('class', 'oldID');
	$('#elevenThree').attr('class', 'oldID');
	$('#elevenFour').attr('class', 'oldID');
	$('#elevenFive').attr('class', 'oldID');
}
function addIdTwo(){
	$('#elevenOne').attr('class', 'oldID');
	$('#elevenTwo').attr('class', 'newID');
	$('#elevenThree').attr('class', 'oldID');
	$('#elevenFour').attr('class', 'oldID');
	$('#elevenFive').attr('class', 'oldID');

}
function addIdThree(){
	$('#elevenOne').attr('class', 'oldID');
	$('#elevenTwo').attr('class', 'oldID');
	$('#elevenThree').attr('class', 'newID');
	$('#elevenFour').attr('class', 'oldID');
	$('#elevenFive').attr('class', 'oldID');

}
function addIdFour(){
	$('#elevenOne').attr('class', 'oldID');
	$('#elevenTwo').attr('class', 'oldID');
	$('#elevenThree').attr('class', 'oldID');
	$('#elevenFour').attr('class', 'newID');
	$('#elevenFive').attr('class', 'oldID');

}
function addIdFive(){
	$('#elevenOne').attr('class', 'oldID');
	$('#elevenTwo').attr('class', 'oldID');
	$('#elevenThree').attr('class', 'oldID');
	$('#elevenFour').attr('class', 'oldID');
	$('#elevenFive').attr('class', 'newID');

}