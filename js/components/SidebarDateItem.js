class SidebarDateItem{

	constructor(index,date,offset){
		this.ID = index;
		this.date = date;
		this.offset = offset;

		this.makeHTML();
	}

	makeHTML(){
		console.log('sidebar items are formed!');
		let htmlString = '';
		htmlString += '<div class="sidebar-date-item" data-index=' + this.ID.toString() + '><h3>' + this.date + '</h3></div>';
		$(htmlString).appendTo('.desktop-date-sidebar');
		let $this = $('.sidebar-date-item[data-index=' + this.ID.toString() + ']');
		$this.css("top",this.offset + "px");
	}

	static show(index){
		$('.sidebar-date-item[data-index=' + index.toString() + ']').removeClass('hidden');
	}

	static hide(index){
		$('.sidebar-date-item[data-index=' + index.toString() + ']').addClass('hidden');

	}
}