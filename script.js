let m = document.getElementById('life').getContext('2d')


function draw(x,y,c,s){
    m.fillStyle=c;
    m.fillRect(x,y,s,s);
};

let particles =[];
function particle(x,y,c){
    return{"x":x, "y":y, "vx":0, "vy":0,"color":c}
}

function random(){
    return Math.random()*400+50
}

function create(number, color){
    let group=[]
    for(let i=0;i < number;i++){
        group.push(particle(random(), random(), color))
        particles.push(group[i])
    }
    return group;
}



let yellow = create(2,'yellow')



function update(){
    m.clearRect(0,0,500,500)
    draw(0,0,"black",500)
    for(let i = 0;i < particles.length;i++){
        draw(particles[i].x, particles[i].y,particles[i].color,5)
    }
    requestAnimationFrame(update)
}
update();