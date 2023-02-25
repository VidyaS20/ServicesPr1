export class UserManualService{
 users=[
    {
      name:'Vidya',
      phone:123,
      city:'Solapur'
    },
    {
      name:'Rupa',
      phone:123,
      city:'Solapur'
    },
    {
      name:'Raghvendra',
      phone:123,
      city:'Solapur'
    }
  ]
  getUsers(){

  }

  getUserAlert(){
    alert('Alert message from Manual Created Service - No DI')
  }
}
