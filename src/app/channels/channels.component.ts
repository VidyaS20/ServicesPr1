import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor(private channelServ: ChannelService) {
    this.onChannel();
   }
  channelData:any;
  ngOnInit(): void {
  }
  onChannel(){
    this.channelData=this.channelServ.channels
  }
}
