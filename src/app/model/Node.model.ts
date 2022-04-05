export class Node {
	x: number;
	y: number;
	distance: number = Infinity;
	isWall: boolean = false;
	isPath: boolean = false;
	isStart: boolean = false;
	isEnd: boolean = false;
	visited: boolean = false;
	color: string = "white";
	parent?: Node;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	toggleWall() {
		if (this.isWall) {
			this.isWall = false;
			this.color = "white";
		} else {
			this.isWall = true;
			this.color = "black";
		}
	}
	togglePath() {
		if (this.isPath) {
			this.isPath = false;
			this.color = "white";
		} else {
			this.isPath = true;
			this.color = "green";
		}
	}
	toggleStart() {
		if (this.isStart) {
			this.isStart = false;
			this.color = "white";
		} else {
			this.isStart = true;
			this.isWall = false;
			this.color = "blue";
		}
	}
	toggleEnd() {
		if (this.isEnd) {
			this.isEnd = false;
			this.color = "white";
		} else {
			this.isEnd = true;
			this.isWall = false;
			this.color = "red";
		}
	}
}
