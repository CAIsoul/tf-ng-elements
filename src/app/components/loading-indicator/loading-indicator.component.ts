import { Component, Input } from '@angular/core';

const DEFAULT_DELAY = 300;
const DEFAULT_TITLE = "Loading";
const DEFAULT_PROGRESS_TOTAL = 100;

@Component({
  selector: 'tf-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
  private _isVisible: boolean = false;
  private _showDelay: number = DEFAULT_DELAY;
  private _subtitle: string = DEFAULT_TITLE;
  private _showProgress: boolean = false;
  private _progressPercent: number = 0;
  private _progressTotal: number = DEFAULT_PROGRESS_TOTAL;
  private _progressStatus: string = "";

  public get isVisible() {
    return this._isVisible;
  }

  public get subtitle() {
    return this._subtitle;
  }

  public get showProgress() {
    return this._showProgress;
  }

  public get progressStatus() {
    return this._progressStatus;
  }

  constructor() {

  }

  show() {

  }
}
