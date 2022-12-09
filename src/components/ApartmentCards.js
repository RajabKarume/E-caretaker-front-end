import React from 'react';
import { Card } from 'antd';
import Tenant from './Tenant';


const ApartmentCard: React.FC = ({name, location, id, tenant, clicked, setClicked }) => 

(
  <Card title="Apartments" key={id} >
    <button onClick={ ()=> setClicked(!clicked)} >Veiw tenants</button>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={name}
      extra={clicked? <Tenant tenant={tenant}/> : "open" }
      key={id}
    >
      {location}
    </Card>
  </Card>
);

export default ApartmentCard;