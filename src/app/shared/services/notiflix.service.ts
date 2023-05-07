import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root',
})
export class NotiflixService {
  private notiflixInstance: typeof Notiflix = Notiflix;

  configBlockInit: Notiflix.IBlockOptions = {};
  configConfirmInit: Notiflix.IConfirmOptions = {};
  configLoadingInit: Notiflix.ILoadingOptions = {};
  configNotifyInit: Notiflix.INotifyOptions = {};
  configReportInit: Notiflix.IReportOptions = {};

  public get notiflix(): typeof Notiflix {
    return this.notiflixInstance;
  }

  initializeNotiflix(): void {
    this.notiflix.Block.init(this.configBlockInit);
    this.notiflix.Confirm.init(this.configConfirmInit);
    this.notiflix.Loading.init(this.configLoadingInit);
    this.notiflix.Notify.init(this.configNotifyInit);
    this.notiflix.Report.init(this.configReportInit);
  }

  setBlockConfig(configBlockInit: Notiflix.IBlockOptions): void {
    this.configBlockInit = configBlockInit;
    this.initializeNotiflix();
  }

  setConfirmConfig(configConfirmInit: Notiflix.IConfirmOptions): void {
    this.configConfirmInit = configConfirmInit;
    this.initializeNotiflix();
  }

  setLoadingConfig(configLoadingInit: Notiflix.ILoadingOptions): void {
    this.configLoadingInit = configLoadingInit;
    this.initializeNotiflix();
  }

  setNotifyConfig(configNotifyInit: Notiflix.INotifyOptions): void {
    this.configNotifyInit = configNotifyInit;
    this.initializeNotiflix();
  }

  setReportConfig(configReportInit: Notiflix.IReportOptions): void {
    this.configReportInit = configReportInit;
    this.initializeNotiflix();
  }
}
