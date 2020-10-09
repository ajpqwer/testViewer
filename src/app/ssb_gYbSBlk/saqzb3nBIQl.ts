import { Component, OnInit } from '@angular/core';
import { sFLnqNersxG } from '../seo6nMczbi3/sEkZaPw27_w/sksbkId_3v_';
import { skKSx2qCxz6 } from '../seo6nMczbi3/sTXBbu51s0v';
import { sLZJn5pTLNM } from './sG_LyBMijbM/sk2D3w30ex6';
import { ssXbZVsVLUj } from '../sgjKx58hdsc/sv3P_m3ZqGq';
import { Router, ActivatedRoute } from '@angular/router';
import { sfZvdeg1SEg } from '../sXN8SsuUoVc/ss8BfTPFzXa/sXnPkyk_wId';
import { snM7RRvA7cL } from '../seo6nMczbi3/sEkZaPw27_w/syvlD20Xo8d';

import { Subscription, Observable, timer} from 'rxjs';
import { s3kZfxLtBbb } from '../seo6nMczbi3/sEkZaPw27_w/s2i7zqWMdZl';
@Component({
  selector: 'ssqs1chZvss',
  templateUrl: './sdqx0wdkfq_.html',
  styleUrls: ['./sAa_baYshhl.css']
})
export class s6qZ5s2sbae implements OnInit {


    s01mqbsFbTi: sFLnqNersxG; 
    
    sbFlbrl0b3K:string;sbs7jxliYqQ:string;
    sxbsLbbbcgz:s3kZfxLtBbb=new s3kZfxLtBbb();
    sHSJlD52Elb:boolean=false;
    sGlVnPxG5ld:snM7RRvA7cL[];
    sBbIR7es5Zx:string=",";

    sPbsqxufbb5:string=",";

    slloH0bT8Yt:string="Y";    
    seb0qZaubk5:Subscription;
    constructor( s01mqbsFbTi: sFLnqNersxG,private sxvqibxQov2 : skKSx2qCxz6,
      private su0mqWUDF5P: Router ,private sACIb3bGREs:sfZvdeg1SEg) 
      {    
      this.s01mqbsFbTi=sxvqibxQov2.s01mqbsFbTi;
        
        this.seb0qZaubk5 = this.sACIb3bGREs.sNs2MUlRx5x().subscribe(()=>{       
          if(this.sACIb3bGREs.sbqecuVhWec()==this.slloH0bT8Yt){
            this.slldlmpaqlP();
          }                   
        });                 
      } 
  
      private ss5aelobsl2: Subscription;


      sqNVPliV6cD: Observable<number> = timer(0, 1000);
    ngOnInit(): void {
      sessionStorage.setItem("ad","12223");
      var iPageTabID = sessionStorage.getItem("tabID");
      
      this.ss5aelobsl2 = this.sqNVPliV6cD.subscribe((seconds) =>   {
        
        if(this.sxvqibxQov2.sA6UqdVHnhQ!=undefined){
        
        }

        if(this.sxvqibxQov2.s01mqbsFbTi.sbgdsGLsFsb!="" && this.sGlVnPxG5ld==undefined){
          this.sFMUVSBReos();
          this.snhw2QUWXX2();
          this.ss5aelobsl2.unsubscribe();
        }
      });

      
    }

    ngOnDestroy(): void {
    }


    sFMUVSBReos(){

      const sYA7mndfOaK = new FormData();
      
      this.sxvqibxQov2.sstnXKsYlMC(sYA7mndfOaK)
          .subscribe((sKlQdHb32RM: any) =>{
             if(sKlQdHb32RM.p3==="Y"){
              this.sbFlbrl0b3K=sKlQdHb32RM.p2;
              this.sxbsLbbbcgz.sbFlbrl0b3K=sKlQdHb32RM.p2;
              this.sxbsLbbbcgz.sRbfzsgRwOs=sKlQdHb32RM.p1;
              this.sbs7jxliYqQ=sKlQdHb32RM.p4;
              this.sHSJlD52Elb=true;
              this.sxvqibxQov2.sb2zlGwX8bh=sKlQdHb32RM.p6;
              this.sxvqibxQov2.s01mqbsFbTi.sRbfzsgRwOs=sKlQdHb32RM.p1;
              this.sxvqibxQov2.s01mqbsFbTi.sbFlbrl0b3K=sKlQdHb32RM.p2;
              this.sACIb3bGREs.sAs8EZs1Usa(sKlQdHb32RM.p1,sKlQdHb32RM.p2,"N");
              this.st7bibX3dkc();
              
             }else {
              this.sxvqibxQov2.sb2zlGwX8bh="en";
              this.st7bibX3dkc();
             }
            },
          (sFsDbaH6uO5) => {
            this.sxvqibxQov2.sb2zlGwX8bh="en";
            this.sHSJlD52Elb=false;
            this.st7bibX3dkc();            
                      
          }      
      );  
     }

