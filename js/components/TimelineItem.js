class TimelineItem{

	constructor(index){
		this.ID = index;
		this.make();
	}

	make(){
		let myIndex = this.ID;
		let htmlString = '';
		let logIt = this.logIt;
		htmlString += '<div class="tl-nav-item" style="top:' + (this.ID*50) + 'px" data-id=' + myIndex + '>';
		htmlString += '<div class="tl-nav-item-dot"></div></div>';

		$(htmlString).appendTo('.tl-nav-slider');
		let $this = $('.tl-nav-item[data-id=' + myIndex + ']');
		$this.hover(
			function(){$(this.children).addClass('js-tl-hover')},
			function(){$( this.children).removeClass('js-tl-hover')}
  		);

  		$this.on('click',function(){
  			$(this).siblings().children().removeClass('js-tl-active');
  			$(this.children).addClass('js-tl-active');
  			Article.scrollToActive(myIndex);
  		});	
	}

	static makeActive(articleIndex){
		let $this = $('.tl-nav-item[data-id=' + articleIndex + ']');
		$this.siblings().children().removeClass('js-tl-active');
  		$this.children().addClass('js-tl-active');
	}

}