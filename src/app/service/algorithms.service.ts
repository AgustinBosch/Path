import { Injectable } from "@angular/core";
import { Grid } from "../model/Grid.model";
import { Node } from "../model/Node.model";
import { PriorityQueue } from "../model/PriorityQueue.model";

@Injectable({
	providedIn: "root",
})
export class AlgorithmsService {
	constructor() {}

	// dijkstra algorithm
	dijkstra(grid: Grid) {
		let visited_nodes = [];
		let unvisited_nodes = new PriorityQueue();
		grid.start_node.distance = 0;
		unvisited_nodes.enqueue(grid.start_node);
		while (unvisited_nodes.length() > 0) {
			let current_node = unvisited_nodes.dequeue();
			if (current_node!.isWall) continue;
			if (current_node!.isEnd) return this.backtrack(grid);
			visited_nodes.push(current_node);
			this.updateUnvisitedNeighbors(current_node!, grid, unvisited_nodes);
		}
		return visited_nodes;
	}

	// a* algorithm
	aStar(grid: Grid) {
		let visited_nodes = [];
		let unvisited_nodes = new PriorityQueue();
		grid.start_node.distance = 0;
		grid.start_node.heuristic = grid.start_node.distanceTo(grid.end_node);
		unvisited_nodes.enqueue(grid.start_node);
		while (unvisited_nodes.length() > 0) {
			let current_node = unvisited_nodes.dequeue();
			if (current_node!.isWall) continue;
			if (current_node!.isEnd) return this.backtrack(grid);
			visited_nodes.push(current_node);
			this.updateUnvisitedNeighborsHeuristic(
				current_node!,
				grid,
				unvisited_nodes
			);
		}
		return visited_nodes;
	}

	updateUnvisitedNeighborsHeuristic(
		current_node: Node,
		grid: Grid,
		unvisited_nodes: PriorityQueue
	) {
		let neighbors = grid.getNeighbors(current_node);
		for (let neighbor of neighbors) {
			if (neighbor.isWall) continue;
			if (neighbor.color === "white") {
				neighbor.color = "gray";
			}
			let distance = current_node.distance + 1;
			neighbor.heuristic = neighbor.distanceTo(grid.end_node);
			if (distance < neighbor.distance) {
				neighbor.distance = distance;
				neighbor.parent = current_node;
				unvisited_nodes.enqueue(neighbor);
			}
		}
	}

	updateUnvisitedNeighbors(
		current_node: Node,
		grid: Grid,
		unvisited_nodes: PriorityQueue
	) {
		let neighbors = grid.getNeighbors(current_node);
		for (let neighbor of neighbors) {
			if (neighbor.isWall) continue;
			if (neighbor.color === "white") {
				neighbor.color = "gray";
			}
			let distance = current_node.distance + 1;
			if (distance < neighbor.distance) {
				neighbor.distance = distance;
				neighbor.parent = current_node;
				unvisited_nodes.enqueue(neighbor);
			}
		}
	}

	backtrack(grid: Grid) {
		let path = [];
		let current = grid.end_node.parent!;
		while (current !== grid.start_node) {
			current.togglePath();
			path.push(current);
			current = current.parent!;
		}
		return path.reverse();
	}
}
