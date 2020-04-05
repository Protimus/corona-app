import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'statistic',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../statistic/statistic.module').then(m => m.StatisticPageModule)
          }
        ]
      },
      {
        path: 'locale',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../locale/locale.module').then(m => m.LocalePageModule)
          }
        ]
      },
      {
        path: 'containment',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../containment/containment.module').then(m => m.ContainmentPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/statistic',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/statistic',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
