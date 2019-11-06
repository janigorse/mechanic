import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NavParams } from "@ionic/angular";

@Component({
  selector: "add-work-modal",
  templateUrl: "addWorkModal.page.html"
})
export class AddWorkModalPage {
  constructor(public modalController: ModalController) {}

  hideAddWorkModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
