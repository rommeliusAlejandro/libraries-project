import { Injectable } from '@angular/core';

export class ConfigService {

  branding: string;
  host: string;
  copyright: string;


  constructor(branding: string, host: string, copyright: string) {
    this.branding = branding;
    this.host = host;
    this.copyright = copyright;
  }
}
