class Article {

	constructor(title,content,date,dateShort,index){
		
		let _title = title;
		let _contents = content;
		let _date = date;
		let _dateShort = dateShort;
		let _id = index;

		this.makeHTML = function(){
			//append HTML string
			let htmlString = '';
			htmlString+= '<div class="article" data-id=' + _id + ' data-date=' + _date.replace(' ','-') + '>';
			htmlString+= '<h1>' + _title + '</h1>' + _contents + '</div>';
			$(htmlString).appendTo('.articles-container');
			//get element top offset
			let $dataId = $('.articles-container > div[data-id=' +_id + ']');
			let offset = $dataId.offset().top;
			$dataId.data("offset-top",offset);
			if(_id === "0"){$dataId.addClass('article-first')};
			
		}();
		// make a list of articles - should be moved to Article List
		this.makeArticleList = function(){

			let htmlString = '';
			htmlString += '<li class="article-item" data-item-id=' + _id + ' ><span class="article-item-title">' + _title + '</span>';
			htmlString += '<span class="article-item-date">' + _dateShort + '</span></li>';
			$(htmlString).appendTo('.articles-list-container > ul');
			//add event listener
			$('.articles-list-container > ul').children('li[data-item-id=' + _id + ']').on('click',function(){
				console.log('you clicked on the item!');
				TimelineItem.makeActive(_id);
				Article.scrollToActive(_id);
				ArticlesList.collapse();
			});
		}();

	}
	//scroll to the active article
	static scrollToActive(activeIndex){
		let offsetTop = $('.articles-container > div[data-id=' + activeIndex + ']').offset().top;
		$('body').animate({ scrollTop: offsetTop - 80 }, 300);
	}



}