class Article {

	constructor(title,content,date,dateShort,index){

		new TimelineItem(index,dateShort);
		//ArticlesList.makeItem(title,index,dateShort);
		new ArticlesListItem(title,index,dateShort);
		this.makeHTML(index,title,date,content);
	}

	makeHTML(_id,_title,_date,_contents){
		//append HTML string
		let htmlString = '';
		htmlString+= '<div class="article" data-active="false" data-id=' + _id + ' data-date=' + _date.replace(' ','-') + '>';
		htmlString+= '<h1 class="article-title">' + _title + '</h1>' + _contents + '</div>';
		$(htmlString).appendTo('.articles-container');
		//get element top offset
		let $dataId = $('.article[data-id=' +_id + ']');
		let offset = $dataId.offset().top;
		$dataId.data("offset-top",offset);
		//if(_id === "0"){$dataId.addClass('article-first')};

		//new SidebarDateItem(_id,_date,offset);
		
	}
	//scroll to the active article
	static scrollToActive(activeIndex){
		console.log('scrolling to active article!');
		let activeArticle = '.article[data-id=' + activeIndex + ']';
		let offsetTop = $(activeArticle).offset().top;
		let scrollOffset = offsetTop - _scrollToBuffer;
		//$('body').animate({ scrollTop: (offsetTop - _scrollToBuffer) },400);
		$('.articles-container').velocity("scroll", { duration: 500, offset: scrollOffset})
			.velocity({ opacity: 1 });
	}

	static updateTopOffset(index){
		let newOffset = $('.article[data-id="' + index + '"]').offset().top;
		$('.article[data-id="' + index + '"]').data('offset-top',newOffset);
	}	

	static toggleActive(nowActiveId,prevActiveId){

		let $nowActive = $('.article[data-id="' + nowActiveId + '"]')
		let $prevActive = (prevActiveId >= 0 && prevActiveId < _articles.length) ? $('.article[data-id="' + prevActiveId + '"]') : undefined;
		$nowActive.attr('data-active','true');
		if($prevActive){$prevActive.attr('data-active','false');};

		nowActiveId > prevActiveId ? SidebarDateItem.hide(nowActiveId) : SidebarDateItem.show(nowActiveId);
		DateDisplay.update(nowActiveId);
		TimelineItem.makeActive(nowActiveId,prevActiveId);
		PersonalizedRemark.unpin(prevActiveId);
		PersonalizedRemark.pin(nowActiveId);

	}

}