function validFun(event){
var p1 = document.getElementById('enter').innerHTML;
var p2 = document.getElementById('renter').innerHTML;

if ((p1.value === p2.value) && (fname.value !=== lname.value))
    {
              alert("form submitted")
              };
          else {
              
                
      event.preventDefault();
  alert("invalid format!:, 'your password must match and your first name must differ from lastname'");
                  return false }
    };

btnSub.addEventListener('click',validFun);            
       

