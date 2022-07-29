
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth({ setAuthUser }) {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigator = useNavigate();
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("--input-->", input);
    if (input.password !== '' && input.username !== '') {
      axios.post('/user/auth', input)
        .then((res) =>{
          // console.log("---res.data-->",res.data.Role.nameRole)
          setAuthUser({...res.data, nameRole: res.data.Role.nameRole})
          if (!res.data.id) navigator('/')
          navigator('/home')
        });

    }
  };
  return (
    <div className="mx-auto mt-5" style={{ width: '400px' }}>
      <div style={{ height: '250px' }} />
      <form className="container bg-light rounded-3 py-3" align="center" onSubmit={onSubmitHandler}>

        <div className="mb-3">
          <h2 className="text-dark">Your Email</h2>
          <input
            value={input.email}
            onChange={changeHandler}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <h2 className="text-dark">Password</h2>
          <input
            value={input.password}
            onChange={changeHandler}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-danger">Sign in!</button>
        <div className="my-2 my-sm-0">
          <Link to="/home" className="btn btn-light">Skip!</Link>
        </div>
      </form>
    </div>
  );
}
