import { useState } from "react";

const StateFull = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState(null);

const [password, setPassword] = useState(null) ;
const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6){
        setError("Password must be at least 6 characters")
    }else{
setError('');
    }
    console.log(email, password, name);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
setPassword(e.target.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="text" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" required/>
        <br />
        <input type="submit" value="Submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StateFull;
