const emp=[2,4,3];
for(let i=0;i<emp.length;i++){
    const ele=document.getElementById(`${emp[i]}`);
    ele.classList.add('emp');
}
function seatClick(e){
    console.log(e)
    const eleClass=document.getElementById(`${e}`).classList;
    for(let i=0;i<eleClass.length;i++){
        if(eleClass[i]=='choose'){
            eleClass.remove('choose');
            return;
        }
    }
    eleClass.add('choose');
}