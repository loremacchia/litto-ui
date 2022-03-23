import { LocalStorageService } from './../../../../services/local-storage.service';
import { FileUploadService } from '../../../../services/file-upload.service';
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
  user: UserCreate = new UserCreate();
  form = new FormGroup({
    bio: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });
  imageUrl: string =
    'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';
  loading: boolean = false; // Flag variable to check if the file has been uploaded
  file!: File;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private localService: LocalStorageService,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      // Checking if the user has already modified those data and, 
      // after going to the interests page, he has come back there
      if (window.history.state['user'] !== undefined) {
        this.form.controls['name'].setValue(window.history.state['user'].name);
        this.form.controls['surname'].setValue(
          window.history.state['user'].surname
        );
        this.form.controls['bio'].setValue(window.history.state['user'].bio);
        this.imageUrl = window.history.state['user'].imageUrl;
        this.user.setInitial(
          window.history.state['user'].bio,
          window.history.state['user'].name,
          window.history.state['user'].surname,
          this.imageUrl
        );
        this.user.setInterests(window.history.state['user'].interests);
      }
    });
    this.localService.getLogId();
  }

  // Sending data to the interests page 
  sendData() {
    this.user.setInitial(
      this.form.controls['bio'].value,
      this.form.controls['name'].value,
      this.form.controls['surname'].value,
      this.imageUrl
    );
    this.router.navigateByUrl('/user/display-interests', {
      state: { user: this.user },
    });
  }

  // Uploading the images sent by the user
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
