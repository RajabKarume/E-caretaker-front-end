import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';
// import { keyboard } from '@testing-library/user-event/dist/keyboard';

// const { Option } = Select;

const AddTenant: React.FC = ( ) => {
  const [open, setOpen] = useState(false);
    const [addTenant, setAddTenant] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [noOfBedroom, setNoOfBedroom] = useState()
    const [rent, setRent] = useState("")
    const [status, setStatus] = useState()


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  function handleSubmit(e){
    e.preventDefault()
    fetch('http://127.0.0.1:3000/tenants', {method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({name, email,phoneNo, houseNo, noOfBedroom, rent, status}),
    }).then((r)=>r.json())
    .then ((data)=> setAddTenant(data))
    console.log(addTenant)
    
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add New Tenant
      </Button>
      <Drawer
        title="Add a new tenant"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input 
                placeholder="Please enter user name" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type="text" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="email"
                rules={[{ required: true, message: 'Please enter email' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter email"
                  value={email}
                  type="email"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="house number"
                label="house number"
                rules={[{ required: true, message: 'Please select an house number' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter house numbe"
                  value={houseNo}
                  type="number"
                  onChange={(e)=> setHouseNo(e.target.value)}

                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Phone number"
                label="Phone number"
                rules={[{ required: true, message: 'Please choose the Phone number' }]}
              >
                 <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter phone number"
                  value={phoneNo}
                  type="number"
                  onChange={(e)=> setPhoneNo(e.target.value)}

                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="noOfBedroom"
                label="noOfBedroom"
                rules={[{ required: true, message: 'Please choose the noOfBedroom' }]}
              >
              <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter rent"
                  value={noOfBedroom}
                  type="integer"
                  onChange={(e)=> setNoOfBedroom(e.target.value)}

                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="rent"
                label="rent"
                rules={[{ required: true, message: 'Please choose the rent' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter rent"
                  value={rent}
                  type="integer"
                  onChange={(e)=> setRent(e.target.value)}

                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col span={12}>
              <Form.Item
                name="Rent status"
                label="Rent status"
                rules={[{ required: true, message: 'Please enter Rent status' }]}
              >
               <Input
                  style={{ width: '100%' }}
                  placeholder="Please enter rent"
                  value={status}
                  type="integer"
                  onChange={(e)=> setStatus(e.target.value)}

                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddTenant;