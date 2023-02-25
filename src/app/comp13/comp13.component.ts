import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-comp13',
  templateUrl: './comp13.component.html',
  styleUrls: ['./comp13.component.css']
})
export class Comp13Component implements OnInit {
  useremail:any = ''
  constructor(private emailServ : EmailService) { }

  ngOnInit(): void {
    this.emailServ.emailID.subscribe(res => {
      this.useremail=res
    })
  }
  onEmailUpdate(em:any){
   this.useremail = em.value
   this.emailServ.emailID.next(em.value)

  }
}
