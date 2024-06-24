'use client'

import { useState } from 'react';
import Form from '@/components/Form/Form'; 
import { Lista } from '@/components/Lista/Lista';

export default function Page() {
  const [citas, setCitas] = useState([]);

  return (
    <>        
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Form citas={citas} setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <Lista citas={citas} setCitas={setCitas} />          
          </div>
        </div>
      </div>
    </>
  );
}
