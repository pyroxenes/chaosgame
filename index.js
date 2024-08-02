// JavaScript

const settings = {
    n: 0,
    itter: 0,
    point: [],
}

const settingscontent = document.getElementsByClassName("settingscontent")[0];
const settingsbutton = document.getElementsByClassName("settingsbutton")[0];
settingsbutton.onclick = () => {
    settingscontent.classList.toggle("show")
}

    /** @type {HTMLCanvasElement} */
    const canvas=document.getElementById("canvas");
    const size = canvas.getBoundingClientRect();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx=canvas.getContext("2d");
    const halfcanvheight=canvas.height * .5;
    const halfcanvwidth=canvas.width * .5;
    ctx.fillStyle = "#3dbbdb";
    ctx.fillRect(halfcanvwidth, halfcanvheight, 1, 1);
    const r = canvas.width < canvas.height ? (canvas.width / 8 )* 3 : (canvas.height / 8) * 3;



    const vertexcount = document.getElementById("vertices");
    const vertexout = document.getElementById("verticesout");
    vertexout.innerHTML = vertexcount.value;
    vertexcount.oninput = function() {
        vertexout.innerHTML = this.value;
        settings.n = this.value;
        const circledivs = (2 * Math.PI) / settings.n
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        settings.point=[];
        const ninty = Math.PI / 2
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
        ctx.fillStyle = "#3dbbdb";
        ctx.fillRect(halfcanvwidth, halfcanvheight, 1, 1);
        const r = canvas.width < canvas.height ? (canvas.width / 8 )* 3 : (canvas.height / 8) * 3;
        ctx.strokeStyle = "black";
        ctx.arc(halfcanvwidth, halfcanvheight, r, 0, Math.PI * 2);
        ctx.stroke();
    }



