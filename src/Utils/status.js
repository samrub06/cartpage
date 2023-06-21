
export const statusTitle = (status)=>  {
    switch (status) {
     case 'SENT_TO_POS':
     return "TILL"
     default:
      return status;
   }
  
   
   }
   


   export const statusColor = (status)=>  {
    switch (status) {
     case 'PAID':
     return "green"
     case 'CANCELLED':
     return "red"
     case 'SENT_TO_POS':
      return "white"
      case 'IN_PROGRESS':
      return "yellow"
     default:
   }
   return status
   }