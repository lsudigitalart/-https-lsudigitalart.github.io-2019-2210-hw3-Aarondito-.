function setup(){
    createCanvas(3200, 750);
    background(255,252,0);
  
    for(let y = 10; y < 750; y += 15){
      for(let x = 10; x < 3200; x += 20){
        stroke(102,255,0);
        strokeWeight(4);
        rect(x, y, 7,7 );
        stroke('#fae');
        strokeWeight(4);
        fill(color(0, 0, 255));
        circle(x, y, 10);

      }
    }
  }