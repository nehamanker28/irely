import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';

import { DashboardPage } from '../dashboard/dashboard.page';
import { ShiftPage } from '../shift/shift.page';
// import { OrderPage } from '../order/order.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'dashboard',
      //   children: [
      //     {
      //       path: '',
      //       component: DashboardPage,
      //     },
      //     {
      //       path: '',
      //       loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      //     }
      //   ]
      // },
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
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

