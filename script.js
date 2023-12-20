let m = document.getElementById('life').getContext('2d')


let draw =(x,y,c,s)=>{
    m.fillStyle=c;
    m.fillRect(x,y,s,s);
};

let particles =[];
particles=(x,y,c)=>{
    return{"x":x, "y":y, "vx":0, "vy":0,"color":c}
}
