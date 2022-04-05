import { Node } from "./Node.model";

export class Grid {
	nodes: Node[][];
	start_node: Node;
	end_node: Node;

	constructor(x: number, y: number) {
		this.nodes = this.initGrid(x, y);
		this.start_node = this.nodes[0][0];
		this.start_node.toggleStart();
		this.end_node = this.nodes[x - 1][y - 1];
		this.end_node.toggleEnd();
	}

	moveStart(node: Node) {
		this.start_node.toggleStart();
		this.start_node = node;
		this.start_node.toggleStart();
	}
	moveEnd(node: Node) {
		this.end_node.toggleEnd();
		this.end_node = node;
		this.end_node.toggleEnd();
	}

	initGrid(x: number, y: number) {
		const nodes: Node[][] = [];
		for (let i = 0; i < x; i++) {
			nodes[i] = [];
			for (let j = 0; j < y; j++) {
				nodes[i][j] = new Node(i, j);
			}
		}
		return nodes;
	}

	getNodes(): Node[] {
		let nodes = [];
		for (let i = 0; i < this.nodes.length; i++) {
			for (let j = 0; j < this.nodes[i].length; j++) {
				nodes.push(this.nodes[i][j]);
			}
		}
		return nodes;
	}

	getNeighbors(node: Node): Node[] {
		const neighbors: Node[] = [];
		const { x, y } = node;
		if (x > 0) neighbors.push(this.nodes[x - 1][y]);
		if (x < this.nodes[0].length - 1) neighbors.push(this.nodes[x + 1][y]);
		if (y > 0) neighbors.push(this.nodes[x][y - 1]);
		if (y < this.nodes.length - 1) neighbors.push(this.nodes[x][y + 1]);
		return neighbors;
	}
}
