import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css']
})
export class Comp11Component implements OnInit {
  useremail:any =''
  constructor(private emailServ : EmailService) { }

  ngOnInit(): void {
    this.emailServ.emailID.subscribe(res =>{
      this.useremail=res
    })
  }

  email ='Vidya@gmail.com'
  onEmailUpdate(em:any){
    this.email = em.value
    this.emailServ.emailID.next(em.value)

  }
}
