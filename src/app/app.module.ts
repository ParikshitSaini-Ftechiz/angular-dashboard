import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { ListingComponent } from './dashboard/listing/listing.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';
// PrimeNg Modules
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { TabsComponent } from './dashboard/tabs/tabs.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { AccordionComponent } from './dashboard/accordion/accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DoctorListComponent } from './dashboard/pages/doctors/doctor-list/doctor-list.component';
import { AddDoctorComponent } from './dashboard/pages/doctors/add-doctor/add-doctor.component';
import { DoctorProfileComponent } from './dashboard/pages/doctors/doctor-profile/doctor-profile.component';
import { CalenderComponent } from './dashboard/pages/calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ExpenseReportComponent } from './dashboard/pages/reports/expense-report/expense-report.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { AppointmentsListComponent } from './dashboard/pages/appointments/appointments-list/appointments-list.component';
import { BookAppointmentsComponent } from './dashboard/pages/appointments/book-appointments/book-appointments.component';
import { StaffListComponent } from './dashboard/pages/staff/staff-list/staff-list.component';
import { AddStaffComponent } from './dashboard/pages/staff/add-staff/add-staff.component';
import { StaffProfileComponent } from './dashboard/pages/staff/staff-profile/staff-profile.component';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { HomePageComponent } from './landingPage/home-page/home-page.component';
import { AboutUsComponent } from './landingPage/about-us/about-us.component';
import { FooterComponent } from './landingPage/common/footer/footer.component';
import { MainHeaderComponent } from './landingPage/common/main-header/main-header.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardContentComponent,
    ListingComponent,
    ChatComponent,
    GraphsComponent,
    TabsComponent,
    ProfileComponent,
    AccordionComponent,
    DoctorListComponent,
    AddDoctorComponent,
    DoctorProfileComponent,
    CalenderComponent,
    ExpenseReportComponent,
    AppointmentsListComponent,
    BookAppointmentsComponent,
    StaffListComponent,
    AddStaffComponent,
    StaffProfileComponent,
    HomePageComponent,
    AboutUsComponent,
    FooterComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartModule,
    ProgressBarModule,
    ToastModule,
    TableModule,
    TagModule,
    RatingModule,
    AccordionModule,
    TabViewModule,
    FullCalendarModule,
    AutoCompleteModule,
    SliderModule,
    MultiSelectModule,
    CalendarModule,
    DialogModule,
    MenuModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
