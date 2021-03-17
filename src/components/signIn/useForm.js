import { useState } from 'react';


 export const useForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passConfirm: ''
  }); 
 


  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: [value]
    }));
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();    
  
}
return { handleChange, values, handleSubmit };
}

