export class Cd {
    description: string[];
    isLend: boolean;
  
    constructor(public name: string) {
      this.isLend = false;
    }
  }