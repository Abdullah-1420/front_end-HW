function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      console.log(` The sum number of ${N} Is ${total} `)   
  }

 numberSum(5)

 //------------------------------

 function summationEven(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        if ( i % 2 == 0){
            total += i;
        }
            
      }
      console.log(` The sum even number of ${N} Is ${total} `)
  }
summationEven(5)