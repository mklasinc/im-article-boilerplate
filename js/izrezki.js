function counterUpOne(){
		_scrollPrevLimit = _scrollNextLimit;
		if (_scrollCounter < _scrollCounterMax){
			_scrollCounter++;
			_scrollNextLimit = _scrollCounter === _scrollCounterMax ? 100000 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
		}
}

function counterDownOne(){
	_scrollNextLimit = _scrollPrevLimit;
	if(_scrollCounter === _scrollCounterMax){
		_scrollCounter--;
	}

	if(_scrollCounter !== 0){
		_scrollCounter--;
		_scrollPrevLimit = $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
	}else{
		_scrollPrevLimit = 0;
	}
}

function updateDateDisplay(counter){
		let activeDate = $('.articles-container > div[data-id="' + counter + '"]').data('date');
		$('.date-container > h2').html(activeDate);
}

function handleScroll(scrollTop){

	if(scrollTop > _scrollNextLimit){
		updateDateDisplay(_scrollCounter);
		counterUpOne();
	};
	if(scrollTop < _scrollPrevLimit){
		counterDownOne();
		updateDateDisplay(_scrollCounter);
	};

};