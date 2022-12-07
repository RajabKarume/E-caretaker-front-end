import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';


const LogIn: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        LOGIN
      </Button>
      <Drawer
        title="Log in to your account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Name"
                rules={[{ required: true, message: 'Please enter username' }]}
              >
                <Input placeholder="Please enter username" />
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

                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              LogIn
            </Button>
          </Space>
      </Drawer>
    </>
  );
};

export default LogIn;