let count = 0;

document.getElementById("decrement-btn").onclick= function(){
    document.getElementById("message");
    if(count >0){
        count -= 1;
    }
    document.getElementById("counterLabel").innerHTML = count;
    if(count < 1){
        console.log("Error : cannot go below 0");
        
        message.classList.remove('hide')
        count = 0;
        
    }
    
};


document.getElementById("increment-btn").onclick=function name(params){
    count +=1;
    document.getElementById("counterLabel").innerHTML=count;
    message.classList.add('hide');
    
};


document.getElementById("clear-btn").onclick=function name(params){
    count =0;
    document.getElementById("counterLabel").innerHTML=count;
    message.classList.add('hide');
    if(count > 0){
        clear-btn.classList.add('hide');
    }
}
