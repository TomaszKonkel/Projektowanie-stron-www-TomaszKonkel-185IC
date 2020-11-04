$(document).ready(function () {
    
    $("#btn1").click(function () {
        $("#test1").text("Przeszedłeś dalej");
		$("#test1").attr("class", "text");
    });
	$("#btn2").click(function() {
		$("#test1").slideUp("4000");
		$("#btn3").slideUp("4000");
		$("#btn4").slideUp("4000");
		$("#btn5").slideUp("4000");
		$("#btn6").slideUp("4000");
		$("#btn7").slideUp("4000");
		$("#btn8").slideUp("4000");
		$("#btn9").slideUp("4000");
		$("#btn10").slideUp("4000");
		$("#btn11").slideUp("4000");
		$("#btn12").slideUp("4000");
		$("#btn13").slideUp("4000");
		$("#btn14").slideUp("4000");
		$("#l2").slideUp("4000");
		$("#l1").slideUp("4000");
		$("#z1").slideUp("4000");
		$("#z2").slideUp("4000");
		$("p").slideUp("4000");
		$("#clear").slideUp("4000");
		
	});
	$("#btn2").dblclick(function() {
		$("#test1").slideDown("2000");
		$("#btn3").slideDown("2000");
		$("#btn4").slideDown("2000");
		$("#btn5").slideDown("2000");
		$("#btn6").slideDown("2000");
		$("#btn7").slideDown("2000");
		$("#btn8").slideDown("2000");
		$("#btn9").slideDown("2000");
		$("#btn10").slideDown("2000");
		$("#btn11").slideDown("2000");
		$("#btn12").slideDown("2000");
		$("#btn13").slideDown("2000");
		$("#btn14").slideDown("2000");
		$("#l2").slideDown("2000");
		$("#l1").slideDown("2000");
		$("#z1").slideDown("2000");
		$("#z2").slideDown("2000");
		$("p").slideDown("2000");
		$("#clear").slideDown("2000");
		
	});
	
	$("#btn3").click(function() {
		$("#test1").attr("class", "textALT");
		$("#btn3").slideUp(2000);
	});
	$("#btn4").click(function() {
		$("#btn1").attr("class", "zmiana1");
		$("#btn3").attr("class", "zmiana1");
		$("#btn4").attr("class", "zmiana1");
		$("#btn5").attr("class", "zmiana1");
	});
	$("#btn5").click(function() {
		$("#btn1").attr("class", "zmiana");
		$("#btn2").attr("class", "zmiana");
		$("#btn3").attr("class", "zmiana");
		$("#btn4").attr("class", "zmiana");
		$("#btn5").attr("class", "zmiana");
	});
	$("#btn6").click(function() {
		alert("Tutaj jest ważna wiadomość!!")
	});
	$("#btn7").click(function() {
		$("#link").attr("href", "https://www.google.pl");
	});	
	$("#btn8").click(function(){
		$("#btn1").addClass("czcionka");
		$("#btn2").addClass("czcionka");
		$("#btn3").addClass("czcionka");
		$("#btn4").addClass("czcionka");
		$("#btn5").addClass("czcionka");
		$("#btn6").addClass("czcionka");
		$("#btn7").addClass("czcionka");
		$("#btn8").addClass("czcionka");
		$("#z1").addClass("czcionka");
		$("#z2").addClass("czcionka");
	});
	$("#btn9").click(function(){
		$("#btn1").removeClass("czcionka");
		$("#btn2").removeClass("czcionka");
		$("#btn3").removeClass("czcionka");
		$("#btn4").removeClass("czcionka");
		$("#btn5").removeClass("czcionka");
		$("#btn6").removeClass("czcionka");
		$("#btn7").removeClass("czcionka");
		$("#btn8").removeClass("czcionka");
		$("#z1").removeClass("czcionka");
		$("#z2").removeClass("czcionka");
	});
	$("#btn10").click(function(){
		$("#btn10").css("background-color", "blue");
	});
	$("#btn10").dblclick(function(){
		$("#btn10").css("background-color", "white");
	});
	$("#btn11").mouseenter(function(){
		$("#btn11").hide()
    });
	$("#btn11").mouseleave(function(){
		$("#btn11").show()
    });
	$("#btn12").mousedown(function(){
		$("#btn12").hide()
    });
	$("#btn13").hover(function(){
		$("#btn13").addClass("zmiana1");
	},
		function(){
		$("#btn13").removeClass("zmiana1");	
    });
	$("#btn14").click(function(){
		$("#hajd").hide("slow")
    });
	$("#btn13").click(function(){
		$("#btn13").text("Miałeś najechać, a nie kliknąć :(");
    });
	$("#a").click(function () {
        $("#pole").append("Coś o mnie<br></br>");
    });
	$("#b").click(function () {
		$("#pole").append("Coś o serwisach<br></br>");
	});
	$("#c").click(function() {
		$("#pole").append("Coś o kontaktach<br></br>");
	});
	
	
	$("#z1").click(function() {
		$("#l1").prepend("Wykonano: ");
	});
	$("#z2").click(function() {
		$("#l2").prepend("Wykonano:");
	});
    $("p").on("click", function(){
		$(this).hide();
    });
  $("#clear").click(function(){
		$("#pole").empty();
	});
});