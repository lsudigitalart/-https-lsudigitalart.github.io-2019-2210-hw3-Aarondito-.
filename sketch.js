function setup(){ // hopefully i can make some eyes bleed.
    createCanvas(3200, 750);
    background(255,252,0);
  
    for(let y = 10; y < 750; y += 15){
      for(let x = 10; x < 3200; x += 20){
        stroke(0,229,238);// blue line side
        strokeWeight(4);
        rect(x, y, 15,4 );
        stroke(0,229,238); //blue line up
        strokeWeight(4);
        rect(x, y, 4,10 );
        stroke(255,0,0); //red box
        strokeWeight(1.5);
        fill(color(0,0,255))
        rect(x, y, 7,7 );
        stroke('#fae'); //dot
        strokeWeight(3);
        fill(color(102, 255, 0));
        circle(x, y, 10);

      }
    }
  }