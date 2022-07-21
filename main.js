const timer_div =document.getElementById('timer')
let btn_div=document.getElementById('btn1')
let didStart =false
let timer;
function ButtonFunction(event){
    if(didStart){
        clearInterval(timer)
        timer_div.innerText ='0';
        btn_div.innerText ='Start';
        didStart=false

    } else  {
        // start_timer();
        didStart =true
        start_timer()
        btn_div.innerText = 'Stop';

    }
}
function start_timer(){
const dateRun = new Date().valueOf();
const dateNow= new Date().valueOf();
const newTimer = ((dateNow-dateRun)/1000).toFixed(0);
timer_div.innerText = newTimer
timer = setInterval(()=>{
    const dateNow= new Date().valueOf();
    const newTimer= ((dateNow-dateRun)/1000).toFixed(0);
     timer_div.innerText = newTimer

},500)

}
