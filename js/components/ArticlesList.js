class ArticlesList{
	constructor(){
		
	}

	static toggle(id){
		let listHeight = $('.articles-list-container > ul').outerHeight >  $(window).height()*0.7 ? $('.articles-list-container > ul').outerHeight : $(window).height()*0.7;  
		let toggleHeight = $('.articles-list-container').height() > 0 ? 0 : listHeight - 30;
		
		_listActive = _listActive === false ? true : false;
		$('.articles-list-container').velocity({height: toggleHeight + "px"},{duration:100});
		$('.expand-icon').toggleClass('js-rotate',50);
		
		let activeId = $('.article[data-active="true"]').data('id');

		if(_listActive){
			$('body').css("overflow","hidden");
			
			$('.articles-list-item[data-item-id=' + activeId + ']').addClass('js-list-item-active');

		}else{
			$('body').css("overflow","auto");
			$('.articles-list-item[data-item-id=' + activeId + ']').removeClass('js-list-item-active');
		}
		//console.log('list is ' + _listActive);
	}

	static handleClick(){
		$('.articles-list-item').on('click',function(e){
			console.log(e.target.getAttribute('data-item-id'));
			//console.log('you clicked on the item!');
			/*TimelineItem.makeActive(id);
			Article.scrollToActive(id);
			ArticlesList.toggle();*/
		});
	}
}