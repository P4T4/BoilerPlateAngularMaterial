import { TestBed } from '@angular/core/testing';
import { NotiflixService } from './notiflix.service';
import * as Notiflix from 'notiflix';

describe('NotiflixService', () => {
  let service: NotiflixService;
  let stubOnInitialize: jasmine.Spy<() => void>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotiflixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be to validate init Block', () => {
    const stubBlock = spyOn(service.notiflix.Block, 'init');
    service.initializeNotiflix();
    expect(stubBlock).toHaveBeenCalled();
  });

  it('Should be to validate init Confirm', () => {
    const stubConfirm = spyOn(service.notiflix.Confirm, 'init');
    service.initializeNotiflix();
    expect(stubConfirm).toHaveBeenCalled();
  });
  it('Should be to validate init Loading', () => {
    const stubLoading = spyOn(service.notiflix.Loading, 'init');
    service.initializeNotiflix();
    expect(stubLoading).toHaveBeenCalled();
  });
  it('Should be to validate init Notify', () => {
    const stubNotify = spyOn(service.notiflix.Notify, 'init');
    service.initializeNotiflix();
    expect(stubNotify).toHaveBeenCalled();
  });
  it('Should be to validate init Confirm', () => {
    const stubReport = spyOn(service.notiflix.Report, 'init');
    service.initializeNotiflix();
    expect(stubReport).toHaveBeenCalled();
  });

  it('[(Block Method)] should be set config and called initializeNotiflix()', () => {
    stubOnInitialize = spyOn(service, 'initializeNotiflix');
    const optionsToSet: Notiflix.IBlockOptions = {
      className: 'clase-creada-para-simular-cambio',
    };
    service.setBlockConfig(optionsToSet);
    expect(stubOnInitialize).toHaveBeenCalled();
    expect(service.configBlockInit).toEqual(optionsToSet);
  });

  it('[(Confirm Method)] should be set config and called initializeNotiflix()', () => {
    stubOnInitialize = spyOn(service, 'initializeNotiflix');
    const optionsToSet: Notiflix.IConfirmOptions = {
      className: 'clase-creada-para-simular-cambio',
    };
    service.setConfirmConfig(optionsToSet);
    expect(stubOnInitialize).toHaveBeenCalled();
    expect(service.configConfirmInit).toEqual(optionsToSet);
  });

  it('[(Loading Method)] should be set config and called initializeNotiflix()', () => {
    stubOnInitialize = spyOn(service, 'initializeNotiflix');
    const optionsToSet: Notiflix.ILoadingOptions = {
      className: 'clase-creada-para-simular-cambio',
    };
    service.setLoadingConfig(optionsToSet);
    expect(stubOnInitialize).toHaveBeenCalled();
    expect(service.configLoadingInit).toEqual(optionsToSet);
  });

  it('[(Notify Method)] should be set config and called initializeNotiflix()', () => {
    stubOnInitialize = spyOn(service, 'initializeNotiflix');
    const optionsToSet: Notiflix.INotifyOptions = {
      className: 'clase-creada-para-simular-cambio',
    };
    service.setNotifyConfig(optionsToSet);
    expect(stubOnInitialize).toHaveBeenCalled();
    expect(service.configNotifyInit).toEqual(optionsToSet);
  });

  it('[(Report Method)] should be set config and called initializeNotiflix()', () => {
    stubOnInitialize = spyOn(service, 'initializeNotiflix');
    const optionsToSet: Notiflix.IReportOptions = {
      className: 'clase-creada-para-simular-cambio',
    };
    service.setReportConfig(optionsToSet);
    expect(stubOnInitialize).toHaveBeenCalled();
    expect(service.configReportInit).toEqual(optionsToSet);
  });

  it('[(initialize)] should be to call every init instance of Notiflix', () => {
    stubOnInitialize = spyOn(service, 'initializeNotiflix');
    service.initializeNotiflix();
    expect(stubOnInitialize).toHaveBeenCalled();
  });

  it('Should be to return notiflix Intance', () => {
    expect(service.notiflix).toEqual(Notiflix);
  });
});
