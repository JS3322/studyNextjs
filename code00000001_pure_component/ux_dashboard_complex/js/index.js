$(document).ready(function() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {

			var reader = new FileReader();
            reader.onload = function (e) {
			
                $('.logo').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
	
    });
    
    $(".btn-logo").on('click', function() {
       $(".file-upload").click();

    });
});




$(function() {

  var w = $(window).width(),
    h = $(window).height();
  //$('section').width(w);
  $('section').height(h);
  $('menu .container').height(h - 60);
  $('body').prepend('<div id="overlay">');

  $('#menu').click(function() {$('html').addClass('active');});
  $('#close-menu').click(function() {$('html').removeClass('active');});
  $('#overlay').click(function() {$('html').removeClass('active');});
  $(window).resize(function() {
    var w = $(window).width(),
      h = $(window).height();
    //$('section').width(w);
    $('section').height(h);
    $('menu .container').height(h - 60);
  });

});

function toggle_bg(toggle){
	
	var bg_light=toggle.checked;

	if(bg_light){
		$("html").css({
			"background-image": "linear-gradient(to top,#7286ad, #91a6c9)"
		});
		$("body").css({
			"background-image": "linear-gradient(to top,#7286ad, #91a6c9)"
		});
		$("header").css({
			"background-image": "linear-gradient(60deg, #232940 0%, #595c70 100%)"
		});
		
	}else{
		
	$("html").css({
			"background-image": "linear-gradient(to bottom, #434343, #000000)"
		});
		$("body").css({
			"background-image": "linear-gradient(to bottom, #434343, #000000)"
		});
		$("header").css({
			"background-image": "linear-gradient(60deg, #0a0a0a 0%, #5b5f63 100%)"
		});
	
	}
}



function ingestpage(){
var insTag = "<embed src='./pages/vr003/vr003.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
	$("#page-name").text("Instance Detail") ;
    }
function querypage(){
var insTag = "<embed src='./pages/vr004/vr004.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
	$("#page-name").text("Instance View") ;
 }

function splpage(){
var insTag = "<embed src='./pages/vr005/vr005.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
		$("#page-name").text("Marge Table") ;
 }
function codepage(){
var insTag = "<embed src='./pages/vr006/vr006.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
	$("#page-name").text("Code") ;
 }
function lhistorypage(){
var insTag = "<embed src='./pages/vr007/vr007.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
	$("#page-name").text("Login History") ; 
}
function ehistorypage(){
var insTag = "<embed src='./pages/vr008/vr008.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
		$("#page-name").text("Event History") ; 

 }
function uregisterpage(){
var insTag = "<embed src='./pages/vr009/vr009.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
	$("#page-name").text("User Update") ; 
 }
function pwchangepage(){
var insTag = "<embed src='./pages/vr010/vr010.html' width='100%' height='800px'/>";
$("#main").html(insTag) ;
	$("#page-name").text("PW Change") ; 
 }

//"../vr003/vr003.html"