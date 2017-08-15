class DateDisplay{

	constructor(defaultDate){

		if(typeof defaultDate !== 'string'){ throw err};

		this.makeHTML(defaultDate); 

	}
	// append HTML string, set up event handlers
	makeHTML(date){
		let htmlString = '';
		htmlString += '<h2 id="date-display"' + 'data-active-date=' + date.replace(' ','-') + '>' + date + '</h2><img class="expand-icon" src="img/pointer.png" alt="pointer" />';
		$(htmlString).appendTo('.date-container');
		$('.date-container').on('click',function(){ArticlesList.toggle()}); //on click toggle the expandable article list

	}
	//update date display
	static update(newIndex){
		let newDate = $('.article[data-id="' + newIndex + '"]').data('date');
		let $id = $('#date-display');
		$id.data('active-date',newDate);
		$id.html(newDate.replace('-',' '));

		TimelineItem.makeActive(newIndex);
	}
}