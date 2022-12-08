import React from 'react';
import { Card } from 'antd';
import Tenant from './Tenant';


const ApartmentCard: React.FC = ({name, location, key, tenant, clicked, setClicked }) => 

(
  <Card title="Apartments">
    <button onClick={ ()=> setClicked(!clicked)} >Veiw tenants</button>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={name}
      extra={clicked? <Tenant tenant={tenant}/> : "open" }
      key={key}
    >
      {location}
    </Card>
  </Card>
);

export default ApartmentCard;