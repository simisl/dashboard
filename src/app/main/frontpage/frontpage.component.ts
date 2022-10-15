import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  items:any;
  @ViewChild("loadComponent", { read: ViewContainerRef })
  loadComponent!: ViewContainerRef;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe(data=>{
      console.log('popi',data)
      this.items = data
    })
  }

}
@NgModule({
  declarations: [
    FrontpageComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatMenuModule,
  ]
})
class FrontpageModule { }

