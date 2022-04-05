import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GridComponent } from "./component/grid/grid.component";
import { NodeComponent } from "./component/node/node.component";

@NgModule({
	declarations: [AppComponent, GridComponent, NodeComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
