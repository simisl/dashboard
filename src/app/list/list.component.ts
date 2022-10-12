import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() message = new EventEmitter<string>();

  constructor(private service: UserService) { }

  ngOnInit(): void {
    let data = this.service.user
    this.message.emit(data.name)
  }

}
