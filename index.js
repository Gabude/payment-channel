class Payment {
    constructor(mobile, POS, web) {
       this.a = mobile;
       this.b = POS;
       this.c = web;
     }
     
     pay(customer, option) {
       return `Paying ${customer} ${this[option]}`;
     }
     
   }
   
   let makePayment = new Payment('via mobile', 'with POS', 'via web');
   
   makePayment.pay('Ola', 'c')
   