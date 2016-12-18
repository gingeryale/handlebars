module.exports = function (birthYear) {
	var age = new Date().getFullYear() - birthYear;
	
	if(age > 0){
		return age + " years old";
	} else {
		return "Less than 1 year old";
	}
};