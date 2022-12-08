import React from 'react';
import { Card } from 'antd';

const ApartmentCard: React.FC = ({name, location, key}) => (
  <Card title="Apartments">
    <Card type="inner" key={key} title={name} extra={<a href='/tenant'  >More</a >}>
      {location}
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={name}
      extra={<a href='/tenant' >More</a >}
      key={key}
    >
      {location}
    </Card>
  </Card>
);

export default ApartmentCard;