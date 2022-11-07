import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';

function From(props) {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');

    const handleApi = () =>{
      axios.post("https://reqres.in/api/login",{
        email : email,
        name:name
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error)
      })
    }

  return (
    <div>
      <div className="card" style={{margin:"20px"}}>
      <InputText style={{border:"0",width:"200px",height:"30px",borderRadius:"5px",marginRight:"10px"}} value={name} onChange={(e) => setName(e.target.value)}
      placeholder="Name" id="name" />
      <InputText style={{border:"0",width:"200px",height:"30px",borderRadius:"5px",marginRight:"10px"}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" />
      
      <Button onClick={handleApi} label="Submit" style={{background:"lightblue",border:0,color:"#fff",padding:"4px 8px",fontWeight:600,cursor:"pointer"}}/>
      </div>
    </div>
  );
}

export default From;
