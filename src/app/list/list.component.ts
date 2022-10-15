import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
interface D{
 lang: string[]
 projects: string[]
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() message = new EventEmitter<string>();
  projectForm!: FormGroup;
  project!: any;
  ref!: any;
  h!:any
  lang!: string[]
  projects!: string[]
  data!:D[]
  constructor(private service: UserService,private fb: FormBuilder) { }

  ngOnInit(): void {
    let data = this.service.user
    this.message.emit(data.name)
    this.project = ['.net','angular','java','vuejs'];
    this.ref = ['indeed','naukrigulf','internshala']
    this.projectForm = this.fb.group({
      lang: [[], Validators.required],
      projects: [[], Validators.required]
    })
  }
  formSub(data:any){
    console.log('formdata',data.lang,data)
    this.data = data
    this.lang= data.lang
    this.projects = data.projects
  }

  // runScript() {
  //     const doc = document.createElement('script');
  //     doc.src = "assets/js/main.js";
  //     doc.type = 'text/javascript';
  //     doc.async = false;
  //     document.getElementsByTagName('head')[0].appendChild(doc);
  // }
  newProject = (proj:any) => (proj);
}
@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
  ]
})
class ListModule { }



