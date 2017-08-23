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
			function(){$(this).find('.tl-nav-item-dot').addClass('js-tl-hover')}, //on hover
			function(){$(this).find('.tl-nav-item-dot').removeClass('js-tl-hover')}
  		);

  		$this.on('click',function(){
  			Article.scrollToActive(itemIndex);
  		});	
	}

	static makeActive(articleIndex){
		let $this = $('.tl-nav-item[data-id=' + articleIndex + ']');
		let $dot = $('.tl-nav-item-dot[data-id=' + articleIndex + ']');
		$this.siblings().children('.tl-dot-wrapper').find('.tl-nav-item-dot').removeClass('js-tl-active');
  		$dot.addClass('js-tl-active');
	}

}