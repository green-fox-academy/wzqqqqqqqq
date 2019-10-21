'use strict';

export abstract class vehicle {
  protected speed: number;
  protected color: string;
  protected brand: string;

  constructor(speed : number, color : string, brand : string) {
    this.speed = speed;
    this.color = color;
    this.brand = brand;
  }
}
