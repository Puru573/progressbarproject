// const btnuploadfile=document.querySelector(".button");
// const Text=document.querySelector("#textbox");

// function setButtonProgress(button,percent){
//     const textElement=button.querySelector(".button_text");
//     button.querySelector(".button_progress").style.width=`${percent}%`;
//     if(percent>=0){
//         textElement.textContent=button.dataset.progressText;
//         // data set is used for modify(read & write) the attribute of a data
//     }
//     if(percent>=100){
//         textElement.textContent=button.dataset.completeText;
//     }

    

// }
// setButtonProgress(btnuploadfile,70);

let textbox=document .querySelector('#textbox');
let s4heading=document.querySelector('.s4heading');
let s5heading=document.querySelector('.s5heading');

var count=0;
var maxCount=100;
var progressBar=document.querySelector(".progressbar");
function progress(){
    // increase ocunt if it's less than maxcount
    if(count<99.99){
        count=count===maxCount?maxCount:count+33.33;
        var newwidth=(count/maxCount)*100 +"%";
        progressBar.style.width=newwidth; //style.width we put in those area where block element sare present
        // progressBar.innerHTML=count+"/"+maxCount;

    }
    else{
        return;
    }

 
}
textbox.addEventListener("click",progress);
s4heading.addEventListener("click",progress);
s5heading.addEventListener("click",progress);



