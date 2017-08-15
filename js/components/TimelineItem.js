class TimelineItem{

	constructor(index){
		this.makeHTML(index);
	}

	makeHTML(itemIndex){
		//append HTML string
		let htmlString = '';
		htmlString += '<div class="tl-nav-item" style="top:' + (itemIndex*50) + 'px" data-id=' + itemIndex + '>';
		htmlString += '<div class="tl-nav-item-dot"></div></div>';
		$(htmlString).appendTo('.tl-nav-slider');
		//make a var used in declaring hover and click event handlers
		let $this = $('.tl-nav-item[data-id=' + itemIndex + ']');
		$this.hover(
			function(){$(this.children).addClass('js-tl-hover')}, //on hover
			function(){$(this.children).removeClass('js-tl-hover')}
  		);

  		$this.on('click',function(){
  			$(this).siblings().children().removeClass('js-tl-active');
  			$(this.children).addClass('js-tl-active');
  			Article.scrollToActive(itemIndex);
  		});	
	}

	static makeActive(articleIndex){
		let $this = $('.tl-nav-item[data-id=' + articleIndex + ']');
		$this.siblings().children().removeClass('js-tl-active');
  		$this.children().addClass('js-tl-active');
	}

}