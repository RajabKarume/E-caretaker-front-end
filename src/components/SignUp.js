import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';
// import Password from 'antd/es/input/Password';


const SignUp: React.FC = ({setLogin}) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
function handleSubmit(e){
  e.preventDefault()
  const data = {
    username:`${username}`,
    password:`${password}`
  }


  fetch(`http://127.0.0.1:3000/signup`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then ((r)=>{
    if (r.ok){
      r.json()
      .then((user)=> console.log(user))
      setLogin(true)
    }
  })
}
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        SIGNUP
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="username"
                rules={[{ required: true, message: 'Please enter username' }]}
              >
                <Input placeholder="Please enter username" value={username} onChange={(e)=> setUsername(e.target.value)} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Password"
                label="Password"
                type= "password"
                rules={[{ required: true, message: 'Please enter password' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter Password"
                  type= "password"
                  value={password} 
                  onChange={(e)=> setPassword(e.target.value)}

                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default SignUp;