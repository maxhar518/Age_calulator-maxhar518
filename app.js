var a = prompt('Enter Your date of Birth:formate(01 januery, 2000)')
var currentdate = new Date()

if(a=> currentdate){
    alert('invalid input')
}else if(a<= currentdate){

var date = new Date()
var dob = new Date(a)
var datemili = date.getTime();
var dobmili =dob.getTime();

var minus = datemili - dobmili;
var formula = minus/(1000 * 60 * 60 * 24 * 365);
document.write((Math.floor(formula))+" "+"years")
}
else{
    alert('invalid input')
}