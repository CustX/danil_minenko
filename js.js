sq = document.getElementsByClassName("sq");
_sq = sq[0];
let x = 0;
let y = 0;
let posx = 0;
let posy = 0;
let start = setInterval(simulation, 100);

function simulation() {
	random();
	posx +=x*100;
	posy +=y*100;
	sq[0].style.left = posx + "px";
	sq[0].style.top = posy + "px";
}

function random() {
	_x = Math.round(Math.random());
	_y = Math.round(Math.random());
	x = Math.round(Math.random())
	y = Math.round(Math.random())
	if (_x == 1 && posx != 0) {
		x *=-1;
	}
	if (_y == 1 && posy != 0) {
		y*=-1;
	}
}