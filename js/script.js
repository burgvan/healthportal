$(document).ready(function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	
	
	
	$('.menu-mobile').popover({
		html: true,
		content : '<a href="#">Settings</a><a href="#">Help</a><a href="#">Logout</a>'
		
	});


	
	// $('.messages').popover({
	// 	html: true,
	// 	content : '<div class="msg-block"><h3>New Goal Achieved!</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim justo at metus vehicula, in luctus magna sagittis. Nulla vitae commodo velit. <span class="fa fa-times-circle msg-delete"</span></div> <div class="msg-block"><h3>New Message from John</h3>Ipsum dolor sit amet, at metus vehicula, in luctus magna sagittis. Nulla vitae commodo velit.<span class="fa fa-times-circle msg-delete"</span></div>'
		
	// });
	
	// $('.confirm').popover({
	// 	html: true,
	// 	content : '<ul class="accept-decline"><li><a href="#">Accept</a></li><li><a href="#">Decline</a></li></ul>'

	// });


	//CLOSE POPOVERS WHEN CLICKING OUTSIDE OF IT
	$('body').on('click', function (e) {
        //did not click a popover toggle, or icon in popover toggle, or popover
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('[data-toggle="popover"]').length === 0
            && $(e.target).parents('.popover.in').length === 0) { 
            $('[data-toggle="popover"]').popover('hide');
        }
    });

	var msgcount = 2;
	
	/*NOTIFICATIONS*/	
	// $('body').on('click', '.msg-delete', function() {
	// 	var t = $(this);
	// 	msgcount--;
	// 	$('.msg-count').text(msgcount);
		
	// 	if(msgcount==0){
	// 		$('.msg-count').remove();
	// 		t.parent().parent().parent().remove();	
	// 	}else{
	// 		t.parent().remove();	
	// 	}
	// });

		var el = document.getElementById('weight');
	document.getElementById('change-weight').onclick = function showHide4() {
	    el.readOnly = false;
	    el.style.backgroundColor = "#F1CF78";
	    el.focus();
	    el.value = el.value;
	};

	var el = document.getElementById('waist');
	document.getElementById('change-waist').onclick = function showHide4() {
	    el.readOnly = false;
	    el.style.backgroundColor = "#F1CF78";
	    el.focus();
	    el.value = el.value;
	};

		var el = document.getElementById('bmi');
	document.getElementById('change-bmi').onclick = function showHide4() {
	    el.readOnly = false;
	    el.style.backgroundColor = "#F1CF78";
	    el.focus();
	    el.value = el.value;
	};




