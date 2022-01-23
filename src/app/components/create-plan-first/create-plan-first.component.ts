import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { FileUploadService } from './../../services/file-upload.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { SearchReturn } from './../../model/SearchReturn';
import { PlanService } from 'src/app/services/plan.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-plan-first',
  templateUrl: './create-plan-first.component.html',
  styleUrls: ['./create-plan-first.component.css'],
})
export class CreatePlanFirstComponent implements OnInit {
  searchActive = '';
  userId!: number;
  activeItemIndex = 2;
  imageUrl =
    'https://www.idmore.it/wp-content/uploads/2016/12/ef3-placeholder-image.jpg';

  loading: boolean = false; // Flag variable
  file!: File;

  form = new FormGroup({
    level: new FormControl(1, Validators.required),
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    // weeks: new FormControl(1),
    discord: new FormControl(true, Validators.required),
    tags: new FormControl([]),
  });
  search!: SearchReturn;
  constructor(
    private fileUploadService: FileUploadService,
    private localService: LocalStorageService,
    private homeService: HomeService,
    private readonly notificationsService: TuiNotificationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.localService.getLogId();
    if (this.localService.getCreatingPlan(this.userId)) {
      this.parseJson(this.localService.getCreatingPlan(this.userId) as string);
    }
  }

  searchTag() {
    this.homeService.searchForString(this.searchActive).subscribe((search) => {
      this.search = search;
    });
  }

  goCustSteps() {
    if (this.form.valid) {
      this.localService.setCreatingPlan(this.createJson());
      this.router.navigateByUrl('/step-create', { state: { number: 1 } });
    } else {
      this.notificationsService
        .show('Complete the plan infos', { status: TuiNotification.Error })
        .subscribe();
    }
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

  createJson() {
    const dict = {
      userId: this.userId,
      imageUrl: this.imageUrl,
      level: this.form.controls['level'].value,
      title: this.form.controls['title'].value,
      subtitle: this.form.controls['subtitle'].value,
      // weeks: this.form.controls['weeks'].value,
      discord: this.form.controls['discord'].value,
      tags: this.form.controls['tags'].value,
    };
    return JSON.stringify(dict);
  }

  parseJson(dict: string) {
    var d = JSON.parse(dict);
    this.imageUrl = d['imageUrl'];
    this.form.controls['level'].setValue(d['level']);
    this.form.controls['title'].setValue(d['title']);
    this.form.controls['subtitle'].setValue(d['subtitle']);
    // this.form.controls['weeks'].setValue(d['weeks']);
    this.form.controls['discord'].setValue(d['discord']);
    this.form.controls['tags'].setValue(d['tags']);
  }
}
