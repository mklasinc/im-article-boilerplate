// lorem ipsum paragraph
const loremIpsum = '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla et odio sollicitudin, sed accumsan magna consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec porta metus. Aenean vehicula nunc id efficitur eleifend. Praesent sapien lorem, eleifend id ultricies at, tincidunt sit amet ex. Pellentesque eu iaculis velit. Mauris placerat scelerisque ligula ac sodales. Vestibulum vestibulum nunc ligula, sit amet euismod elit sagittis ac.</p>';

//a collection of article objects used to construct dummy articles (see Article.js)
// each article has a title, html content, date (for date display), and dateShort (for expandable list of articles)
const _articles = [
	{
		title:'NYUAD OPENS ITS DOORS',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'May 2010',
		dateShort:'May 2010' 
	},
	{
		title:'STUDENTS GET NEW HOME',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum).concat(loremIpsum),
		date:'September 2014',
		dateShort:'Sept 2014'
	},
	{
		title:'THE FALCONS FLY TO ROME',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'November 2014',
		dateShort:'Nov 2014'
	},
	{
		title:'ANDY HAMILTON GIVES SPEECH',
		content:loremIpsum.concat(loremIpsum),
		date:'March 2016',
		dateShort:'Mar 2016'
	},
	{
		title:'ARTS CENTER OPENS',
		content:loremIpsum.concat(loremIpsum),
		date:'September 2017',
		dateShort:'Sept 2017'
	},
	{
		title:'NYUAD PARTNERS WITH MASDAR INSTITUTE',
		content:loremIpsum.concat(loremIpsum),
		date:'October 2018',
		dateShort:'Oct 2010'
	},
	{
		title:'THE GAZELLE CELEBRETAES 7TH ANNIVERSARY',
		content:loremIpsum.concat(loremIpsum),
		date:'December 2018',
		dateShort:'Dec 2010'
	}				
];
//make an article instance and a timeline dot instance for each article in the array
_articles.forEach(function(d,i){
	new Article(d.title,d.content,d.date,d.dateShort,i.toString());
	new TimelineItem(i);
});

//make date display, set it's default value to the date value of the first article
//save date display to a variable that is later used to update the date display
const _myDate = new DateDisplay(_articles[0].date);

//global scroll variables
const _scrollCounterMax = _articles.length;
let _scrollCounter = 0;
//set scroll limits to increase/decrease the scroll counter
//initial prevLimit is 0 (top of the page), nextLimit is calculated later based on the first article y offset
let _scrollPrevLimit = 0;
let _scrollNextLimit;

//scroll functions
//scroll counter++
function counterUpOne(){
		_scrollPrevLimit = _scrollNextLimit;
		if (_scrollCounter < _scrollCounterMax){
			_scrollCounter++;
			_scrollNextLimit = _scrollCounter === _scrollCounterMax ? 100000 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
		}
}

//scroll counter--
function counterDownOne(){
	_scrollNextLimit = _scrollPrevLimit;
	if(_scrollCounter !== 0){
		_scrollCounter--;
		_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
	}
}

//scroll event handler, calls for updates to the date display and the timeline sider (on ipad & bigger)
function handleScroll(scrollTop){
	if(scrollTop > _scrollNextLimit){
		DateDisplay.update(_scrollCounter);
		TimelineItem.makeActive(_scrollCounter);
		counterUpOne();
	};
	if(scrollTop < _scrollPrevLimit){
		counterDownOne();
		DateDisplay.update(_scrollCounter);
		TimelineItem.makeActive(_scrollCounter);
	};
};
//calculate scroll limits, has to be called from document.ready to ensure all html elements are appended to the page, which allows for the retrieval of offset values
function setupScroll(){
	_scrollPrevLimit = _scrollCounter === 0 ? 0 : $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
	_scrollNextLimit = $('.articles-container > div[data-id="' + _scrollCounter + '"]').offset().top;
}
//update articles' offset attributes when the window is resized
function updateArticleOffset(){
	for(var i = 0; i < _articles.length; i++){
		let newOffset = $('.articles-container > div[data-id="' + i + '"]').offset().top;
		$('.articles-container > div[data-id="' + i + '"]').data('offset-top',newOffset);
	}
}


$(document).ready(function(){
	setupScroll();
	$(window).on('scroll',function(){handleScroll($(this).scrollTop() + 100)});
	$(window).on('resize', function(e) {updateArticleOffset()}, 250);
});