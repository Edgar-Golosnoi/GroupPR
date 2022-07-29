import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import CheckCards from '../CheckCards';

export default function Lists({authUser}) {
  const [input,setInput] = useState({nameEmployer:'',nameMentor:'', user_id: authUser.id})
  const navigator = useNavigate();
  const [lists,setLists] = useState([])
  useEffect(() => {
    if (!window.initState) {
      axios('lists')
        .then((res) => setLists(res.data));
    } else {
      delete window.initState;
    }
  }, []);
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("--input-->", input);
    if (input.nameEmployer !== '' && input.nameMentor !== '') {
      axios.post('/lists', input)
        .then((res) =>{
          console.log("res.data lists--->",res.data);
          setLists(res.data)
          // console.log("---res.data-->",res.data.Role.nameRole)
          // if (!res.data.length) navigator('/')
          navigator('/lists')
        });

    }
  };
  console.log("lists---->",lists);
  return (
    <div className="mx-auto mt-5" style={{ width: '400px' }}>
      <form onSubmit={onSubmitHandler} className="container bg-light rounded-3 py-3" align="center" >
        <div className="mb-3">
          <h2 className="text-dark">Имя сотрудника</h2>
          <input
            value={input.nameEmployer}
            onChange={changeHandler}
            type="text"
            name="nameEmployer"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Имя сотрудника"
          />
        </div>
        <div className="mb-3">
          <h2 className="text-dark">Имя наставника</h2>
          <input
            value={input.nameMentor}
            onChange={changeHandler}
            type="text"
            name="nameMentor"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Имя наставника"
          />
        </div>
        <button type="submit" className="btn btn-light">Добавить</button>
      </form>
      {/* {lists?.map((el)=><CheckCards key={el.id} checklist={el} />)} */}
    </div>

  );
}
