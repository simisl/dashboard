import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("loadComponent", { read: ViewContainerRef })
  loadComponent!: ViewContainerRef;
  log!: boolean;
  name!: string
  list!: string
  profile!: boolean;
  li!: boolean;

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.name = '';
    this.profile = false;
    this.li = false;
  }
  ngAfterContentChecked(){
    this.name = this.list;
  }
  async loadProfile(){
    this.profile = true;
    this.li = false;
    const {ProfileComponent}   = await import('../profile/profile.component')
    this.loadComponent.clear();
    let senddata = this.loadComponent.createComponent(ProfileComponent)
    let data = this.service.user
    senddata.instance.name = data.name
  }
  async loadList(){
    this.profile = false;
    this.li = true;
    const { ListComponent } = await import('../list/list.component');
    this.loadComponent.clear();
    let data = this.loadComponent.createComponent(ListComponent);
    data.instance.message.subscribe(d=>{
      this.list = d;
    })

  }
  logout(){
    this.route.navigate(['/']);
    localStorage.setItem('status','');
  }
  ngOnDestroy(){
    this.loadComponent.remove();
  }
}
