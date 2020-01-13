import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Navbar1Component } from './components/shared/navbar1/navbar1.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { AllopathyComponent } from './components/medicines/allopathy/allopathy.component';
import { AyurvedicComponent } from './components/medicines/ayurvedic/ayurvedic.component';
import { HomeopathyComponent } from './components/medicines/homeopathy/homeopathy.component';
import { HairCareComponent } from './components/medicines/hair-care/hair-care.component';
import { BodyCareComponent } from './components/medicines/body-care/body-care.component';
import { ElderyCareComponent } from './components/medicines/eldery-care/eldery-care.component';
import { MotherCareComponent } from './components/medicines/mother-care/mother-care.component';
import { RouterModule, Routes} from '@angular/router';
import { FitnessComponent } from './components/fitness/fitness.component';
import { FamilyNutritionComponent } from './components/fitness/family-nutrition/family-nutrition.component';
import { HFDComponent } from './components/fitness/hfd/hfd.component';
import { HealthSupplementsComponent } from './components/fitness/health-supplements/health-supplements.component';
import { DevicesComponent } from './components/devices/devices.component';
import { OrthopedicsComponent } from './components/devices/orthopedics/orthopedics.component';
import { MeasurementsComponent } from './components/devices/measurements/measurements.component';
import { BreathEasyComponent } from './components/devices/breath-easy/breath-easy.component';
import { SurgicalAccessoriesComponent } from './components/devices/surgical-accessories/surgical-accessories.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { HomeCareComponent } from './components/lifestyle/home-care/home-care.component';
import { SexualWellnessComponent } from './components/lifestyle/sexual-wellness/sexual-wellness.component';
import { SmokingCessationComponent } from './components/lifestyle/smoking-cessation/smoking-cessation.component';
import { SkincareComponent } from './components/medicines/skincare/skincare.component';
import { LoginComponent } from './components/shared/navbar/login/login.component';
import { SignupComponent } from './components/shared/navbar/signup/signup.component';
import { ContactComponent } from './components/shared/navbar/contact/contact.component';
import { CartComponent } from './components/shared/navbar/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'medicines', component: MedicinesComponent},
  { path: 'allopathy', component: AllopathyComponent},
  { path: 'ayurvedic', component: AyurvedicComponent},
  { path: 'bodycare', component: BodyCareComponent},
  { path: 'elderycare', component: ElderyCareComponent},
  { path: 'haircare', component: HairCareComponent},
  { path: 'homeopathy', component: HomeopathyComponent},
  { path: 'mothercare', component: MotherCareComponent},
  { path: 'skincare', component: SkincareComponent},
  { path: 'fitness', component: FitnessComponent},
  { path: 'family-nutrition', component: FamilyNutritionComponent},
  { path: 'hfd', component: HFDComponent},
  { path: 'health-supplements', component: HealthSupplementsComponent},
  { path: 'devices', component: DevicesComponent},
  { path: 'lifestyle', component: LifestyleComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'cart', component: CartComponent},
  { path: 'family-nutrition', component: FamilyNutritionComponent},
  { path: 'health-supplements', component: HealthSupplementsComponent},
  { path: 'hfd', component: HFDComponent},
  { path: 'orthopedics', component: OrthopedicsComponent},
  { path: 'measurements', component: MeasurementsComponent},
  { path: 'breath-easy', component: BreathEasyComponent},
  { path: 'surgical-accessories', component: SurgicalAccessoriesComponent},
  { path: 'home-care', component: HomeCareComponent},
  { path: 'sexual-wellness', component: SexualWellnessComponent},
  { path: 'smoking-cessation', component: SmokingCessationComponent},
 ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar1Component,
    FooterComponent,
    HomeComponent,
    MedicinesComponent,
    AllopathyComponent,
    AyurvedicComponent,
    HomeopathyComponent,
    HairCareComponent,
    BodyCareComponent,
    ElderyCareComponent,
    MotherCareComponent,
    FitnessComponent,
    FamilyNutritionComponent,
    HFDComponent,
    HealthSupplementsComponent,
    DevicesComponent,
    OrthopedicsComponent,
    MeasurementsComponent,
    BreathEasyComponent,
    SurgicalAccessoriesComponent,
    LifestyleComponent,
    HomeCareComponent,
    SexualWellnessComponent,
    SmokingCessationComponent,
    SkincareComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
