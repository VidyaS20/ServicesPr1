import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor() { }

  channels=[
    {
      name: 'Star Plus',
      language: 'Hindi',
      subscribed:'Yes'
    },
    {
      name: 'ZEE TV',
      language: 'Hindi',
      subscribed:'Yes'
    },
    {
      name: 'Star Sports 1',
      language: 'English',
      subscribed:'No'
    }
  ]
}
