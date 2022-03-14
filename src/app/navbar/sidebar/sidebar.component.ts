import { Component, OnInit } from "@angular/core";
import { SidenavService } from "src/app/services/sidenav.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  isOpen = true;
  menuItems: any[];
  selectedItem: any;

  constructor(private sidenavService : SidenavService) {
    sidenavService.sidenavEmitter.subscribe(() => {
      this.toggle();
    })
  }

  ngOnInit() {
    this.menuItems = [
      { name: "Home", path: ["/"], icon: "fa-home" },
      { name: "Users", path: [""], icon: "fa-user" },
      { name: "Folder", path: [""], icon: "fa-folder" },
      { name: "Files", path: [""], icon: "fa-file" }
    ];
  }

  toggle(){
  	this.isOpen = !this.isOpen;
  }

  activeItem(event, name){
    this.selectedItem = name;
  }
}
