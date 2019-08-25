function help() {
    if (document.getElementsByClassName("side")[0].style.display === "block") {
        document.getElementById('img').src = "question.png";
        document.getElementsByClassName("side")[0].style = "display:none;";
    } else {
        document.getElementById('img').src = "question_on.png";
        document.getElementsByClassName("side")[0].style = "display:block;";
    }
}
function key() {
        if(event.keyCode == 13){
            draw();
        }
}
function draw() {
        if(check()) {
            getcanvas();
            drawoutline();
            drawbackground();
            drawmain();
            show();


        }
}
function check() {
    const text=document.getElementById("text").value;
    if(text.length===2){
        return true;
    }
    else{
        alert('请输入两字哦！');
        return false;


    }
}
function getcanvas() {

    c = document.getElementById("Canvas");
    ctx = c.getContext("2d");
    c.height=c.height;//清空
    ctx.shadowBlur=0;
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.shadowColor="white";
    ctx.fillStyle="rgba(255,255,255,0.95)"
    ctx.fillRect(0,0,256,256);
}

function drawoutline() {
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(4, 4, 248, 248);
}

function drawbackground() {

    ctx.fillStyle = "#e2e2e2";
    ctx.font="normal normal normal 48px LittleSong";
    const index=randUnique(0,80,11);
    ctx.fillText(gettext(index[0]),20,60);
    ctx.fillText(gettext(index[1]),180,150);
    ctx.fillText(gettext(index[2]),90,90);
    ctx.fillText(gettext(index[3]),30,150);
    ctx.fillText(gettext(index[4]),190,240);
    ctx.fillText(gettext(index[5]),100,200);
    ctx.fillText(gettext(index[6]),130,130);
    ctx.fillText(gettext(index[7]),140,50);
    ctx.fillText(gettext(index[8]),200,70);
    ctx.fillText(gettext(index[9]),20,230);
    ctx.fillText(gettext(index[10]),170,199);
}
function drawmain(){
    const text=document.getElementById("text").value;
    ctx.fillStyle = "#000000";
    ctx.font="normal normal normal 56px LittleSong";
    ctx.fillText(text.substr(0,1),80,120);
    ctx.fillText(text.substr(1,1),150,170);
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(108,168);
    ctx.lineTo(178,88);
    ctx.stroke();
}
function gettext(index) {
    //0-80
    const text=['丨','亅','丿','乛','一','乙','乚','丶','八','勹','匕','冫','卜','厂','刀','刂','儿','二','匚' ,'阝' ,'丷', '几', '卩' ,'冂', '力', '冖', '凵', '人', '亻', '入' ,'十' ,'厶','亠' ,'匸', '讠' ,'廴','又','艹','屮','彳','巛','川','辶', '寸', '大', '飞' ,'干','工' ,'弓', '廾' ,'广', '己', '彐', '彑' ,'巾', '口', '马', '门', '宀', '女', '犭', '山' ,'彡', '尸', '饣', '士', '扌', '氵' ,'纟', '巳' ,'土', '囗', '兀', '夕','小' ,'忄', '幺' ,'弋','尢','夂','子']
    return text[index];
}
function randUnique(start, end, size){
    // 全部随机数值
    const allNums = new Array;
    // 判断获取随机数个数
    size = size ? (size > end - start ? end - start : size) : 1;
    // 生成随机数值区间数组
    for (var i = start, k = 0; i <= end; i++, k++) {
        allNums[k] = i;
    }
    // 打撒数组排序
    allNums.sort(function(){ return 0.5 - Math.random(); });

    // 获取数组从第一个开始到指定个数的下标区间
    return allNums.slice(0, size);
}
function show() {
    const src=c.toDataURL();

    if(document.documentElement.clientWidth>1024) {
        const contain=document.querySelector('.canvas');
        contain.style = "display: block";
        const a=document.querySelector('.canvas a');
        a.setAttribute('href',src);
    }
    else{
        document.getElementById('img').src = "question_on.png";
        document.getElementsByClassName("side")[0].style = "display:block;";
        document.getElementById('demo').src = src;
        document.querySelectorAll(".side p")[0].innerHTML="生成成功";
    }

}

