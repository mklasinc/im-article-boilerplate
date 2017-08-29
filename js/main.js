//make an article instance for each article in the array
_articles.forEach(function(d,i){
	new Article(d.title,d.content,d.date,d.dateShort,i.toString());
	
});
//ArticlesList.handleClick();
//make a date display instance, set its default value to the date value of the first article
new DateDisplay(_articles[0].date);
new PersonalizedRemark(loremPersonalized,1);


let _listActive = false;
//global scroll variables
//set scroll even trigger limits (prevLimit / nextLimit) to control the increase/decrease of the scroll counter
//initial prevLimit is 0 (top of the page), nextLimit is calculated later based on the first article's top offset 
const _scrollCounterMax = _articles.length;
const _scrollLimitBuffer = 200;
const _scrollToBuffer = 60; //used in determining scroll limits
let _scrollCounter = 0;
let _scrollPrevLimit = 0;
let _scrollNextLimit;
let _lastArticleBuffer = 0;

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
function handleWindowScroll(scrollTop){
	if(scrollTop > _scrollNextLimit){
		Article.toggleActive(_scrollCounter,_scrollCounter-1);
		counterUpOne(); // increase the counter
	};
	if(scrollTop < _scrollPrevLimit){
		counterDownOne(); //first decrease the counter
		Article.toggleActive(_scrollCounter,_scrollCounter+1);
	};
};

//calculate scroll limits, has to be called from document.ready to ensure all html elements are appended to the page, which allows for the retrieval of offset values
function setScrollLimits(){
	let $lastArticle = $('.article[data-id="' + (_articles.length-1) + '"]');
	_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.article[data-id="' + _scrollCounter + '"]').offset().top;
	_scrollNextLimit = $('.article[data-id="' + _scrollCounter + '"]').offset().top;
	_lastArticleBuffer = $(window).height() - $lastArticle.outerHeight(true) - 50;
	
	let bufferDiv = '<div class="articles-container-after" style="height:' + _lastArticleBuffer + 'px; width: 100%;"></div>';
	$('.articles-container').append(bufferDiv);
	console.log('scroll limits set!');
}
//update articles' offset attributes when the window is resized
/*function updateArticleOffset(){
	for(var i = 0; i < _articles.length; i++){
		let newOffset = $('.article[data-id="' + i + '"]').offset().top;
		$('.article[data-id="' + i + '"]').data('offset-top',newOffset);
	}
}*/

function toggleArticlesList(){
	console.log('you clicked me');
	if(_listActive){
		ArticlesList.toggle();
		console.log('toggle the list!');
	}
}

function initialSetup(){
	console.log('set up opening paragraph!');
	//console.log($('body').offset().top);
	$('body').addClass('js-no-overflow'); // prevent body overflow
	$('.date-container').addClass('hidden'); //hide date container
	$('body').scrollTop(0);
	$('.opening-paragraph-container').on('click',function(){scrollToDashboard()}); //on click scroll to dashboard
};//initialSetup();

function scrollToDashboard(){
	console.log('scrolling to dashboard!');
	$('body').removeClass('js-no-overflow'); //enable scrolling
	$('body').velocity( //scroll to the body container
		{scrollTop: $(".main").offset().top}, 1000, function(){ 
			//console.log('scroll done!');
			dashboardSetup();
	});
}

function dashboardSetup(){
	console.log('begin setting up dashboard!');
	$('.date-container').fadeIn(800).removeClass('hidden'); //fade in date container after animation is done
	$(window).width() > 550 ? $('.timeline-container').fadeIn(800).removeClass('hidden') : false; // fade in timeline on ipad/desktop
	$('.opening-paragraph-container').addClass('hidden'); //hide the opening paragraph container

	setScrollLimits(); //calculate initial scroll limits
	$(window).on('scroll',function(){handleWindowScroll($(this).scrollTop() + _scrollLimitBuffer)}); // check current scrollTop against scroll limits
	$(window).on('resize', function(){
		//updateArticleOffset()
		for(var i = 0; i < _articles.length; i++){
			Article.updateTopOffset(i);
			//PersonalizedRemark.updateTopOffset(i);
			console.log($('.article[data-id="' + 2 + '"]').offset().top);
		}
	}, 250); // update offset values on window resize
	console.log('finished setting up dashboard!');
}

$(document).ready(function(){
	//$(this).scrollTop(0);
	//initialSetup();
	dashboardSetup();
		$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});
});