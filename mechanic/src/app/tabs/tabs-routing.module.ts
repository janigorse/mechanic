import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "workTab",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../workTab/workTab.module").then(m => m.WorkTabPageModule)
          }
        ]
      },
      {
        path: "customerTab",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../customerTab/customerTab.module").then(
                m => m.CustomerTabPageModule
              )
          }
        ]
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab3/tab3.module").then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/workTab",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/workTab",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
