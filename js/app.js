/// <reference path="lib/knockout-3.2.0.js" />
var initialCats = [
	{id:0,
	name: "Kote",
	clickNum: 0, 
	catPicUrl:"img/1413379559_412a540d29_z.jpg",
	nickNames: [{name: "Kote"},	{name: "Kotee"}, {name: "Koteshechka"},	{name: "Kot'e"}]},
	{id:1,
	name: "Kote1",
	clickNum: 0, 
	catPicUrl:"img/22252709_010df3379e_z.jpg",
	nickNames: [{name: "the first"}]},
	{id:2,
	name: "Kote2",
	clickNum: 0, 
	catPicUrl:"img/4154543904_6e2428c421_z.jpg",
	nickNames: [{name: "the second"}]},
	{id:3,
	name: "Kote3",
	clickNum: 0, 
	catPicUrl:"img/9648464288_2516b35537_z.jpg",
	nickNames: [{name: "the third"}]}
];

var Cat = function(data) {
	this.id = ko.observable(data.id);
	this.name = ko.observable(data.name);
	this.clickNum = ko.observable(data.clickNum);
	this.catPicUrl = ko.observable(data.catPicUrl);
	this.nickNames = ko.observableArray(data.nickNames);	
	this.title = ko.computed(function(){
		if(this.clickNum() >= 20)
			return "veteran";
			
		if(this.clickNum() >= 15)
			return "mature";
		
		if(this.clickNum() >= 10)
			return "pre-mature";
		
		if(this.clickNum() >= 5)
			return "teen";	
			
		return "newborn";
	}, this);	
};


var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
		
//	this.currentCat = ko.observable(this.catList()[2]);
	this.currentCat = ko.observable();
	
	this.changeClickNum = function () {
		var currentCatId = self.currentCat().id();
		self.catList()[currentCatId].clickNum(
			self.catList()[currentCatId].clickNum() + 1);
	};

};

ko.applyBindings(new ViewModel());