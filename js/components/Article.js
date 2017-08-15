class Article {

	constructor(title,content,date,dateShort,index){
		
		let _title = title;
		let _contents = content;
		let _date = date;
		let _dateShort = dateShort;
		let _id = index;

		new TimelineItem(_id);
		ArticlesList.makeItem(_title,_id,_dateShort)

		this.makeHTML = function(){
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
			
		}();


	}
	//scroll to the active article
	static scrollToActive(activeIndex){
		let offsetTop = $('.article[data-id=' + activeIndex + ']').offset().top;
		$('body').animate({ scrollTop: offsetTop - 80 }, 300);
	}

}