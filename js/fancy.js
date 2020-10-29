var x;
function domain(){
    x=getCookieByName("darkmodel");
    if(x==1){
        change_to_dark();
    }
    no_time_fun();
    time_fun();
}
function no_time_fun() {
    change_index_title();
    change_table_width();
    change_table_th_name();
    change_size();
    tr_counter();
}

function time_fun() {
    get_time();
    setTimeout(time_fun,100);
}
function change_darkmodel() {
    if(x==1){
        document.cookie="darkmodel=0";
    }
    else{
        document.cookie="darkmodel=1";
    }
    x=getCookieByName("darkmodel");
    change_to_dark();
}
function change_to_dark() {
    var change_color;
    if(x=="0"){
        change_color="#0b2e13";
        document.cookie="darkmodel=0";
        document.body.style.backgroundColor="#FFFFFF";
        document.getElementById("list").style.color="#000000";
        document.getElementById("switch_dark").value="开启暗黑模式";
        document.getElementById("indextitle").style.color="#000000";
        document.getElementById("switch_dark").style.color="white";
        document.getElementById("switch_dark").style.backgroundColor="#a9a9a9";
    }
    else{
        change_color="#a9a9a9";
        // alert(change_color);
        document.cookie="darkmodel=1";
        document.body.style.backgroundColor="#141413";
        document.getElementById("list").style.color="#FFFFFF";
        document.getElementById("switch_dark").value="关闭暗黑模式";
        document.getElementById("indextitle").style.color="#a9a9a9";
        document.getElementById("switch_dark").style.color="black";
        document.getElementById("switch_dark").style.backgroundColor="#FFFFFF";

    }
    var folders=document.getElementsByClassName("fas fa-folder");
    var files=document.getElementsByClassName("fas fa-file");
    var dice6s=document.getElementsByClassName("fas fa-dice-d6");
    for(var i=0;i<folders.length;i++){
        folders[i].style.color=change_color;
    }
    for(var i=0;i<files.length;i++){
        files[i].style.color=change_color;
    }
    for(var i=0;i<dice6s.length;i++){
        dice6s[i].style.color=change_color;
    }
}