/* Listener Test */
$('[data-listen]').each(function () {
  var $this = $(this);
  var el = '#'+$this.attr('data-listen');
              
  $(el).change(function (e) {
    $this.text($(el).val());
  });
  $this.text($(el).val());
});





	
	/*GOALS WIDGET*/
	/*GOALS WIDGET*/
	// var goalCount = $('.goal-item').length;
	
	// $('.goal-item').each(function(e){
	// 	var i = $(this);
	// 	var length = e.lenght;
			
	// 	//creating the chart
	// 	var goal = i.find('.goal-n').text();
	// 	var reading = i.find('.reading-n').text();
		
	// 	var readingPercentage = reading/goal;
	// 	var goalWidth = i.find('.goal-graph').width();		
	// 	var total = goalWidth*readingPercentage;
		
	// 	i.find('.goal-progress').css('width', total)
		
	// 	//writing the percentage
	// 	var width = 100 * parseFloat(total) / parseFloat(goalWidth);
	// 	var status = width.toFixed(0);
		
	// 	i.find('.goal-status').text(status+'%')
		
	// 	//if a goal had been completed
	// 	if (total >= goalWidth){			
	// 		i.find('.goal-progress').css('width', goalWidth);
	// 		i.find('.goal-status').text('100%');
	// 		i.addClass('completed');
	// 		i.find('h3').append('<span class="fa fa-check-circle"></span>')
	// 	}
		
	// 	//goal counts
	// 	var goalCompleted = $('.completed').length;
	// 	$('.w-head-span').text(goalCompleted + '/' + goalCount)
		
	// });
	

	//PROVINCE/CITY DROPDOWNS CORRESPSONDENCE
	//making the province dropdown menu correspond to the city dropdown

	var form

	document.querySelector("#fProvince").onchange = function(){
	var sel = this.options[this.selectedIndex].value;
	makeRegions(sel);	
	}

	form = document.querySelector("#request-form"); 

	function makeRegions(fProvince){
		var selected = form.fProvince;
		
		if(fProvince == "ON"){
			var regionsArray = ON;
			}else if(fProvince == "NB"){
			var regionsArray = NB;
			}else if (fProvince == "BC"){
			var regionsArray = BC;
			}
		
		//detroy any other option tags in territory dropdown that don't represent the selected country 
		var opts = document.querySelectorAll("#fCity option");
		
		//a loop to go through the array and remove any option tags
		for(var i=0;i<opts.length;i++){
			//have the option tags destroyed
			opts[i].parentNode.removeChild(opts[i]);
		}
		
		//a loop for the array of regions and to create the option tags
		for(var r=0;r<regionsArray.length;r++){
			//split each of the values in the region array on the :
			var rArray = regionsArray[r].split(":");
			// with : and split, there are two values in an array with each set of characters on either side of the : .
			
			//make an option tag and give it the values from the split
			var optTag = document.createElement("option");
			optTag.value = rArray[0]; //the value is the two/three letter code, or the characters before the colon
			optTag.text = rArray[1]; // the text or what the use sees, is the name of the region or the characters after the colon
			
			//add the option tag to the territory dropdown menu
			form.fCity.appendChild(optTag);
		}
	}
	


/*MESSAGES WIDGET*/
		$(function(){ ReadyChat.init(); });

		var ReadyChat = function() {
		    var chatHeight          = 378; // Default chat container height in large screens
		    var chatHeightSmall     = 300; // Default chat components (talk & people) height in small screens

		    /* Cache some often used variables */
		    var chatCon             = $('.chatui-container');
		    var chatTalk            = $('.chatui-talk');
		    var chatTalkScroll      = $('.chatui-talk-scroll');

		    var chatPeople          = $('.chatui-people');
		    var chatPeopleScroll    = $('.chatui-people-scroll');

		    var chatInput           = $('.chatui-input');
		    var chatMsg             = '';

		    /* Updates chat UI components height */
		    var updateChatHeight = function(){
		        var windowW = window.innerWidth
		                        || document.documentElement.clientWidth
		                        || document.body.clientWidth;

		        if (windowW < 768) { // On small screens
		            chatCon
		                .css('height', (chatHeightSmall * 2) + chatInput.outerHeight());

		            chatTalk
		                .add(chatTalkScroll)
		                .add(chatTalkScroll.parent())
		                .add(chatPeople)
		                .add(chatPeopleScroll)
		                .add(chatPeopleScroll.parent())
		                .css('height', chatHeightSmall);
		        }
		        else if (windowW > 767) { // On large screens
		            chatCon
		                .css('height', chatHeight);

		            chatTalk
		                .add(chatTalkScroll)
		                .add(chatTalkScroll.parent())
		                .css('height', chatHeight - chatInput.outerHeight());

		            chatPeople
		                .add(chatPeopleScroll)
		                .add(chatPeopleScroll.parent())
		                .css('height', chatHeight);
		        }
		    };

		    return {
		        init: function() {
		            // Initialize default chat height
		            updateChatHeight();

		            // Update chat UI components height on window resize
		            $(window).resize(function(){ updateChatHeight(); });

		            // Initialize scrolling on chat talk + people
		            chatTalkScroll
		                .slimScroll({
		                    height: chatTalk.outerHeight(),
		                    color: '#009688',
		                    size: '10px',
		                    position: 'right',
		                    touchScrollStep: 100
		                });

		            chatPeopleScroll
		                .slimScroll({
		                    height: chatPeople.outerHeight(),
		                    color: '#009688',
		                    size: '5px',
		                    position: 'right',
		                    touchScrollStep: 100
		                });

		            // When the chat message form is submitted
		            chatInput
		                .find('form')
		                .submit(function(e){
		                    // Get text from message input
		                    chatMsg = chatInput.find('#chatui-message').val();

		                    // If the user typed a message
		                    if (chatMsg) {
		                        // Add it to the message list
		                        chatTalk
		                            .find('ul')
		                            .append('<li class="chatui-talk-msg chatui-talk-msg-highlight animation-expandUp">'
		                                    + $('<div />').text(chatMsg).html()
		                                    + '</li>');

		                        // Scroll the message list to the bottom
		                        chatTalkScroll
		                            .animate({ scrollTop: chatTalkScroll[0].scrollHeight },150);

		                        // Reset the message input
		                        chatInput
		                            .find('#chatui-message')
		                            .val('');
		                    }

		                    // Don't submit the message form
		                    e.preventDefault();
		                });
		        }
		    };
		}();




	/* HEALTH FACTORS*/

