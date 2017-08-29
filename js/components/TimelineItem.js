class TimelineItem{

	constructor(index,date){
		this.makeHTML(index,date);
	}

	makeHTML(itemIndex,itemDate){
		//append HTML string
		let htmlString = '';
		htmlString += '<div class="tl-nav-item" style="top:' + (itemIndex*50) + 'px" data-id=' + itemIndex + '>';
		htmlString += '<div class="tl-dot-wrapper"><div class="tl-nav-item-dot" data-id=' + itemIndex + '></div></div>';
		htmlString += '<div class="tl-date-wrapper"><div class="tl-nav-item-date">' + itemDate + '</div></div></div>';
		$(htmlString).appendTo('.tl-nav-slider');
		//make a var used in declaring hover and click event handlers
		let $this = $('.tl-nav-item[data-id=' + itemIndex + ']');
		
		$this.hover(
			function(){$(this).find('.tl-nav-item-dot').addClass('js-tl-hover')},
			function(){$(this).find('.tl-nav-item-dot').removeClass('js-tl-hover')}
  		);

		/*$this.hover(
			function(){$(this).find('.tl-nav-item-dot').velocity({
				borderWidth: 3,
				borderColor: "#95989A",
    			backgroundColor: "#FFFFFF"
			},{ duration: 30 })}, //on hover
			function(){$(this).find('.tl-nav-item-dot').velocity("reverse")}
  		);*/

  		$this.on('click',function(){
  			Article.scrollToActive(itemIndex);
  		});	
	}

	static makeActive(articleIndex,prevArticleIndex){
		//console.log('making an article active!');
		let $this = $('.tl-nav-item[data-id=' + articleIndex + ']');
		let $dot = $('.tl-nav-item-dot[data-id=' + articleIndex + ']');
		let $prevDot = $('.tl-nav-item-dot[data-id=' + prevArticleIndex + ']');
		
		//console.log(prevArticleIndex);
		$prevDot.removeClass('js-tl-active');
		$dot.addClass('js-tl-active');

		/*$this.siblings().children('.tl-dot-wrapper').find('.tl-nav-item-dot').css({
			"border": "0px",
    		"background-color": "#95989A"
		});
		$this.siblings().children('.tl-dot-wrapper').find('.tl-nav-item-dot').velocity({
			backgroundColor:"#95989A",
			borderWidth: 0
		});*/
  		/*$dot.velocity({
  			backgroundColor:"#57068c",
  			borderWidth: 3,
			borderColor: "#57068c",
  		}, {duration: 50})*/
	}

}