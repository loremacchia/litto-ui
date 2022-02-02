import { TuiNotification, TuiNotificationsService } from '@taiga-ui/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { PlanService } from 'src/app/services/plan.service';
import { Step } from '../../../../model/Step';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
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
  userId!: number;
  planInfo = {
    planId: 0,
  };

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
    private readonly notificationsService: TuiNotificationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.userId = this.localService.getLogId();
    this.activatedRoute.paramMap.subscribe(() => {
      if (window.history.state['planId'] !== undefined) {
        this.planInfo.planId = window.history.state['planId'];
      }
      this.planService
        .getActiveStep(this.userId, this.planInfo.planId)
        .subscribe((step) => {
          // step.normalize();
          this.step = step;
          console.log(this.step.material);
          this.totalMaterials = this.step.material.length;
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
      .completeStep(this.userId, this.planInfo.planId)
      .subscribe((val) => {
        if (val) {
          console.log('finish plan');
          this.notificationsService
            .show('You have completed the plan!!', {
              status: TuiNotification.Success,
            })
            .subscribe();
        } else {
          console.log('finish step');
          this.notificationsService
            .show('You have completed the step!', {
              status: TuiNotification.Success,
            })
            .subscribe();
        }
        this.localService.removeMaterialIndex();
        this.router.navigateByUrl('/home/home-page');
      });
  }
}
