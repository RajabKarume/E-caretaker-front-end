import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Apartments from './Apartment';
// import Tenant from "./Tenant"

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [apartment, setApartment] = useState([])
  // const [tenant, setTenant] = useState([])
  // const [click, setClick] = useState(false)
  // const [myTenant, setMyTenant] = useState([])

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [user, setUser] = useState([])
  const [login, setLogin] = useState(false)

  const api = "http://127.0.0.1:3000" 
 
  function handleSubmit(e){
    e.preventDefault()
    console.log(username)
    console.log(password)
    setLoading(true)
    fetch(`http://127.0.0.1:3000/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password}),
    }).then((r)=>r.json())
    .then((user)=> setApartment(user.apartments))
    setLogin(true)
    setLoading(false)
  

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
  // console.log(tenant)

  
//   function handleClick(){
//       fetch(`${api}/tenants`)
//       .then((r)=>{
//         if(r.ok){
//           r.json()
//           .then((data)=> setTenant(data))
//           setClick(true)

//         }
//       })
    

// }
// const filterTenant = tenant.filter((tnt)=>{
//   return tnt.apartment_id === apartment.id
// })
// setMyTenant(filterTenant)

  if (login===true) return <Apartments apartment={apartment} />
  // if (login===true&&click===true) return 
  //   <Tenant name={myTenant.name} 
  //   email={myTenant.email} 
  //   houseNo={myTenant.house_number} 
  //   key={myTenant.id} 
  //   phoneNo={myTenant.phone_number}
  //   noOfBedrooms={myTenant.number_of_bedrooms}
  //   rent={myTenant.rent}
  //   status={myTenant.is_paid} />
  

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