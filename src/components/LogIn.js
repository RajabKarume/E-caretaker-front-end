import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Apartments from './Apartment';


const Login: React.FC = ({login, setLogin}) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [apartment, setApartment] = useState([])
 

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [user, setUser] = useState([])
  // const [login, setLogin] = useState(false)

  const api = "http://127.0.0.1:3000" 
 
  function handleSubmit(e){
    e.preventDefault()
    console.log(username)
    console.log(password)
    setLoading(true)
    const data = {
      username:`${username}`,
      password:`${password}`
    }
    fetch(`http://127.0.0.1:3000/login`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((r)=> {
      if (r.ok){
        r.json()
    .then((user)=> setApartment(user.apartments));
    setLogin(true);
    setLoading(false)
      }
       else {
        alert("invalid username or password")
        setLoading(false)
      }
      })
  } 


  useEffect(()=>{
    fetch(`${api}/me`)
    .then((r)=>{
      if(r.ok){
        r.json()
        .then((user)=> setUser(user))
        setLogin(true)
      }else{
        <h1>wrong password or username</h1>
      }
    })
  },[])
  console.log(user)
 
  if (login===true) return <Apartments apartment={apartment} />
 
  const tableStyle={
    padding: "8px", 
    width: "50%",
    paddingLeft: "25%",
    paddingTop: "15%",
    height: "1000px",
    backgroudColor: "green"
  }

  return (
    <div style={tableStyle} >
      <h1> E_CARETAKER</h1>
      <h1>LOGIN</h1>

    <Form
      
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type='text' name='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password type='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="submit" onClick={handleSubmit}>
          {loading? "Logging in ...": "Login"}
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Login;