import { Customer } from "src/app/commonClasses/Customer/customer";

export class WorkInput {
  constructor(
    public title: string,
    public dateDone: Date,
    public description: string,
    public customer: Customer
  ) {}
}