// preload image function
function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}


  // set up radio boxes
	$('.radioholder').each(function(){
		$(this).children().hide();
		var description = $(this).children('label').html();
		$(this).append('<h3 class="activity-title checklist">'+description+'</h3>');
		$(this).prepend('<span class="tick"></span>');
		// on click, update radio boxes accordingly
		$(this).click(function(){
			$(this).children('input').prop('checked', true);
			$(this).children('input').trigger('change');
		});
	});
	// update radio holder classes when a radio element changes
	$('input[type=radio]').change(function(){
    $('input[type=radio]').each(function(){
      if($(this).prop('checked') == true) {   
        $(this).parent().addClass('activeradioholder');
      }
			else $(this).parent().removeClass('activeradioholder');
		});
	});
	// manually fire radio box change event on page load
	$('input[type=radio]').change();

	// set up select boxes
	$('.selectholder').each(function(){
		$(this).children().hide();
		var description = $(this).children('label').text();
		$(this).append('<span class="desc">'+description+'</span>');
		$(this).append('<span class="pulldown"></span>');
		// set up dropdown element
		$(this).append('<div class="selectdropdown"></div>');
	  $(this).children('select').children('option').each(function(){
			if($(this).attr('value') != '0') {
				$drop = $(this).parent().siblings('.selectdropdown');
				var name = $(this).attr('value');
				$drop.append('<span>'+name+'</span>');
			}
		});
		// on click, show dropdown
		$(this).click(function(){
			if($(this).hasClass('activeselectholder')) {
				// roll up roll up
				$(this).children('.selectdropdown').slideUp(200);
				$(this).removeClass('activeselectholder');
				// change span back to selected option text
				if($(this).children('select').val() != '0') {
					$(this).children('.desc').fadeOut(100, function(){
						$(this).text($(this).siblings("select").val());
						$(this).fadeIn(100);
					});
				}
			}
			else {
				// if there are any other open dropdowns, close 'em
				$('.activeselectholder').each(function(){
					$(this).children('.selectdropdown').slideUp(200);
					// change span back to selected option text
					if($(this).children('select').val() != '0') {
						$(this).children('.desc').fadeOut(100, function(){
							$(this).text($(this).siblings("select").val());
							$(this).fadeIn(100);
						});
					}
					$(this).removeClass('activeselectholder');
				});			
				// roll down
				$(this).children('.selectdropdown').slideDown(200);
				$(this).addClass('activeselectholder');
				// change span to show select box title while open
				if($(this).children('select').val() != '0') {
					$(this).children('.desc').fadeOut(100, function(){
						$(this).text($(this).siblings("select").children("option[value=0]").text());
						$(this).fadeIn(100);
					});
				}
			}
		});
	});
	// select dropdown click action
	$('.selectholder .selectdropdown span').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var value = $(this).text();
		$(this).parent().siblings('select').val(value);
		$(this).parent().siblings('.desc').fadeOut(100, function(){
			$(this).text(value);
			$(this).fadeIn(100);
		});
	});
	
	// preload hover images
  preload([
    'http://supereightstudio.com/img/radio_tick.png',
    'http://supereightstudio.com/img/pulldown.png',
    'http://supereightstudio.com/img/pulldown_hover.png'
  ]);



	/*AM DATA CHART*/
	
		
			AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"path": "http://www.amcharts.com/lib/3/",
					"balloonDateFormat": "MMM, DD, YYYY",
					"categoryField": "date",
					"dataDateFormat": "YYYY-MM-DD",
					"plotAreaFillColors": "#FF8000",
					"categoryAxis": {
						"autoRotateCount": 0,
						"dateFormats": [
							{
								"period": "fff",
								"format": "JJ:NN:SS"
							},
							{
								"period": "ss",
								"format": "JJ:NN:SS"
							},
							{
								"period": "mm",
								"format": "JJ:NN"
							},
							{
								"period": "hh",
								"format": "JJ:NN"
							},
							{
								"period": "DD",
								"format": "MMM DD"
							},
							{
								"period": "WW",
								"format": "MMM DD"
							},
							{
								"period": "MM",
								"format": "MMM YYYY"
							},
							{
								"period": "YYYY",
								"format": "MMM YYYY"
							}
						],
						"minPeriod": "YYYY",
						"parseDates": true,
						"minHorizontalGap": 77,
						"tickLength": 1,
						"title": "Date"
					},
					"chartCursor": {
						"animationDuration": 0,
						"categoryBalloonDateFormat": "YYYY",
						"categoryBalloonEnabled": false,
						"graphBulletSize": 0,
						"valueLineAxis": "Not set"
					},
					"chartScrollbar": {},
					"trendLines": [],
					"graphs": [
						{
							"bullet": "round",
							"bulletBorderThickness": 0,
							"fillAlphas": 0.27,
							"fillColors": "#FF8000",
							"id": "AmGraph-1",
							"markerType": "square",
							"negativeBase": -2,
							"title": "Systolic",
							"type": "smoothedLine",
							"valueField": "systolic reading",
							"xAxis": "ValueAxis-1",
							"xField": "Not set",
							"yAxis": "ValueAxis-1",
							"yField": "Not set"
						},
						{
							"bullet": "square",
							"fillAlphas": 0.44,
							"fillColors": "#0000FF",
							"id": "AmGraph-2",
							"title": "Diastolic",
							"type": "smoothedLine",
							"valueField": "diastolic reading"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Reading"
						}
					],
					"allLabels": [],
					"balloon": {
						"cornerRadius": 3,
						"offsetY": 9
					},
					"export": {
						"enabled": true
					},
					"legend": {
						"useGraphSettings": true
					},
					"dataProvider": [
						{
							"date": "2001-03-04",
							"systolic reading": 8,
							"diastolic reading": 5
						},
						{
							"date": "2002-22-04",
							"systolic reading": 6,
							"diastolic reading": 7
						},
						{
							"date": "2003-10-02",
							"systolic reading": 2,
							"diastolic reading": 3
						},
						{
							"date": "2004-01-01",
							"systolic reading": 4,
							"diastolic reading": 3
						},
						{
							"date": "2005-01-01",
							"systolic reading": 2,
							"diastolic reading": 1
						},
						{
							"date": "2006-01-01",
							"systolic reading": 3,
							"diastolic reading": 2
						},
						{
							"date": "2007-01-01",
							"systolic reading": 4,
							"diastolic reading": 8
						}
					]
				}


	
			);
});//DOCUMENT READY
	




