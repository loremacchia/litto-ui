import { NotifierComponent } from './../../../injectables/notifier/notifier.component';
import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { PlanService } from 'src/app/services/plan.service';
import { Step } from '../../../../model/Step';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';
import { TuiPdfViewerOptions, TuiPdfViewerService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-step-complete',
  templateUrl: './step-complete.component.html',
  styleUrls: ['./step-complete.component.css'],
})
export class StepCompleteComponent implements OnInit {
  activeItemIndex = 1;
  planId!:string;
  userId!:string;
  step!: Step;
  totalMaterials: number = 1;
  materialIndex: number = this.localService.getMaterialIndex();

  playerWidth = window.innerWidth * 0.775;
  playerHeight = this.playerWidth * 0.65;
  urlSafe!: SafeResourceUrl;

  // @ViewChild('player') player: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private pdfService: TuiPdfViewerService,
    private localService: LocalStorageService,
    private planService: PlanService,
    private router: Router,
    private notifier: NotifierComponent
  ) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.userId = this.localService.getLogId();
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['planId'] !== undefined) {
        this.planId = window.history.state['planId'];
      }
      this.planService
        .getActiveStep(this.userId, this.planId)
        .subscribe((step) => {
          // step.normalize();
          this.step = step;
          console.log(this.step.materials);
          this.totalMaterials = this.step.materials.length;
        },
        error => {
          this.notifier.notifyError("Cannot retrieve the step");
          this.router.navigateByUrl('/home/home-page');
        });
    });
  }

  sanitize(s: string) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(s);
    return this.urlSafe;
  }

  prevMaterial() {
    this.materialIndex--;
    this.localService.setMaterialIndex(this.materialIndex);
  }
  nextMaterial() {
    this.materialIndex++;
    this.localService.setMaterialIndex(this.materialIndex);
  }

  show(
    actions: PolymorpheusContent<TuiPdfViewerOptions>,
    url: string | undefined
  ) {
    let realUrl = url
    this.pdfService
      .open(this.sanitizer.bypassSecurityTrustResourceUrl(realUrl as string), {
        label: 'Taiga UI',
        actions,
      })
      .subscribe();
  }

  completeStep() {
    this.planService
      .completeStep(this.userId, this.planId, this.step.planWeek)
      .subscribe((val) => {
        if (val) {
          this.notifier.notifySuccess('You have completed the step!!');
          this.localService.removeMaterialIndex();
          this.router.navigateByUrl('/home/home-page');
        } else {
          this.notifier.notifyError('Something has gone wrong');
        }
      });
  }
}
