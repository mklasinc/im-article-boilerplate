// lorem ipsum paragraph
const loremIpsum = '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere nulla et odio sollicitudin, sed accumsan magna consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec porta metus. Aenean vehicula nunc id efficitur eleifend. Praesent sapien lorem, eleifend id ultricies at, tincidunt sit amet ex. Pellentesque eu iaculis velit. Mauris placerat scelerisque ligula ac sodales. Vestibulum vestibulum nunc ligula, sit amet euismod elit sagittis ac.</p>';
const loremImage1 ='<div class="image-container"><img src="img/badke.jpg" /></div>'; 
const loremImage2 ='<div class="image-container"><img src="img/campus.jpg" /></div>'; 
const loremImage3 ='<div class="image-container"><img src="img/performance.jpg" /></div>'; 
const loremVideo = '<div class="video-wrapper"><iframe width="100%" min-height="200px" src="https://www.youtube.com/embed?v=yL4ojms-sZQ"></iframe></div>';
//a collection of article objects used to construct dummy articles (see Article.js)
// each article has a title, html content, date (for date display), and dateShort (for expandable list of articles)
const _articles = [
	{
		title:'NYUAD OPENS ITS DOORS',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'May 2010',
		dateShort:'May \'10' 
	},
	{
		title:'STUDENTS GET NEW HOME',
		content:loremIpsum.concat(loremImage2).concat(loremIpsum),
		date:'September 2014',
		dateShort:'Sept \'14'
	},
	{
		title:'THE FALCONS FLY TO ROME',
		content:loremIpsum.concat(loremIpsum).concat(loremVideo),
		date:'November 2014',
		dateShort:'Nov \'14'
	},
	{
		title:'ANDY HAMILTON GIVES SPEECH',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'March 2016',
		dateShort:'Mar \'16'
	},
	{
		title:'ARTS CENTER OPENS',
		content:loremIpsum.concat(loremImage3).concat(loremIpsum),
		date:'September 2017',
		dateShort:'Sept \'16'
	},
	{
		title:'NYUAD PARTNERS WITH MASDAR INSTITUTE',
		content:loremIpsum.concat(loremIpsum),
		date:'October 2018',
		dateShort:'Oct \'18'
	},
	{
		title:'THE GAZELLE CELEBRETAES 7TH ANNIVERSARY',
		content:loremIpsum.concat(loremIpsum),
		date:'December 2018',
		dateShort:'Dec \'18'
	},
	{
		title:'NYUAD OPENS ITS DOORS',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'May 2010',
		dateShort:'May \'10' 
	},
	{
		title:'NYUAD OPENS ITS DOORS',
		content:loremIpsum.concat(loremIpsum).concat(loremIpsum),
		date:'May 2010',
		dateShort:'May \'10' 
	},
		{
		title:'NYUAD PARTNERS WITH MASDAR INSTITUTE',
		content:loremIpsum.concat(loremIpsum),
		date:'October 2018',
		dateShort:'Oct \'10'
	},
	{
		title:'THE GAZELLE CELEBRETAES 7TH ANNIVERSARY',
		content:loremIpsum.concat(loremIpsum),
		date:'December 2018',
		dateShort:'Dec \'10'
	}
];
