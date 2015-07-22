$(document).ready(function(){
	$("img").click(function(){
		database($(this).attr("alt"));
		$("#sub-total").text("Subtotal: "+ subtotal.toFixed(2));
		calulateTax();
		calulateTotal();
		$("#tax").text("Tax: "+ tax.toFixed(2));
		$("#total").text("Total: " + total.toFixed(2));
		$(".table-area").scrollTop(99999999);
	});
	$("#print").click(function(){
		window.print();
	});
	$("#paid").click(function(){
		subtotal = tip = tax = total = 0;
		$("#sub-total").text("Subtotal: 0.00");
		$("#tip").text("Tip: 0.00");
		$("#tax").text("Tax: 0.00");
		$("#total").text("Total: 0.00");
		$(".table-area tbody").empty();
		$("#cash").text("Cash: 0.00");
    $("#change").text("Change: 0.00");
	});
	$("#calctip").click(function(){
		calculateTip();
		calulateTotal();
		$("#tip").text("Tip: "+tip.toFixed(2));
		$("#total").text("Total: " + total.toFixed(2));
	});
	$("#free").on("click", function(){
		var $value = $("td:last").text();
		subtotal -= $value;
		calulateTax();
		calculateTip();
		calulateTotal();
		$("#tip").text("Tip: "+tip.toFixed(2));
		$("#tax").text("Tax: "+ tax.toFixed(2));
		$("#sub-total").text("Subtotal: "+ subtotal.toFixed(2));
		$("#total").text("Total: " + total.toFixed(2));
		$("td:last").text("-"+ $value);
	});
	$("input").keypress(function(e) {
    	if(e.which == 13) {
    		var payment = $(this).val();
    		$("#cash").text("Cash: "+ payment);
    		$("#change").text("Change: " +(payment - total).toFixed(2));
        $(this).val("");
    }
	});
});

var prices = [
	2.00, 
	1.00, 
	5.00, 
	3.28, 
	2.50, 
	8.00, 
	2.28, 
	20.00, 
	80.00, 
	11.00, 
	17.00, 
	2.19, 
	1.89, 
	12.29, 
	7.00, 
	12.00
]
var subtotal = 0;
var tip = 0;
var total = 0;
var tax = 0;

function calulateTax(){
	tax = subtotal * 0.0885;
}

function calulateTotal(){
	total = subtotal + tax + tip;
}

function calculateTip() {
	tip = subtotal * 0.20;
}
function appendToDom(item, price) {
	$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>"+price+"</td> </tr>");
		subtotal += price;
	} 

function database(item) {
	switch (item) {
	case "orange juice":
		appendToDom(item, prices[0])
	    break;
	case "coffee":
		appendToDom(item, prices[1])
    	break;
	case "toast":
		appendToDom(item, prices[2])
	break;
	case "croissant":
		appendToDom(item, prices[0])
	break;
	case "eggs":
		appendToDom(item, prices[0])
	break;
	case "soda":
		appendToDom(item, prices[1])
	break;
	case "pizza":
		appendToDom(item, prices[4])
	break;
	case "hot dog":
		appendToDom(item, prices[5])
	break;
	case "fries":
		appendToDom(item, prices[6])
	break;
	case "hamburger":
		appendToDom(item, prices[7])
	break;
	case "lobster":
		appendToDom(item, prices[8])
    break;
	case "ramen":
		appendToDom(item, prices[9])
	break;
	case "sushi":
		appendToDom(item, prices[10])
	break;
	case "chocolate":
		appendToDom(item, prices[11])
	break;
	case "donut":
		appendToDom(item, prices[12])
	break;
	case "cigarretes":
		appendToDom(item, prices[13])
	break;	
	case "beer":
		appendToDom(item, prices[14])		
	break;
	case "whiskey":
		appendToDom(item, prices[14])
	break;
	case "cocktail":
		appendToDom(item, prices[15])
	break;
	case "wine":
		appendToDom(item, prices[15])
	break;
	default:
	break;

}

}