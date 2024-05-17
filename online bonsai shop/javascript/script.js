 function random()
        {
            var big = document.getElementById('1')
            big.innerHTML = 'Feedback form submitted successfully'
        }


function validate(){
    

    if(document.feedbackform.fname.value < 2 ){
      alert("Please provide your valid first name. ");
      document.feedbackform.fname.focus() ;
      return false;
    }


    if(document.feedbackform.lname.value.length < 2 ){
      alert("Please provide your valid last name. ");
      document.feedbackform.lname.focus() ;
      return false;
    }

    if (document.feedbackform.email.value == "" ) {
       alert("Please provide your valid email ");
       document.feedbackform.email.focus();
      return false;
    }


    if( document.feedbackform.phone.value == "" || isNaN( document.feedbackform.phone.value ) ||
            document.feedbackform.phone.value.length != 10 ) {
            
      alert( "Please provide your phone number in  format ##########." );
      document.feedbackform.phone.focus() ;
      return false;
    }

    if(document.feedbackform.yourmessage.value.length < 200 ){
      alert("Please Enter More Than 200 Characters in your message");
      document.feedbackform.yourmessage.focus() ;
      return false;
    }
    random();
    return (true);    
}

function cart(){
    alert("Added to cart successfully");
}
