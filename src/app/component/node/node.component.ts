import { Component, Input, OnInit } from "@angular/core";
import { Node } from "src/app/model/Node.model";

@Component({
	selector: "app-node",
	templateUrl: "./node.component.html",
	styleUrls: ["./node.component.css"],
})
export class NodeComponent implements OnInit {
	@Input() node!: Node;

	constructor() {}

	ngOnInit(): void {}
}
