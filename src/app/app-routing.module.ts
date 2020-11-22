import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'disponibilidade',
    loadChildren: () => import('./pages/disponibilidade/disponibilidade.module').then( m => m.DisponibilidadePageModule)
  },
  {
    path: 'alterar-dados',
    loadChildren: () => import('./pages/alterar-dados/alterar-dados.module').then( m => m.AlterarDadosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-paciente',
    loadChildren: () => import('./pages/cadastro-paciente/cadastro-paciente.module').then( m => m.CadastroPacientePageModule)
  },
  {
    path: 'cadastro-paciente/:id',
    loadChildren: () => import('./pages/cadastro-paciente/cadastro-paciente.module').then( m => m.CadastroPacientePageModule)
  },
  {
    path: 'nova-senha',
    loadChildren: () => import('./pages/nova-senha/nova-senha.module').then( m => m.NovaSenhaPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
