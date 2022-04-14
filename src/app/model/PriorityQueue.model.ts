import { Node } from "src/app/model/Node.model";

export class PriorityQueue {
	priorityQueue: Array<Node> = [];
	constructor() {}
	enqueue(node: Node) {
		if (this.priorityQueue.length === 0) {
			this.priorityQueue.push(node);
			return;
		} else {
			for (let i = 0; i < this.priorityQueue.length; i++) {
				if (
					this.priorityQueue[i].distance +
						this.priorityQueue[i].heuristic >
					node.distance + node.heuristic
				) {
					this.priorityQueue.splice(i, 0, node);
					return;
				}
			}
			this.priorityQueue.push(node);
		}
	}
	sort() {
		this.priorityQueue.sort((a, b) => {
			return a.distance + a.heuristic - (b.distance + b.heuristic);
		});
	}
	dequeue() {
		return this.priorityQueue.shift();
	}
	isEmpty() {
		return this.priorityQueue.length === 0;
	}
	length() {
		return this.priorityQueue.length;
	}
}
