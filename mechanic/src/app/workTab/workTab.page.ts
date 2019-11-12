import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddWorkModalPage } from "./addWorkModal/addWorkModal.page";

@Component({
  selector: "app-workTab",
  templateUrl: "workTab.page.html",
  styleUrls: ["workTab.page.scss"]
})
export class WorkTabPage {
  constructor(public modalController: ModalController) {}

  async showAddWorkModal() {
    const modal = await this.modalController.create({
      component: AddWorkModalPage
    });
    return await modal.present();
  }
}
