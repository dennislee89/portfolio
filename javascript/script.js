/*modal image*/ 
var modal = document.getElementById('myModal');
var frame = document.getElementsByClassName('iframe')[0];
var modalpic = document.getElementById('img01');

frames.addEventListener('click', function(e) {
  var clicked = e.target;
  if (clicked.className === 'pics') {
    modal.style.display = "block";
    modalpic.src = clicked.src;
  } else {
    return false;
  }
});


/*stats page*/
$(function() {
  $('.tablist li a').click(function(e) {
    e.preventDefault();
    var currentTab = $(this).attr('href');

    $(currentTab)
          .show()
             .siblings()
              .hide();  
    
      $(this)
            .parent()
             .addClass('active')
                 .siblings()
                  .removeClass('active');
  });

});



/*Butler Stats Chart*/ 

$(document).ready(function(){
   $(".name").animate({left:160, opacity:"show"}, 1800);
});


var canvas = document.getElementById('butlerPtsChart');
canvas.width= 580;
canvas.height= 370; 

var data = {
    labels: ["2011-12", "2012-13", "2013-14", "2014-15", "2015-16"],
    datasets: [
        {
            label: "Points Per Game",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "gray",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [2.6, 8.6, 13.1, 20.0, 20.9],
            
        }
    ]
};
var option = {
animation: {
        duration:5000
},
      responsive:false,
    maintainAspectRatio: false
    
};


var myBarChart = Chart.Bar(canvas,{
  data:data,
  options:option

});



            /*Assist Chart*/ 

var canvas = document.getElementById('butlerAssChart');
canvas.width= 580;
canvas.height= 370; 

var data = {
    labels: ["2011-12", "2012-13", "2013-14", "2014-15", "2015-16"],
    datasets: [
        {
            label: " Assists Per Game",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [0.3, 1.4, 2.6, 3.3, 4.8],
        }
    ]
};
var option = {
animation: {
        duration:5000
},
      responsive:false,
    maintainAspectRatio: false
    
};


var myBarChart = Chart.Bar(canvas,{
  data:data,
  options:option

});


 /*Assist Chart*/ 

var canvas = document.getElementById('butlerRebChart');
canvas.width= 580;
canvas.height= 370; 

var data = {
    labels: ["2011-12", "2012-13", "2013-14", "2014-15", "2015-16"],
    datasets: [
        {
            label: "Rebounds Per Game",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [1.3, 4.0, 4.9, 5.8, 5.3],
        }
    ]
};
var option = {
animation: {
        duration:5000
},
      responsive:false,
    maintainAspectRatio: false
    
};


var myBarChart = Chart.Bar(canvas,{
  data:data,
  options:option

});


/* Radio */
$('.radiopick input[type=radio]').on('click',function(){
    if($(this).val()=="1"){
      $('.showStat').removeClass('hidden');
      $('.showAssist').addClass('hidden');
      $('.showReb').addClass('hidden');
    }else if($(this).val()=="2"){
      $('.showAssist').removeClass('hidden');
      $('.showStat').addClass('hidden');
      $('.showReb').addClass('hidden');
    }else if($(this).val()=="3"){
      $('.showReb').removeClass('hidden');
      $('.showStat').addClass('hidden');
      $('.showAssist').addClass('hidden');
    }
});

