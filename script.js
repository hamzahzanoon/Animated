let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains = document.getElementById('mountains')
let mountain = document.getElementById('mountain')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let nouvil = document.querySelector('.nouvil')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *3.5 + 'px';
    mountains.style.top = value *2 +'px';
    mountain.style.top = value *1.5 +'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value *2 +'px';
    nouvil.style.fontsize = value +'px'; 
    if(scrollY >=67){
        nouvil.style.fontsize = 67 +'px';
        nouvil.style.position = 'fixed';
        if(scrollY >=355){
            nouvil.style.display ='none'; 
        }
        else{
            nouvil.style.display ='block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f) '
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f) '

        }
    }  
} 

