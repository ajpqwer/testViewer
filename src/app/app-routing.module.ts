import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sNd2zsrxsc5 } from '../app/sXR2btIeebw/sMLO0P5HLQM';
import { shVndsaDGbi } from './slQ0tNmsaO2/sekd_6P_gK5';
import { sdT0syxswsd } from './sQccejlabZB/sdQPlsli_G_';
import { sskyyBnhc2u } from './slfDeqsp7g8/s_VSFKYagnN';
import { szIvtadnab8 } from './sQIA5tara3b/ssasqblfUZl';

const routes: Routes = [

   { path: 'showMain', component: sNd2zsrxsc5 }
  ,{ path: 'callViewer/:sAxyqEHl5a2/:p2_vb', component: sskyyBnhc2u}
  ,{ path: 'contactUs', component: sdT0syxswsd}
  ,{ path: 'userSettings/:sAxyqEHl5a2', component: szIvtadnab8}
  ,{ path: 'resetSecretNumber', component: shVndsaDGbi}
  ,{ path: '', redirectTo: '/showMain' ,pathMatch:'full'}  ];


  @NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
