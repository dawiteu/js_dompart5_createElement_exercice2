// 1


const inputs = document.querySelectorAll("input"); 

const div = document.querySelectorAll("div"); 

//let lis = div[0].querySelector("ul").children;
let ul = div[0].querySelector("ul"); 


//console.log(Array.from(lis)); 


inputs.forEach((e, i) => {
    e.addEventListener("click", function(){
        switch(i){
            case 0:
                ul.removeChild(ul.firstElementChild);
            break;
            case 1: 
                ul.removeChild(ul.lastElementChild);
            break;
            case 2:
                let randnum = Math.floor(Math.random() * ul.children.length); 
                ul.removeChild(ul.children[randnum]);
            break; 
            default:
               // console.log(';err');
            break;
        }
    });
});



//============ 2 =========

        // 4 
const ul2 = document.querySelectorAll("ul")[1]; 

let monLi = document.createElement("li"); 
monLi.innerHTML="Dawiteu"; 

inputs[3].addEventListener("click", () => {
    ul2.replaceChild(monLi,ul2.children[1]);
});


// 5 

inputs[5].addEventListener("click", () => {
    let monNewLi = document.createElement("li"); 
    let newVal = document.querySelector("input#replaceValue").value;
    monNewLi.innerHTML=newVal; 
    ul2.replaceChild(monNewLi, ul2.children[2]);
});
