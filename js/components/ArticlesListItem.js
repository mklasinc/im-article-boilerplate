class ArticlesListItem{
	constructor(title,id,dateShort){
		
		this.make(title,id,dateShort);
	}

	make(title,id,dateShort){
		let htmlString = '';
		htmlString += '<li class="articles-list-item" data-item-id=' + id + ' ><span class="list-item-title">' + title + '</span>';
		htmlString += '<span class="list-item-date">' + dateShort + '</span></li>';
		$(htmlString).appendTo('.articles-list-container > ul');
		//add event listener
		$('.articles-list-item[data-item-id=' + id + ']').on('click',function(){
			TimelineItem.makeActive(id);
			ArticlesList.toggle(id);
			Article.scrollToActive(id);
		});
	}

}