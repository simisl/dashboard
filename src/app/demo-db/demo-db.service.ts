import { PROJECTDB } from "./projects";
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class DemoDbService implements InMemoryDbService {
  constructor(){}
  createDb() {
    return {
      projectlist: PROJECTDB.projects
    }
  }
}
