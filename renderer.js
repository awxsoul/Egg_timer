console.log("working")

const threeegg=document.getElementById("threeegg");
const sixegg=document.getElementById("sixegg");
const tenegg=document.getElementById("tenegg");
const circle00=document.getElementById("circle00");
const circle01=document.getElementById("circle01");
const circle02=document.getElementById("circle02");
const mins=document.getElementById("mins");
const bigegg=document.getElementById("bigegg");
const time=document.getElementById("time");
const text=document.getElementById("text");
const end=document.getElementById("end");
let timer
let texttimer

const go=()=>{
    threeegg.style.top="50%";
    threeegg.style.left="48%";
    sixegg.style.top="50%";
    sixegg.style.left="48%";
    tenegg.style.top="50%";
    tenegg.style.left="48%";
    circle00.style.height="400px";
    circle01.style.height="0px";
    circle02.style.height="0px";
    mins.style.opacity="0%";
    bigegg.style.height="220px";
    bigegg.style.opacity="100%";
    time.style.height="210px";
    time.style.opacity="100%";
    text.style.opacity="100%";
    end.style.opacity="100%";
    setTimeout(() => {
        end.style.transition="opacity 0.3s 0s";
        bigegg.style.transition="opacity 0s 0.7s,height 1s 0.05s";
        time.style.transition="opacity 0s 0.65s,height 1s 0s";
        threeegg.style.transition="height 0.2s 0s, top 1s 0.35s, left 1s 0.35s";
        sixegg.style.transition="height 0.2s 0s, top 1s 0.35s, left 1s 0.35s";
        tenegg.style.transition="height 0.2s 0s, top 1s 0.35s, left 1s 0.35s";
        circle00.style.transition="height 1s 0.2s";
        circle01.style.transition="height 1s 0.5s";
        circle02.style.transition="height 1s 0.5s";
        mins.style.transition="opacity 0.3s 0.9s";
        text.style.transition="opacity 0.3s 0s";
    }, 1000);
    
}

const comeback=()=>{
    threeegg.style.top="63%";
    threeegg.style.left="29%";
    sixegg.style.top="26%";
    sixegg.style.left="48%";
    tenegg.style.top="63%";
    tenegg.style.left="67%";
    circle00.style.height="92px";
    circle01.style.height="92px";
    circle02.style.height="83px";
    mins.style.opacity="100%";
    bigegg.style.height="50px";
    bigegg.style.opacity="0%";
    time.style.height="50px";
    time.style.opacity="0%";
    text.style.opacity="0%";
    end.style.opacity="0%";
    setTimeout(() => {
        end.style.transition="opacity 0.3s 1s";
        bigegg.style.transition="opacity 0s 0.3s, height 1s 0.3s";
        time.style.transition="opacity 0s 0.35s, height 1s 0.35s";
        threeegg.style.transition="height 0.2s 0s, top 1s 0s, left 1s 0s";
        sixegg.style.transition="height 0.2s 0s, top 1s 0s, left 1s 0s";
        tenegg.style.transition="height 0.2s 0s, top 1s 0s, left 1s 0s";
        circle00.style.transition="height 1s 0s";
        circle01.style.transition="height 0.5s 0s";
        circle02.style.transition="height 0.5s 0s";
        mins.style.transition="opacity 0.3s 0s";
        text.style.transition="opacity 0.3s 1s";
    }, 1000);
}

const fvalue=(v)=>{
    return String(v[0])+"% "+String(v[1])+"%"
}

const clock=(t)=>{
    //various points of clip path
    var segment=[[50,0],[100,0],[100,100],[0,100],[0,0]]
    //checkpoints to remove [<index>,<max-value>]
    const aim=[[0,100,1],[1,100,1],[0,0,0],[1,0,0],[0,50,1]]

    t=60000*t
    counter=0
    portions=t/400
    timer=setInterval(()=>{
        counter+=portions
        vin="50% 0%, 50% 50%"
        var a=segment[0]
        var b=aim[0]
        if (b[2]){
            if(a[b[0]]<b[1]){segment[0][b[0]]+=1}
            else{segment.shift();aim.shift()}
        }
        else{
            if(a[b[0]]>b[1]){segment[0][b[0]]-=1}
            else{segment.shift();aim.shift()}
        }
        for(i in segment){
            vin+=", "+fvalue(segment[i]);
        }
        console.log(vin)
        time.style.clipPath="polygon("+vin+")";
        if(counter>=t){
            clearTimeout(timer)
            time.style.opacity="0%";
        }        
    },portions);
}

const textclock=(t)=>{
    m=t-1
    s=60
    texttimer=setInterval(()=>{
        if(m==0 && s==0){text.innerHTML="0m 0s";clearTimeout(texttimer)}
        else{
            if(s==0){s=59;m-=1;}
            else{s-=1}
        }
        text.innerHTML=String(m)+"m "+String(s)+"s"
    },1000);
}


threeegg.onclick=()=>{go();clock(3);textclock(3)}
sixegg.onclick=()=>{go();clock(6);textclock(6)}
tenegg.onclick=()=>{go();clock(10);textclock(10)}
end.onclick=()=>{clearTimeout(texttimer);clearTimeout(timer);comeback()}