    snhw2QUWXX2(){
      
      const sYA7mndfOaK = new FormData();
      
      this.sxvqibxQov2.sihaZUoReFS(sYA7mndfOaK)
          .subscribe((sGlVnPxG5ld: any[]) =>{
             if(sGlVnPxG5ld.length>1){
              this.sGlVnPxG5ld=sGlVnPxG5ld;
             }
            },
          (sFsDbaH6uO5) => {
                    
                      
          }      
      );  
     }

     filterSelected_mt(shSgwmsdIIx:string){
      if(this.sBbIR7es5Zx.indexOf(","+shSgwmsdIIx+",") > -1) {
        this.sBbIR7es5Zx =this.sBbIR7es5Zx.replace(","+shSgwmsdIIx+",", ",");
        this.sACIb3bGREs.shmaqbMLe5C(this.sBbIR7es5Zx);
      } else {
        this.sBbIR7es5Zx =this.sBbIR7es5Zx+shSgwmsdIIx+",";
        this.sACIb3bGREs.shmaqbMLe5C(this.sBbIR7es5Zx);
      }
     }
     adTypeSelected_mt(shSgwmsdIIx:string){
      if(this.sPbsqxufbb5.indexOf(","+shSgwmsdIIx+",") > -1) {
        this.sPbsqxufbb5 =this.sPbsqxufbb5.replace(","+shSgwmsdIIx+",", ",");
        this.sACIb3bGREs.s6sWo6ZsLlU(this.sPbsqxufbb5);
      } else {
        this.sPbsqxufbb5 =this.sPbsqxufbb5+shSgwmsdIIx+",";
        this.sACIb3bGREs.s6sWo6ZsLlU(this.sPbsqxufbb5);
      }
     }

     slldlmpaqlP(){
      const sYA7mndfOaK = new FormData();
      sYA7mndfOaK.append('p1', this.sxbsLbbbcgz.sRbfzsgRwOs);
      
    
      this.sxvqibxQov2.slldlmpaqlP(sYA7mndfOaK)
          .subscribe((sYaPsD7IO8D: any) =>{
              if(sYaPsD7IO8D.p3="Y")
              {
                this.sbFlbrl0b3K="";
                this.sACIb3bGREs.sAs8EZs1Usa(undefined,this.sbFlbrl0b3K,"N"); //"N" because logout us done now
                this.sHSJlD52Elb=false;
              }
            },
          (sFsDbaH6uO5) => {
                      
          }      
      );  
     }

     sYaMtbkbVLq:string;
     sbNB53AZWwC:string;

     sNpjbSdxnbW:string;
     sb7qSLwrsxc:string;
     sSbl8pxqdKS:string;
     sbqIdWsB5fy:string;
     sDabs5vSJql:string;
     szmTrVxYF3t:string;sB555lQq8MS:string;
     sYaPsD7IO8D:string;slbGXnabqbq:string;stY7Ga5hos5:string;
     st7bibX3dkc(){

      ssXbZVsVLUj.sb2zlGwX8bh=this.sxvqibxQov2.sb2zlGwX8bh;
      let s55xuMsaxol: sLZJn5pTLNM = new sLZJn5pTLNM();
      
      this.sYaMtbkbVLq= s55xuMsaxol.sddeamXs3bB("s1LYPsWWins");
      this.sbNB53AZWwC= s55xuMsaxol.sddeamXs3bB("sf2sGKvQa7e");
      this.sSbl8pxqdKS= s55xuMsaxol.sddeamXs3bB("smWxuBbkxss");
      this.szmTrVxYF3t= s55xuMsaxol.sddeamXs3bB("smdyomCsJke");
      this.sbqIdWsB5fy= s55xuMsaxol.sddeamXs3bB("sLdbHsfxiPa");
      this.sNpjbSdxnbW= s55xuMsaxol.sddeamXs3bB("s0lUdsOM0Lq");
      this.sb7qSLwrsxc= s55xuMsaxol.sddeamXs3bB("sU3DxwPfZJl");
      this.sYaPsD7IO8D= s55xuMsaxol.sddeamXs3bB("sRiZiEYrPOD");
      this.slbGXnabqbq= s55xuMsaxol.sddeamXs3bB("sx8qabjmYCC");
      this.stY7Ga5hos5= s55xuMsaxol.sddeamXs3bB("ssx352AHXes");
      this.sDabs5vSJql= s55xuMsaxol.sddeamXs3bB("sb8nXw5MX3m");
      this.sB555lQq8MS= s55xuMsaxol.sddeamXs3bB("sYTb5jsgvbR");
      this.sACIb3bGREs.sbIMWJXmDld();

    }
}
