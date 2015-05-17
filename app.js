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

function database(item) {
	switch (item) {
	case "orange juice":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>2.00</td> </tr>");
		subtotal += 2.00;
	    break;
	case "coffee":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>1.00</td> </tr>");
	 	subtotal += 1.00;
    	break;
	case "toast":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>5.00</td> </tr>");
		subtotal += 5;
	break;
	case "croissant":
	$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>2.00</td> </tr>");
		subtotal += 2;
	break;
	case "eggs":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>3.28</td> </tr>");
		subtotal += 3.28;
	break;
	case "soda":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>1.00</td> </tr>");
		subtotal+= 1.00;
	break;
	case "pizza":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>2.50</td> </tr>");
		subtotal += 2.50;
	break;
	case "hot dog":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>8.00</td> </tr>");
		subtotal += 8;
	break;
	case "fries":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>2.28</td> </tr>");
		subtotal += 2.28;
	break;
	case "hamburger":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>20.00</td> </tr>");
		subtotal += 20;
	break;
	case "lobster":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>80.00</td> </tr>");
		subtotal += 80;
    break;
	case "ramen":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>11.00</td> </tr>");
		subtotal += 11;
	break;
	case "sushi":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>17.00</td> </tr>");
		subtotal += 17;
	break;
	case "chocolate":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>2.19</td> </tr>");
		subtotal += 2.19;
	break;
	case "donut":
	$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>1.89</td> </tr>");
		subtotal += 1.89;
	break;
	case "cigarretes":
	$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>12.29</td> </tr>");
		 subtotal += 12.29;
	break;	
	case "beer":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>7.00</td> </tr>");
		subtotal += 7;
	break;
	case "whiskey":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>7.00</td> </tr>");
		subtotal += 7;
	break;
	case "cocktail":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>12.00</td> </tr>");
		subtotal += 12;
	break;
	case "wine":
		$(".table-area tbody ").append("<tr> <td>"+item+"</td> <td>1</td> <td>12.00</td> </tr>");
		subtotal += 12;
	break;
	default:
	break;

}

}