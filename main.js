var names=[
    "Family Book","Mother","Father","Grandfather","Grandmother"
];

var images=[
    "https://images-na.ssl-images-amazon.com/images/I/51Veiu1H60L._SY490_BO1,204,203,200_.jpg"," mother.jpg","father.jpg",  "grandfater.jpg","grandmother.jpg" ];
    var i = 0;

function next(){
    i++;
    if(i>4){
        i=0;
    }
document.getElementById("img1").src=images[i] ;
document.getElementById("name").innerHTML = names[i];

}
