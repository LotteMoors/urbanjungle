
export default function Validation(values){
    
   const errors = {};
   

   if(!values.username) {
      return <p>Username required</p>
   } 

   if(!values.email) {
       errors.email = "Email required"
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0.9-]+\.[A-Z]{2,}$/i.test(values.email)){
       errors.email = "Email address is invalid"
   } 

   if (!values.password){
    errors.password = 'Password is required';
  }else if (values.password.length > 6 ){
    errors.password = 'Password +6 characters';
  }
  

  if (!values.passConfirm ) {
    errors.passConfirm = 'Passwords don\'t match';
  }

   return errors;

}

