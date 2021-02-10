import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public emailPatter: string = '\\S+@\\S+\\.\\S+';
  public positiveNumberPatter: string = '[0-9]+';
}