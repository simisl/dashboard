import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  items:any;

  constructor(private service: UserService, private route: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.name = '';
    // this.profile = false;
    // this.li = false;

    this.service.getProjects().subscribe(data=>{
      console.log('popi',data)
      this.items = data
    })
    this.loadFront()
  }
  ngAfterContentChecked(){
    this.name = this.list;
  }
  async loadProfile(){
    // this.profile = true;
    // this.li = false;
    const {ProfileComponent}   = await import('../profile/profile.component')
    this.loadComponent.clear();
    let senddata = this.loadComponent.createComponent(ProfileComponent)
    let data = this.service.user
    senddata.instance.name = data.name
  }
  async loadList(){
    // this.profile = false;
    // this.li = true;
    const { ListComponent } = await import('../list/list.component');
    this.loadComponent.clear();
    let data = this.loadComponent.createComponent(ListComponent);
    data.instance.message.subscribe(d=>{
      this.list = d;
    })

  }
  async loadFront(){
    const {FrontpageComponent} = await import('../main/frontpage/frontpage.component')
    this.loadComponent.clear();
    this.loadComponent.createComponent(FrontpageComponent)

  }

  logout(){
    this.route.navigate(['/']);
    localStorage.setItem('status','');
  }
  ngOnDestroy(){
    this.loadComponent.remove();
  }
}
