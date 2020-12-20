import { Injectable } from '@angular/core';
import { Hobby } from './hobby.model'
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private webReqService: WebRequestService) { }

  getHobbies() {
    return this.webReqService.get('hobbies');
  }

  getOneHobby(id: string){
    return this.webReqService.get(`hobbies/${id}`)
  }

  addHobby(hobby: Hobby) {
    return this.webReqService.post('hobbies', hobby);
  }

  updateHobby(id: string, title: string, indoorOutdoor: string) {
    let hobby = {
      title,
      indoorOutdoor
    }
    return this.webReqService.patch(`hobbies/${id}`, hobby);
  }

  deleteHobby(id: string) {
    return this.webReqService.delete(`hobbies/${id}`);
  }

  // getAll() {
  //   return this.hobbies;
  // }

  // get(id: number){
  //   return this.hobbies[id];
  // }

  // getId(hobby: Hobby){
  //   return this.hobbies.indexOf(hobby);
  // }

  // addHobby(hobby: Hobby){
  //   let newLength =this.hobbies.push(hobby);
  //   let index = newLength - 1;
  //   return index;
  // }

  // update(id: number, title: string, indoorOutdoor: string){
  //   let hobby =this.hobbies[id];
  //   hobby.title = title;
  //   hobby.indoorOutdoor = indoorOutdoor;
  // }

  // delete(id: number){
  //   this.hobbies.splice(id, 1);
  // }
}
