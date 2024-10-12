// JavaScript

const settings = {
    n: 3,
    itter: 5000,
    point: [],
    ratio: .5,
}

const settingscontent = document.getElementsByClassName("settingscontent")[0];
const settingsbutton = document.getElementsByClassName("settingsbutton")[0];
const ninty = Math.PI / 2;

settingsbutton.onclick = () => {
    settingscontent.classList.toggle("show");
}

/**@type {HTMLCanvasElement} */

window.onload = function() {
    const circledivs = (2 * Math.PI) / settings.n;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    settings.point = [];
    for (let i = 0; i<settings.n; i++) {
        xVal = r * Math.cos((i+1)*circledivs - ninty);
        yVal = r * Math.sin((i+1)*circledivs - ninty);
        settings.point.push({x: xVal, y: yVal});
        ctx.fillStyle = "#3dbbdb";
        ctx.fillRect(settings.point[i].x + halfcanvwidth, settings.point[i].y + halfcanvheight, 5, 5);
    }
}

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const halfcanvheight = canvas.height * .5;
const halfcanvwidth = canvas.width * .5;
const r = canvas.width < canvas.height ? (canvas.width / 8 )* 3 : (canvas.height / 8) * 3;
const ratioin = document.getElementById("ratios");
const ratioout = document.getElementById("ratiosout")
ratioout.innerHTML = ratioin.value;
ratioin.oninput = function() {
    ratioout.innerHTML = this.value
    settings.ratio = this.value
}

const vertexcount = document.getElementById("vertices");
const vertexout = document.getElementById("verticesout");
vertexout.innerHTML = vertexcount.value;
vertexcount.oninput = function() {
    vertexout.innerHTML = this.value;
    settings.n = this.value;
    const circledivs = (2 * Math.PI) / settings.n;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    settings.point = [];
    for (let i = 0; i<settings.n; i++) {
        xVal = r * Math.cos((i+1)*circledivs - ninty);
        yVal = r * Math.sin((i+1)*circledivs - ninty);
        settings.point.push({x: xVal, y: yVal});
        ctx.fillStyle = "#3dbbdb";
        ctx.fillRect(settings.point[i].x + halfcanvwidth, settings.point[i].y + halfcanvheight, 5, 5);
    }
}
const iterationdesired = document.getElementById("iterations");
const desiredout = document.getElementById("iterationsout");
desiredout.innerHTML = iterationdesired.value;
iterationdesired.oninput = function() {
    desiredout.innerHTML = this.value;
    settings.itter = this.value;
}
const run = document.getElementsByClassName("run")[0];
run.onclick = () => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i<settings.itter; i++) {
        if (i === 0) {
            const randnumber = Math.floor(Math.random()*settings.n);
            const randnumber2 = Math.floor(Math.random()*(settings.n-randnumber));
            // console.log(randnumber)
            // console.log(randnumber2)
            const xVal = ((settings.point[randnumber].x-settings.point[randnumber2].x)*settings.ratio) + settings.point[randnumber2].x;
            const yVal = ((settings.point[randnumber].y-settings.point[randnumber2].y)*settings.ratio) + settings.point[randnumber2].y;
            settings.point.push({x: xVal,y: yVal});
        } else {
            const randnumber = Math.floor(Math.random()*settings.n);
            const xVal = (settings.point[randnumber].x-settings.point[settings.point.length-1].x)*settings.ratio + settings.point[settings.point.length-1].x;
            const yVal = (settings.point[randnumber].y-settings.point[settings.point.length-1].y)*settings.ratio + settings.point[settings.point.length-1].y;
            settings.point.push({x: xVal,y: yVal});
        }
        // console.log(settings.point)
        ctx.fillStyle = "#3dbbdb";
        ctx.fillRect(settings.point[settings.point.length-1].x + halfcanvwidth, settings.point[settings.point.length-1].y + halfcanvheight, 1, 1);
    }
}
/*  _.,      _.._
    (.-.`._,'(,-'""`|\--/|
        `-.-, \ )-' (=^w^=)
  pyroxenes  `- -'  \_' '_/  */


