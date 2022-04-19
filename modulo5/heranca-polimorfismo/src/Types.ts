export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
  }

  export abstract class Place {
    constructor(protected cep: string) {}
  
    public getCep(): string {
      return this.cep;
    }
  }