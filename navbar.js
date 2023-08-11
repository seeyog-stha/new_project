function generate_navbar(){
    return`
        <nav class="nav_bar drop_nav">
        <ul>
            <li><a href="index.html" class="active " id="home">Home</a></li>
            <li><a href="aboutus.html"  id="about">About us</a></li>
            <li><a href="shopnow.html" id="shop" >Shop now</a></li>
        </ul>
    </nav> 
    `;
}


let temp=document.getElementById('menu_list');
let head1=document.getElementById('hid')
let a=true;
temp.addEventListener('click',function(){
    if(a){

        // console.log("helo")
        head1.style.display="flex";
        head1.innerHTML=generate_navbar();
        a=false;
    }
    else{
        head1.style.display="none";
        a=true;
    }
    
})