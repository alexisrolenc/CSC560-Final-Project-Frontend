import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hobby } from 'src/app/shared/hobby.model';
import { HobbiesService } from 'src/app/shared/hobbies.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-hobby-details',
  templateUrl: './hobby-details.component.html',
  styleUrls: ['./hobby-details.component.scss']
})
export class HobbyDetailsComponent implements OnInit {

  hobby: Hobby;
  hobbyId: string;
  new: boolean;

  constructor(private hobbiesService: HobbiesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.hobby = new Hobby();
      if (params.id) {
        this.hobbyId = params.id;
        const returnedHobby = this.hobbiesService.getOneHobby(params.id);
        console.log(returnedHobby);
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if(this.new){
      this.addHobby(form.value);
    } else {
      this.updateHobby(this.hobbyId, form.value.title, form.value.indoorOutdoor);
    }
    this.router.navigateByUrl('/');
  }

  addHobby(newHobby) {
    this.hobbiesService.addHobby(newHobby).subscribe((hobby: any) => {
      console.log(hobby);
    });
  }

  updateHobby(id, title, indoorOutdoor) {
    this.hobbiesService.updateHobby(id, title, indoorOutdoor).subscribe((hobby: any) => {
      console.log(hobby);
    });
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
