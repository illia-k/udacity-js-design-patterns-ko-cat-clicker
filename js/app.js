/// <reference path="lib/knockout-3.2.0.js" />
var Cat = function() {
	this.name = ko.observable("Kote");
	this.clickNum = ko.observable(0);
	this.catPicUrl = ko.observable("img/1413379559_412a540d29_z.jpg");
	this.nickNames = ko.observableArray([
		{name: "Kote"},
		{name: "Kotee"},
		{name: "Koteshechka"},
		{name: "Kot'e"}		
	]);	
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
	this.currentCat = ko.observable(new Cat());
	this.changeClickNum = function () {
		self.currentCat().clickNum(self.currentCat().clickNum() + 1);
	};	
};

ko.applyBindings(new ViewModel());