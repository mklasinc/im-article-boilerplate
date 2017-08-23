class Article {

	constructor(title,content,date,dateShort,index){

		new TimelineItem(index,dateShort);
		ArticlesList.makeItem(title,index,dateShort);
		this.makeHTML(index,title,date,content);
	}

	makeHTML(_id,_title,_date,_contents){
		//append HTML string
		let htmlString = '';
		htmlString+= '<div class="article" data-id=' + _id + ' data-date=' + _date.replace(' ','-') + '>';
		htmlString+= '<h1>' + _title + '</h1>' + _contents + '</div>';
		$(htmlString).appendTo('.articles-container');
		//get element top offset
		let $dataId = $('.article[data-id=' +_id + ']');
		let offset = $dataId.offset().top;
		$dataId.data("offset-top",offset);
		if(_id === "0"){$dataId.addClass('article-first')};

		//new SidebarDateItem(_id,_date,offset);
		
	}
	//scroll to the active article
	static scrollToActive(activeIndex){
		console.log('scrolling to active article!');
		let offsetTop = $('.article[data-id=' + activeIndex + ']').offset().top;
		$('body').animate({ scrollTop: offsetTop - _scrollToBuffer }, 300);
	}

	static updateTopOffset(index){
		let newOffset = $('.article[data-id="' + index + '"]').offset().top;
		$('.article[data-id="' + index + '"]').data('offset-top',newOffset);
	}	

}