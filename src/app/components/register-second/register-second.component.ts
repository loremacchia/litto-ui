import { LocalStorageService } from './../../services/local-storage.service';
import { Interest } from 'src/app/model/interest';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCreate } from 'src/app/model/UserCreate';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.css'],
})
export class RegisterSecondComponent implements OnInit {
  id!: number;
  user: UserCreate = new UserCreate();
  form = new FormGroup({
    bio: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    // Usare storeUserSubInfo invece che tutta sta roba
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['user'] !== undefined) {
        this.form.controls['name'].setValue(window.history.state['user'].name);
        this.form.controls['surname'].setValue(
          window.history.state['user'].surname
        );
        this.form.controls['bio'].setValue(window.history.state['user'].bio);
        this.id = window.history.state['user'].id;
        this.user.setInitial(
          this.id,
          window.history.state['user'].bio,
          window.history.state['user'].name,
          window.history.state['user'].surname
        );
        this.user.setInterests(window.history.state['user'].interests);
      } else {
        this.id = this.localService.getLogId();
      }
    });
  }

  sendData() {
    this.user.setInitial(
      this.id,
      this.form.controls['bio'].value,
      this.form.controls['name'].value,
      this.form.controls['surname'].value
    );
    this.router.navigateByUrl('/display-interests', {
      state: { id: this.id, user: this.user },
    });
  }
}
