class PersonalizedRemark{
	constructor(dummyText, articleIndex){
		this.makeHTML(dummyText,articleIndex);
	}

	makeHTML(text,index){
		let htmlString = '';
		htmlString += '<div class="personalized-remark" data-id=' + index.toString() +'>' + text + '</div>';

		let offsetBuffer = 100;
		let offsetTop = $('.article[data-id=' + index + ']').offset().top;
		//console.log('the remark should be at: ' + offsetTop + ' px height-wise');
		$(htmlString).appendTo('.aux-info-container');
		let $this = $('.personalized-remark[data-id=' + index + ']')
		$this.addClass('hidden');
		
	}

	/*static updateTopOffset(index){
		let newOffset = $('.article[data-id="' + index + '"]').offset().top;
		let $this = $('.personalized-remark[data-id=' + index + ']');
		$this.css('top', offsetTop + 'px');
	}*/	

	static pin(index){
		//console.log('we are showing personalized remark associated with article index no: ' + index);
		let $this = $('.personalized-remark[data-id=' + index + ']');
		if($this){
			$this.removeClass('hidden').velocity('fadeIn',{ duration: 500 });
		}
	}

	static unpin(index){
		let $this = $('.personalized-remark[data-id=' + index + ']');
		if($this){
			$this.velocity('fadeOut',{ duration: 300 });
		}
	}
}