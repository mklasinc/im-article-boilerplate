class DateDisplay{

	constructor(date){

		if(typeof date !== 'string'){ throw err};

		this.date = date;

		this.makeHTML(); 

	}

	makeHTML(){
		let htmlString = '';
		htmlString += '<h2 id="date-display"' + 'data-active-date=' + this.date.replace(' ','-') + '>' + this.date + '</h2>';
		$(htmlString).appendTo('.date-container');
	}

	update(newDate){
		if(typeof newDate !== 'string'){ throw err};
		
		let $id = $('#date-display');
		$id.data('active-date',newDate);
		$id.html(newDate.replace('-',' '));
	}
}