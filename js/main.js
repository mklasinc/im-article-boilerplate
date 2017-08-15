//make an article instance for each article in the array
_articles.forEach(function(d,i){
	new Article(d.title,d.content,d.date,d.dateShort,i.toString());
	
});

//make a date display instance, set its default value to the date value of the first article
new DateDisplay(_articles[0].date);

let _listHeight;
let _listActive = false;

//global scroll variables
//set scroll even trigger limits (prevLimit / nextLimit) to control the increase/decrease of the scroll counter
//initial prevLimit is 0 (top of the page), nextLimit is calculated later based on the first article's top offset 
const _scrollCounterMax = _articles.length;
const _offsetBuffer = 100; //used in determining scroll limits
let _scrollCounter = 0;
let _scrollPrevLimit = 0;
let _scrollNextLimit;

//scroll functions
//scroll counter++
function counterUpOne(){
			_scrollPrevLimit = _scrollNextLimit;
			_scrollCounter++;
			_scrollNextLimit = _scrollCounter === _scrollCounterMax ? 100000 : $('.article[data-id="' + _scrollCounter + '"]').offset().top;
};

//scroll counter--
function counterDownOne(){
	_scrollNextLimit = _scrollPrevLimit;
		_scrollCounter--;
		_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.article[data-id="' + _scrollCounter + '"]').offset().top;
};

//scroll event handler, calls for updates to the date display - and the timeline slider (on ipad & bigger)
function handleScroll(scrollTop){
	if(scrollTop > _scrollNextLimit){
		DateDisplay.update(_scrollCounter); //updates active date
		counterUpOne(); // increase the counter
	};
	if(scrollTop < _scrollPrevLimit){
		counterDownOne(); //first decrease the counter
		DateDisplay.update(_scrollCounter); //update date
	};
};

//calculate scroll limits, has to be called from document.ready to ensure all html elements are appended to the page, which allows for the retrieval of offset values
function setScrollLimits(){
	_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.article[data-id="' + _scrollCounter + '"]').offset().top;
	_scrollNextLimit = $('.article[data-id="' + _scrollCounter + '"]').offset().top;
}
//update articles' offset attributes when the window is resized
function updateArticleOffset(){
	for(var i = 0; i < _articles.length; i++){
		let newOffset = $('.article[data-id="' + i + '"]').offset().top;
		$('.article[data-id="' + i + '"]').data('offset-top',newOffset);
	}
}

function toggleArticlesList(){
	console.log('you clicked me');
	if(_listActive){
		ArticlesList.toggle();
		console.log('toggle the list!');
	}
}


$(document).ready(function(){
	setScrollLimits(); //calculate initial scroll limits
	//make a new article list
	_listHeight = $('.articles-list-container > ul').outerHeight(true);
	//ArticlesList.setHeight();
	$(window).on('scroll',function(){handleScroll($(this).scrollTop() + _offsetBuffer)}); // check current scrollTop against scroll limits
	$(window).on('resize', function(e) {updateArticleOffset()}, 250); // update offset values on window resize
});