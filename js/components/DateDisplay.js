class DateDisplay{

	constructor(date){

		if(typeof date !== 'string'){ throw err};

		this.date = date;

		this.makeHTML(); 

	}

	makeHTML(){
		let htmlString = '';
		htmlString += '<h2 id="date-display"' + 'data-active-date=' + this.date.replace(' ','-') + '>' + this.date + '</h2><img class="expand-icon" src="img/pointer.png" alt="pointer" />';
		$(htmlString).appendTo('.date-container');
		$('#date-display').on('click',function(){ArticlesList.collapse()});
	}

	static update(index){
		let newDate = $('.articles-container > div[data-id="' + index + '"]').data('date');
		let $id = $('#date-display');
		$id.data('active-date',newDate);
		$id.html(newDate.replace('-',' '));
	}
}