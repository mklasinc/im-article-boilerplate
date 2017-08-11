// lorem ipsum paragraph
const loremIpsum = '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla et odio sollicitudin, sed accumsan magna consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec porta metus. Aenean vehicula nunc id efficitur eleifend. Praesent sapien lorem, eleifend id ultricies at, tincidunt sit amet ex. Pellentesque eu iaculis velit. Mauris placerat scelerisque ligula ac sodales. Vestibulum vestibulum nunc ligula, sit amet euismod elit sagittis ac.</p>';

//make dummy articles
const articles = [
	{
		title:'NYUAD GETS NEW PRESIDENT',
		content:loremIpsum.concat(loremIpsum),
		date:'May 2013'
	},
	{
		title:'NYUAD GETS NEW PRESIDENT',
		content:loremIpsum.concat(loremIpsum),
		date:'March 2015'
	},
	{
		title:'NYUAD GETS NEW PRESIDENT',
		content:loremIpsum.concat(loremIpsum),
		date:'May 2017'
	}	
];

articles.forEach(function(d,i){
	new Article(d.title,d.content,d.date,i.toString());
});

//make date display
const myDate = new DateDisplay("May 2010");



//scroll variables
let _scrollCounter = 0;
let _scrollPrevLimit = 0;
let _scrollNextLimit;
const _scrollCounterMax = articles.length;

//scroll functions
function counterUpOne(){
		_scrollPrevLimit = _scrollNextLimit;
		if (_scrollCounter < _scrollCounterMax){
			_scrollCounter++;
			_scrollNextLimit = _scrollCounter === _scrollCounterMax ? 100000 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
		}
}

function counterDownOne(){
	_scrollNextLimit = _scrollPrevLimit;
	if(_scrollCounter !== 0){
		_scrollCounter--;
		_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
	}
}

function updateDateDisplay(counter){
		let activeDate = $('.articles-container > div[data-id="' + counter + '"]').data('date');
		myDate.update(activeDate);
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

function setupScroll(){
	_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
	_scrollNextLimit = $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
}


$(document).ready(function(){
	setupScroll();

	$(window).on('scroll',function(){
		handleScroll($(this).scrollTop());
	});
	//myArticle.makeHTML();
});