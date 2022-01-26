import { FileUploadService } from './../../services/file-upload.service';
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
  loading: boolean = false; // Flag variable
  file!: File;
  imageUrl: string =
    'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';
  user: UserCreate = new UserCreate();
  form = new FormGroup({
    bio: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalStorageService,
    private router: Router,
    private fileUploadService: FileUploadService
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
        this.imageUrl = window.history.state['user'].imageUrl;
        this.user.setInitial(
          this.id,
          window.history.state['user'].bio,
          window.history.state['user'].name,
          window.history.state['user'].surname,
          this.imageUrl
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
      this.form.controls['surname'].value,
      this.imageUrl
    );
    this.router.navigateByUrl('/display-interests', {
      state: { id: this.id, user: this.user },
    });
  }

  uploadImage(event: any) {
    this.file = event.target.files[0];
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe((event) => {
      event = JSON.stringify(event);
      let e = JSON.parse(event);
      if (e['url'] != 'False') {
        console.log(e['url']);
        this.imageUrl = e['url'];
      }
    });
  }
}
