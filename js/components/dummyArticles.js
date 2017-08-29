// lorem ipsum paragraph
const loremIpsum = '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla et odio sollicitudin, sed accumsan magna consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec porta metus. Aenean vehicula nunc id efficitur eleifend. Praesent sapien lorem, eleifend id ultricies at, tincidunt sit amet ex. Pellentesque eu iaculis velit. Mauris placerat scelerisque ligula ac sodales. Vestibulum vestibulum nunc ligula, sit amet euismod elit sagittis ac.</p>';
const loremImage1 ='<div class="image-container"><img src="img/badke.jpg" /></div>'; 
const loremImageSpecial = '<figure class="image-container"><img src="img/campus1.jpg" /><figcaption class="image-caption">PHOTO CREDIT</figcaption></div>';
const loremImage2 ='<div class="image-container"><img src="img/gazelle.jpg" /></div>'; 
const loremImage3 ='<div class="image-container"><img src="img/performance.jpg" /></div>'; 
const loremVideo = '<div class="video-wrapper"><iframe width="100%" min-height="200px" src="https://www.youtube.com/embed?v=yL4ojms-sZQ"></iframe></div>';
const loremPersonalized = 'And that\'s when you come on board. Do you still remember Marhaba week?';
//a collection of article objects used to construct dummy articles (see Article.js)
// each article has a title, html content, date (for date display), and dateShort (for expandable list of articles)
const _articles = [
	{
		title:'NYUAD Opens its Doors',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum).concat(loremImageSpecial),
		date:'May 2010',
		dateShort:'May \'10' 
	},
	{
		title:'Students Get New Home',
		content:loremIpsum.concat(loremImage2).concat(loremIpsum),
		date:'September 2014',
		dateShort:'Sept \'14'
	},
	{
		title:'The Falcons Fly to Rome',
		content:loremIpsum.concat(loremIpsum).concat(loremVideo),
		date:'November 2014',
		dateShort:'Nov \'14'
	},
	{
		title:'Andy Hamilton Gives Speech',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'March 2016',
		dateShort:'Mar \'16'
	},
	{
		title:'Arts Center Opens',
		content:loremIpsum.concat(loremImage3).concat(loremIpsum),
		date:'September 2017',
		dateShort:'Sept \'17'
	},
	{
		title:'NYUAD Partners with Masdar Institute',
		content:loremIpsum.concat(loremIpsum),
		date:'October 2018',
		dateShort:'Oct \'18'
	},
	{
		title:'The Gazelle Celebrates 7th Anniversary',
		content:loremIpsum.concat(loremIpsum),
		date:'December 2018',
		dateShort:'Dec \'18'
	},
	{
		title:'NYUAD Wins Prestigious Awards',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'April 2019',
		dateShort:'Apr \'19' 
	},
	{
		title:'Rhodes Scholars Announced',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'May 2020',
		dateShort:'May \'20' 
	},
		{
		title:'Real Madrid Squad Trains at NYUAD',
		content:loremIpsum.concat(loremIpsum),
		date:'June 2020',
		dateShort:'Jun \'20'
	},
	{
		title:'The Gazelle Celebrates 10th Anniversary',
		content:loremIpsum.concat(loremIpsum),
		date:'December 2020',
		dateShort:'Dec \'20'
	}
];
