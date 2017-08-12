class ArticlesList{
	constructor(){

	}

	static collapse(){
		$('.articles-list-container').toggleClass('js-list-expand',300);
		$('.expand-icon').toggleClass('js-rotate',300);
	}
}