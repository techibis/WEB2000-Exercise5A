var para = document.createElement("P");
var myText = document.createTextNode("I find it interesting that nobody visited this land for hundreds of years and people found it just as it was left.  This helped preserve it very nicely.");
para.appendChild(myText);
//document.body.appendChild(para);
var ta = document.getElementById("topArea");
ta.appendChild(para);

var ultag = document.createElement("UL");
function createBullet(ul_tag, text) {
		var li_item1 = document.createElement("LI");
		var item1Text = document.createTextNode(text);
		li_item1.appendChild(item1Text);
		ul_tag.appendChild(li_item1);
		document.body.appendChild(ul_tag);
}
createBullet(ultag, "Hat");
createBullet(ultag, "Sunscreen");
createBullet(ultag, "Camera");
createBullet(ultag, "Map");
createBullet(ultag, "Sunglasses");
createBullet(ultag, "Sneakers");

var lastp = document.createElement("P");
var lastText = document.createTextNode("Don't forget these safety tips:");
lastp.appendChild(lastText);
document.body.appendChild(lastp);

var secondUL = document.createElement("UL");
createBullet(secondUL, "Don't give american money to beggars.");
createBullet(secondUL, "Don't leave your group.");
createBullet(secondUL, "Don't eat colorful berries found on mountain.");

var lastImg = document.createElement("IMG");// <img>
lastImg.src = "luggage.JPG";   
document.body.appendChild(lastImg);
         //    <img src="luggage.JPG

var fpic = document.getElementById("firstPic");
//alert(fpic.getAttribute("alt"));
fpic.setAttribute("title", "Our Vacation");

var pic2 = document.getElementById("secondPic");
//alert(pic2.getAttribute("src"));
pic2.setAttribute("title", "Be Careful!");
pic2.setAttribute("alt", "Tour group photo.");


var coupon = document.createElement("div");
coupon.style.width = "600px";
coupon.style.height = "300px";
coupon.style.border = "2px dashed #000000";

//coupon.style.backgroundImage = "url('airplane.jpg')";

var h1tag = document.createElement("H1");
var h1tagText = document.createTextNode("ON SALE NOW");
h1tag.appendChild(h1tagText);
coupon.appendChild(h1tag);

var h2tag = document.createElement("H2");
var h2tagText = document.createTextNode("get 30% off");
h2tag.appendChild(h2tagText);
coupon.appendChild(h2tag);

var ptag = document.createElement("P");
var ptagText = document.createTextNode("only valid with Salvi's Credit Card");
ptag.appendChild(ptagText);
coupon.appendChild(ptag);

var myImg = document.createElement("img");
myImg.src = "airplane.jpg"
myImg.style.position = "relative";
myImg.style.top = "-191px";
myImg.style.opacity = "0.3";
coupon.appendChild(myImg);



document.body.appendChild(coupon);