function change_index_title(){
    var indext = document.getElementById("indextitle");
    var str=indext.innerHTML.split("/FTP");
    var innerhtml = str[0];
    if(str.length>1){
        innerhtml=innerhtml+"&nbsp;&nbsp;"+str[1];
    }
    indext.innerHTML=innerhtml;
    document.title= "Index of "+str[1];
}
function change_table_width() {
    var swidth=window.screen.width;
    var sheight=window.screen.height;
    if (sheight>=swidth){
        var tabl=document.getElementsByTagName("table")[0];
        tabl.style.width="100%";
        var str_index=document.getElementById("indextitle").innerHTML;
        document.getElementById("indextitle").style.marginLeft="0px";
    }
}
function change_table_th_name() {
    var width,height;
    var ths=document.getElementsByTagName("th");
    width=window.screen.width;
    height=window.screen.height;
    if(height>=width){
        ths[0].style.width="65%";
        ths[1].style.width="10%";
    }
    ths[0].innerText="文件";
    ths[1].innerText="大小";
    ths[2].innerText="修改日期";
}
function tr_counter() {
    var trs=document.getElementsByClassName("link");
    var tds=document.getElementsByClassName("size");
    var zeros=["","0","00","000","0000"];
    cont=1;
    if(cont+1<=trs.length ){
        for(var i=1;i<trs.length;i++){
            var text = trs[i].innerHTML.split('\">');
            var scont=cont.toString();
            scont=zeros[trs.length.toString().length-scont.length]+scont;
            var str_calss_name='<i class="fas fa-file" style="color: #0b2e13"></i>&nbsp;';
            if(tds[i].innerText=='-'){
                str_calss_name='<i class="fas fa-folder" style="color: #0b2e13"></i>&nbsp;';
            }
            else {
                var filename=trs[i].innerText;
                var suffixs = filename.split('.');
                var suffix = suffixs[suffixs.length-1].toLocaleLowerCase();
                if(suffix=="exe"||suffix=="msi"){
                    str_calss_name='<i class="fas fa-dice-d6" style="color: #686868"></i>&nbsp;';
                }else if(suffix=='cpp'||suffix=='py'||suffix=='html'||suffix=='c'){//代码
                    str_calss_name='<i class="fas fa-file-code" style="color: #0b2e13"></i>&nbsp;';
                }else if (suffix=='pdf'){//pdf
                    str_calss_name='<i class="fas fa-file-pdf" style="color: #e34850"></i>&nbsp;';
                }else if(suffix=="ppt" || suffix=="pptx"){//ppt
                    str_calss_name='<i class="fas fa-file-powerpoint" style="color: #b7472a"></i>&nbsp;';
                }else if(suffix == "doc" || suffix=="docx"){//word
                    str_calss_name='<i class="fas fa-file-word" style="color: #2b579a"></i>&nbsp;';
                }else if(suffix == "xls" || suffix=="xlsx"|| suffix=="csv"){//excel
                    str_calss_name='<i class="fas fa-file-excel" style="color: #217346"></i>&nbsp;';
                }else if(suffix=="dmg"||suffix=="iso"){
                    str_calss_name='<i class="fas fa-dot-circle" style="color: #aeb9c0"></i>&nbsp;';
                }else if(suffix=="zip"||suffix=="rar"||suffix=="7z"||suffix=="tar"||suffix=="gz"){//压缩包
                    str_calss_name='<i class="fas fa-file-archive" style="color: #aeb9c0"></i>&nbsp;';
                }else if(suffix=="mp4"||suffix=="mov"||suffix=="mkv"||suffix=="aiff"){//视频
                    str_calss_name='<i class="fas fa-file-video" style="color: #aeb9c0"></i>&nbsp;';
                }else if(suffix=="mp3"||suffix=="wav"||suffix=="mpeg"){//音频
                    str_calss_name='<i class="fas fa-file-audio" style="color: #aeb9c0"></i>&nbsp;';
                }else if(suffix=="jpg"||suffix=="jpeg"||suffix=="png"||suffix=="bmp"||suffix=="psd"){//图片
                    str_calss_name='<i class="fas fa-file-image" style="color: #aeb9c0"></i>&nbsp;';
                }else if(suffix=="txt" || suffix=="sh"){//文本
                    str_calss_name='<i class="fas fa-file-alt" style="color: #ffeaa4"></i>&nbsp;';
                }else if(suffix=="apk"){//apk
                    str_calss_name='<i class="fab fa-android" style="color: #30d780"></i>&nbsp;';
                }else if(suffix=="ppt" || suffix=="pptx"){//ppt
                    str_calss_name='<i class="fas fa-file-powerpoint" style="color: #b7472a"></i>&nbsp;';
                }
            }
            var str=text[0]+'">&nbsp;['+scont+"] | "+str_calss_name+text[1];
            trs[i].innerHTML=str;
            // alert("Text:"+trs[i].innerText+"<br>Html:"+trs[i].innerHTML);

            cont++;
        }
    }
    var TRS=document.getElementsByTagName("tr");
    TRS[1].innerHTML='<td class="link" colspan="3"><hr><a href="../">&nbsp;&nbsp;<i class="fas fa-folder-open" >&nbsp;返回上级目录</a></td>';
}

function change_size() {
    var tds=document.getElementsByClassName("size");
    for(var i=0;i<tds.length;i++){
        var text = tds[i].innerHTML;
        if(text.length>1){
            text=text.split("iB")[0];
            if(text[text.length-1]!='B'){
                text=text+'B';
            }
            else{
                text = text+" ";
            }
        }
        tds[i].innerHTML=text;
        //tds[i].style.textAlign="right";
    }
}


function get_time()//获取时间函数
{
    var d=new Array(10);
    d[4]=-1;
    var now=new Date();
    d[1]=parseInt(now.getFullYear());
    d[2]=now.getMonth()+1;
    d[3]=now.getDate();
    // if(d[4]!=parseInt(now.getHours())){
    //     change_marquee();
    // }
    d[4]=now.getHours();
    d[5]=now.getMinutes();
    d[6]=now.getSeconds();
    var week = "日一二三四五六日";
    for(var i=2;i<=6;i++)
        if(d[i]<10)
            d[i]="0"+d[i];
    var str=/*"GMT+8    "+"   "+*/d[1]+"年"+d[2]+"月"+d[3]+"日 周"+week[parseInt(now.getDay())]+"     "+d[4]+":"+d[5]+":"+d[6];
    //alert(str);
    document.getElementById("ptime").innerText=str;
    document.getElementById("ptime").style.color="#d10019";
    document.getElementById("ptime").style.fontSize="17px";
    document.getElementById("ptime").style.fontWeight="bolder";
}
function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
}
function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}
