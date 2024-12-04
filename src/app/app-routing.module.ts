import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { ListingComponent } from './dashboard/listing/listing.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { TabsComponent } from './dashboard/tabs/tabs.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AccordionComponent } from './dashboard/accordion/accordion.component';
import { DoctorListComponent } from './dashboard/pages/doctors/doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './dashboard/pages/doctors/doctor-profile/doctor-profile.component';
import { AddDoctorComponent } from './dashboard/pages/doctors/add-doctor/add-doctor.component';
import { CalenderComponent } from './dashboard/pages/calender/calender.component';
import { ExpenseReportComponent } from './dashboard/pages/reports/expense-report/expense-report.component';
import { AppointmentsListComponent } from './dashboard/pages/appointments/appointments-list/appointments-list.component';
import { BookAppointmentsComponent } from './dashboard/pages/appointments/book-appointments/book-appointments.component';
import { StaffListComponent } from './dashboard/pages/staff/staff-list/staff-list.component';
import { AddStaffComponent } from './dashboard/pages/staff/add-staff/add-staff.component';
import { StaffProfileComponent } from './dashboard/pages/staff/staff-profile/staff-profile.component';
import { HomePageComponent } from './landingPage/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: HomePageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardContentComponent },
      { path: 'listing', component: ListingComponent },
      { path: 'graphs', component: GraphsComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'accordion', component: AccordionComponent },
      { path: 'doctor-list', component: DoctorListComponent },
      { path: 'doctor-profile', component: DoctorProfileComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'calender', component: CalenderComponent },
      { path: 'expense-report', component: ExpenseReportComponent },
      { path: 'Appointment-list', component: AppointmentsListComponent },
      { path: 'Book-Appointment', component: BookAppointmentsComponent },
      { path: 'Staff-list', component: StaffListComponent },
      { path: 'add-Staff', component: AddStaffComponent },
      { path: 'staff-profile', component: StaffProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
