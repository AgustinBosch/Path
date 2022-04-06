import { Component, OnInit } from "@angular/core";
import { Grid } from "src/app/model/Grid.model";
import { AlgorithmsService } from "src/app/service/algorithms.service";
import { Node } from "src/app/model/Node.model";

@Component({
	selector: "app-grid",
	templateUrl: "./grid.component.html",
	styleUrls: ["./grid.component.css"],
})
export class GridComponent implements OnInit {
	node_x: number = 20;
	node_y: number = 20;
	size_cell: number = 30;
	mousedown: boolean = false;
	walling: boolean = false;
	moving_start: boolean = false;
	moving_end: boolean = false;
	target: Node;
	grid: Grid;

	constructor(private algorithmsService: AlgorithmsService) {
		this.grid = new Grid(this.node_x, this.node_y);
		this.target = this.grid.start_node;
	}

	ngOnInit(): void {}

	reset() {
		this.grid = new Grid(this.node_x, this.node_y);
	}

	mouseHandler(event: Event, node: Node) {
		if (event.type === "mousedown") {
			this.mousedown = true;
			console.log("x=" + node.x + " y=" + node.y);
			if (node !== this.grid.start_node && node !== this.grid.end_node) {
				this.walling = !node.isWall;
				node.toggleWall();
			} else if (node === this.grid.start_node) {
				this.moving_start = true;
			} else if (node === this.grid.end_node) {
				this.moving_end = true;
			}
		}
		if (event.type === "mouseenter") {
			this.target = node;
			if (
				this.mousedown &&
				!this.moving_start &&
				!this.moving_end &&
				this.walling !== node.isWall &&
				!node.isStart &&
				!node.isEnd
			) {
				node.toggleWall();
			} else if (this.moving_start) {
				this.grid.moveStart(node);
			} else if (this.moving_end) {
				this.grid.moveEnd(node);
			}
		}
		if (event.type === "mouseup") {
			this.mousedown = false;
			this.moving_start = false;
			this.moving_end = false;
		}
	}

	neighbors(node: Node) {
		console.log(node);
		console.log(this.grid.getNeighbors(node));
	}

	dijkstra() {
		console.log(this.algorithmsService.dijkstra(this.grid));
	}

	aStar() {
		console.log(this.algorithmsService.aStar(this.grid));
	}
}
