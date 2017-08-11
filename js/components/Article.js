class Article {

	constructor(title,content,date,index){
		
		let _title = title;
		let _contents = content;
		let _date = date;
		let _id = index;

		this.makeHTML = function(){
			//append HTML string
			let htmlString = '';
			htmlString+= '<div data-id=' + _id + ' data-date=' + _date.replace(' ','-') + '>';
			htmlString+= '<h1>' + _title + '</h1>' + _contents + '</div>';
			$(htmlString).appendTo('.articles-container');
			//get element top offset
			let $dataId = $('.articles-container > div[data-id=' +_id + ']');
			let offset = $dataId.offset().top;
			$dataId.data("offset-top",offset);
			if(_id === "0"){$dataId.addClass('article-first')};
		}();

	}

}