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
