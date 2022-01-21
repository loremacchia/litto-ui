import { FileUploadService } from './../../services/file-upload.service';
import { EditorConstant } from './../constants/editor';
import { LocalStorageService } from './../../services/local-storage.service';
import { SearchReturn } from './../../model/SearchReturn';
import { PlanService } from 'src/app/services/plan.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Step } from './../../model/Step';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TUI_ARROW } from '@taiga-ui/kit';
import {tuiPure} from '@taiga-ui/cdk';
import {map, mapTo, share, startWith, switchMap, tap} from 'rxjs/operators';
import {Observable, of, timer} from 'rxjs';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
  selector: 'app-step-create',
  templateUrl: './step-create.component.html',
  styleUrls: ['./step-create.component.css'],
})
export class StepCreateComponent implements OnInit {
  userId!: number;
  activeItemIndex = 2;
  planWeek!: number;
  // planDuration!: number;
  selectedMaterial!: { [key: string]: any };
  clicked = false;

  steps: any[] = [];
  printableSteps: string[] = [];
  enabled = this.steps;

  readonly arrow = TUI_ARROW;

  public readonly tools = EditorConstant.tools;

  readonly items = [
    {
      label: 'YouTube',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="160 128 112 96 112 160 160 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><path d="M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
    },
    {
      label: 'PDF',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="96" y1="136" x2="160" y2="136" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="168" x2="160" y2="168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>',
    },
    {
      label: 'Link',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
    },
    {
      label: 'Podcast',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="120" r="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M68.3,151.2a64,64,0,1,1,119.4,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M76.4,208.9a96,96,0,1,1,103.2,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
    },
    {
      label: 'Text',
      icon: 'tuiIconEditLarge',
    },
  ];
  form = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
  });

  formPodcast = new FormGroup({
    link: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  formYouTube = new FormGroup({
    link: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  formText = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  formLink = new FormGroup({
    link: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  formPDF = new FormGroup({
    title: new FormControl(''),
    file: new FormControl(),
    fileLink : new FormControl("")
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalStorageService,
    private router: Router,
    private planService : PlanService,
    private fileUploadService: FileUploadService,
  ) {}

  ngOnInit(): void {
    this.userId = this.localService.getLogId();
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['number'] !== undefined) {
        this.planWeek = window.history.state['number'];
        if (this.localService.getCreatingStep(this.planWeek)) {
          this.populateForm(this.localService.getCreatingStep(this.planWeek))
        }
      } else {
        this.router.navigateByUrl('/create-plan-first');
      }
    });
  }

  populateForm(prevStep: { [key: string]: any }) {
    this.form.controls['title'].setValue(prevStep['title']);
    this.form.controls['subtitle'].setValue(prevStep['subtitle']);
    this.steps = prevStep["material"];
    for (let s of this.steps){
      this.printableSteps.push(s["title"])
    }
  }

  addMaterialComp(item: {}) {
    this.selectedMaterial = item;
  }

  goCustStepsNext() {
    this.goCustSteps();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigateByUrl('/step-create', {
          state: { number: this.planWeek + 1 },
        })
      );
  }

  goCustStepsPrev() {
    this.goCustSteps();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigateByUrl('/step-create', {
          state: { number: this.planWeek - 1 },
        })
      );
  }

  goCustSteps() {
    this.localService.setCreatingStep(this.createJson());
  }

  createJson() {
    const dict = {
      planWeek: this.planWeek,
      title: this.form.controls['title'].value,
      subtitle: this.form.controls['subtitle'].value,
      material: this.orderMaterial(),
    };
    return dict;
  }

  orderMaterial() {
    let lst = [];
    for (let s of this.printableSteps) {
      for (let st of this.steps) {
        if (s == st['title']) {
          lst.push(st);
        }
      }
    }
    return lst;
  }

  stepAdd(type: string) {
    switch (type) {
      case 'Podcast':
        this.steps.push({
          type: type,
          title: this.formPodcast.controls['title'].value,
          link: this.formPodcast.controls['link'].value,
          description: this.formPodcast.controls['description'].value,
        });
        this.printableSteps.push(
          this.formPodcast.controls['title'].value as string
        );
        this.formPodcast.controls['title'].setValue('');
        this.formPodcast.controls['link'].setValue('');
        this.formPodcast.controls['description'].setValue('');
        break;
      case 'PDF':
        this.steps.push({
          type: type,
          title: this.formPDF.controls['title'].value,
          file: this.formPDF.controls['fileLink'].value,
        });
        this.printableSteps.push(
          this.formPDF.controls['title'].value as string
        );
        this.formPDF.controls['title'].setValue('');
        this.formPDF.controls['fileLink'].setValue('');
        this.formPDF.controls['file'].setValue(undefined);
        break;
      case 'YouTube':
        this.steps.push({
          type: type,
          title: this.formYouTube.controls['title'].value,
          link: this.formYouTube.controls['link'].value,
          description: this.formYouTube.controls['description'].value,
        });
        this.printableSteps.push(
          this.formYouTube.controls['title'].value as string
        );
        this.formYouTube.controls['title'].setValue('');
        this.formYouTube.controls['link'].setValue('');
        this.formYouTube.controls['description'].setValue('');
        break;
      case 'Text':
        this.steps.push({
          type: type,
          title: this.formText.controls['title'].value,
          text: this.formText.controls['text'].value,
        });
        this.printableSteps.push(
          this.formText.controls['title'].value as string
        );
        this.formText.controls['title'].setValue('');
        this.formText.controls['text'].setValue('');
        break;
      case 'Link':
        this.steps.push({
          type: type,
          link: this.formLink.controls['link'].value,
          title: this.formLink.controls['title'].value,
          description: this.formLink.controls['description'].value,
        });
        this.printableSteps.push(
          this.formLink.controls['title'].value as string
        );
        this.formLink.controls['link'].setValue('');
        this.formLink.controls['title'].setValue('');
        this.formLink.controls['description'].setValue('');
        break;

      default:
        break;
    }
    console.log(this.steps)
    console.log(this.printableSteps);
  }

  finishStepEditing(){
    if(this.form.controls['title'].value != "" || this.form.controls['subtitle'].value != ""){
      this.goCustSteps();
    }
    let plan = JSON.parse( this.localService.getCreatingPlan(this.userId) as string);
    plan["duration"] = this.localService.getCreatingStepsNumber();
    let steps = this.localService.getCreatingSteps();
    plan["steps"] = steps;
    this.planService.createPlan(plan).subscribe((planIdd) => {
      this.localService.freeCreatingPlanAndSteps(),
      this.router.navigateByUrl('/view-plan', {
        state: { planId: planIdd },
      })
    });
    

  }



  
  @tuiPure
  get loading$(): Observable<ReadonlyArray<File>> {
      return this.requests$.pipe(
          map(file => (file instanceof File ? [file] : [])),
          startWith([]),
      );
  }

  @tuiPure
  private get requests$() {
      return this.formPDF.controls["file"].valueChanges.pipe(
          map(file =>
              file ? this.fileUploadService.uploadPdf(file).subscribe(event => {
                event = JSON.stringify(event)
                let e = JSON.parse(event);
                if(e["url"] != "False"){
                  console.log(e["url"])
                  this.formPDF.controls["fileLink"].setValue(e["url"]);
                }
            }): of(null),
          ),
          share(),
      );
  }
}