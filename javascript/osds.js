const sectionleft = document.querySelector("#section_left");
const navleft = document.querySelector("#nav_left");

function getOSInfoStr() {
    var strOS = '';
    var ua = navigator.userAgent;

    if(ua.indexOf("NT 6.0") != -1) strOs = "Windows Vista/Server 2008";
    else if(ua.indexOf("NT 6.1") != -1) strOs = "Windows 7";
    else if(ua.indexOf("NT 5.2") != -1) strOs = "Windows Server 2003";
    else if(ua.indexOf("NT 5.1") != -1) strOs = "Windows XP";
    else if(ua.indexOf("NT 5.0") != -1) strOs = "Windows 2000";
    else if(ua.indexOf("NT") != -1) strOs = "Windows NT";
    else if(ua.indexOf("9x 4.90") != -1) strOs = "Windows Me";
    else if(ua.indexOf("98") != -1) strOs = "Windows 98";
    else if(ua.indexOf("95") != -1) strOs = "Windows 95";
    else if(ua.indexOf("Win16") != -1) strOs = "Windows 3.x";
    else if(ua.indexOf("Windows") != -1) strOs = "Windows";
    else if(ua.indexOf("Linux") != -1) strOs = "Linux";
    else if(ua.indexOf("Macintosh") != -1) strOs = "Macintosh";
    else strOs = "";

    return strOs;
}


const os = getOSInfoStr();

if(os === "Macintosh"){ //맥으로 접속 할때
    console.log("1");
    document.getElementById('nav_Categoey').style.padding = "8px 10px 0 0";
    document.querySelector("#nav_mid form").style.padding = "8px 0 0 10px";
    document.querySelector("#title").style.margin = "33px 0 0 25px";
}


window.addEventListener('resize', function(){ //옆 최근글을 줄일때
    sectionleft.style.Width = navleft.clientWidth;
    //sectionleft.style.Width = 10;
});
