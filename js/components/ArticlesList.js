class ArticlesList{
	constructor(){
		
	}

	static makeItem(title,id,dateShort){

		let htmlString = '';
		htmlString += '<li class="articles-list-item" data-item-id=' + id + ' ><span class="article-item-title">' + title + '</span>';
		htmlString += '<span class="article-item-date">' + dateShort + '</span></li>';
		$(htmlString).appendTo('.articles-list-container > ul');
		//add event listener
		$('.articles-list-item[data-item-id=' + id + ']').on('click',function(){
			//console.log('you clicked on the item!');
			TimelineItem.makeActive(id);
			Article.scrollToActive(id);
			ArticlesList.toggle();
		});
	}

	static toggle(){
		let listHeight = $('.articles-list-container > ul').outerHeight >  $(window).height()*0.7 ? $('.articles-list-container > ul').outerHeight : $(window).height()*0.7;  
		let toggleHeight = $('.articles-list-container').height() > 0 ? 0 : listHeight;
		_listActive = _listActive === false ? true : false;
		$('.articles-list-container').animate({height: toggleHeight + "px"},100);
		$('.expand-icon').toggleClass('js-rotate',100);
		if(_listActive){
			$('body').css("overflow","hidden");

		}else{
			$('body').css("overflow","auto");
		}
		
		//console.log('list is ' + _listActive);

		

	}
}