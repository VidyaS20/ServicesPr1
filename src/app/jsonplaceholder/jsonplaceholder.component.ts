import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css']
})
export class JsonplaceholderComponent implements OnInit {
  users:any;
  totalRecords:any;
i: any;
  constructor(private jsonServ: JsonplaceholderService) { }

  ngOnInit(): void {

  }

  onLoadData(){
    this.jsonServ.getJsonData().subscribe(res=>{
      console.log(res)
      this.users = res;
      this.totalRecords = res.length;
    })
  }


}
