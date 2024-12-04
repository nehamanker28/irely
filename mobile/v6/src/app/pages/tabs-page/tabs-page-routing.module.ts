import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

import { DashboardPage } from '../dashboard/dashboard.page';
import { ShiftPage } from '../shift/shift.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            component: DashboardPage,
          },
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'shift',
        children: [
          {
            path: '',
            component: ShiftPage,
          },
          {
            path: '',
            loadChildren: () => import('../shift/shift.module').then(m => m.ShiftPageModule)
          }
        ]
      },
      // {
      //   path: 'order',
      //   children: [
      //     {
      //       path: '',
      //       component: OrderPage,
      //     },
      //     {
      //       path: '',
      //       loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      //     }
      //   ]
      // },
      {
        path: '',
        children: [
          {
            path: '',
            component: ShiftPage,
          },
          {
            path: '',
            loadChildren: () => import('../shift/shift.module').then(m => m.ShiftPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

