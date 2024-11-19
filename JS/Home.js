x=0
function disp(){
    if(x==0){
        document.getElementById("DropDown").style.display="grid";
        x = 1;
    }
    else{
        document.getElementById("DropDown").style.display="none";
        x = 0;
    }
    setInterval(Drop, 1)
}
function Drop(){
    if(window.innerWidth>=620)
        document.getElementById("DropDown").style.display="none";
}
