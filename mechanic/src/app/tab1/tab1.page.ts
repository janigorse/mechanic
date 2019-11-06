import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddWorkModalPage } from "./addWorkModal/addWorkModal.page";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(public modalController: ModalController) {}

  async showAddWorkModal() {
    const modal = await this.modalController.create({
      component: AddWorkModalPage
    });
    return await modal.present();
  }
}
