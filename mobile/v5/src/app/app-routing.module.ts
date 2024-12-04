import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'shift',
    loadChildren: () => import('./pages/shift/shift.module').then( m => m.ShiftPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'configuration-table-update',
    loadChildren: () => import('./pages/configuration-table-update/configuration-table-update.module').then( m => m.ConfigurationTableUpdatePageModule)
  },
  {
    path: 'configuration-table-view',
    loadChildren: () => import('./pages/configuration-table-view/configuration-table-view.module').then( m => m.ConfigurationTableViewPageModule)
  },
  {
    path: 'shift-inspection',
    loadChildren: () => import('./pages/shift-inspection/shift-inspection.module').then( m => m.ShiftInspectionPageModule)
  },
  {
    path: 'shift-hosepippingcheck',
    loadChildren: () => import('./pages/shift-hosepippingcheck/shift-hosepippingcheck.module').then( m => m.ShiftHosepippingcheckPageModule)
  },
  {
    path: 'shift-loadinventory',
    loadChildren: () => import('./pages/shift-loadinventory/shift-loadinventory.module').then( m => m.ShiftLoadinventoryPageModule)
  },
  {
    path: 'shift-loadinventory-add-item',
    loadChildren: () => import('./pages/shift-loadinventory-add-item/shift-loadinventory-add-item.module').then( m => m.ShiftLoadinventoryAddItemPageModule)
  },
  {
    path: 'shift-transfer',
    loadChildren: () => import('./pages/shift-transfer/shift-transfer.module').then( m => m.ShiftTransferPageModule)
  },
  {
    path: 'shift-download-export-data',
    loadChildren: () => import('./pages/shift-download-export-data/shift-download-export-data.module').then( m => m.ShiftDownloadExportDataPageModule)
  },  
  {
    path: 'invoice',
    loadChildren: () => import('./pages/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'invoice-add-item',
    loadChildren: () => import('./pages/invoice-add-item/invoice-add-item.module').then( m => m.InvoiceAddItemPageModule)
  },
  {
    path: 'invoice-add-site',
    loadChildren: () => import('./pages/invoice-add-site/invoice-add-site.module').then( m => m.InvoiceAddSitePageModule)
  },
  {
    path: 'invoice-add-tax',
    loadChildren: () => import('./pages/invoice-add-tax/invoice-add-tax.module').then( m => m.InvoiceAddTaxPageModule)
  },
  {
    path: 'invoice-add-comment',
    loadChildren: () => import('./pages/invoice-add-comment/invoice-add-comment.module').then( m => m.InvoiceAddCommentPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'customer-detail',
    loadChildren: () => import('./pages/customer-detail/customer-detail.module').then( m => m.CustomerDetailPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'invoice-outofgas',
    loadChildren: () => import('./pages/invoice-outofgas/invoice-outofgas.module').then( m => m.InvoiceOutofgasPageModule)
  },
  {
    path: 'login-forgotpassword',
    loadChildren: () => import('./pages/login-forgotpassword/login-forgotpassword.module').then( m => m.LoginForgotpasswordPageModule)
  },
  {
    path: 'login-connection',
    loadChildren: () => import('./pages/login-connection/login-connection.module').then( m => m.LoginConnectionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'invoice-completed',
    loadChildren: () => import('./pages/invoice-completed/invoice-completed.module').then( m => m.InvoiceCompletedPageModule)
  },
  {
    path: 'customer-list',
    loadChildren: () => import('./pages/customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },
  {
    path: 'payment-list',
    loadChildren: () => import('./pages/payment-list/payment-list.module').then( m => m.PaymentListPageModule)
  },
  {
    path: 'pdf-list',
    loadChildren: () => import('./pages/pdf-list/pdf-list.module').then( m => m.PdfListPageModule)
  },
  {
    path: 'payment-receive',
    loadChildren: () => import('./pages/payment-receive/payment-receive.module').then( m => m.PaymentReceivePageModule)
  },
  {
    path: 'configuration-meter-device',
    loadChildren: () => import('./pages/configuration-meter-device/configuration-meter-device.module').then( m => m.ConfigurationMeterDevicePageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'customer-detail-info',
    loadChildren: () => import('./pages/customer-detail-info/customer-detail-info.module').then( m => m.CustomerDetailInfoPageModule)
  },
  {
    path: 'invoice-tax',
    loadChildren: () => import('./pages/invoice-tax/invoice-tax.module').then( m => m.InvoiceTaxPageModule)
  },
  {
    path: 'invoice-add-contract',
    loadChildren: () => import('./pages/invoice-add-contract/invoice-add-contract.module').then( m => m.InvoiceAddContractPageModule)
  },
  {
    path: 'configuration-settings',
    loadChildren: () => import('./pages/configuration-settings/configuration-settings.module').then( m => m.ConfigurationSettingsPageModule)
  },
  {
    path: 'line-flush-transfer',
    loadChildren: () => import('./pages/line-flush-transfer/line-flush-transfer.module').then( m => m.LineFlushTransferPageModule)
  },
  {
    path: 'tankwagon-inventory',
    loadChildren: () => import('./pages/tankwagon-inventory/tankwagon-inventory.module').then( m => m.TankwagonInventoryPageModule)
  },
  {
    path: 'tankwagon-inventory-details',
    loadChildren: () => import('./pages/tankwagon-inventory-details/tankwagon-inventory-details.module').then( m => m.TankwagonInventoryDetailsPageModule)
  },
  {
    path: 'invoice-add-signature',
    loadChildren: () => import('./pages/invoice-add-signature/invoice-add-signature.module').then( m => m.InvoiceAddSignaturePageModule)
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
