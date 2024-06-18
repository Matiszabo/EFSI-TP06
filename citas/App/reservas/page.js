import { Navbar } from "@/components/Navbar/Navbar"
import { useState } from 'react';
import { Form } from "@/components/Form/Form";
import {Lista} from "@/components/Lista/Lista";

export default function Page() {
    
  const [citas, setCitas] = useState([]);

  return (<>
        <Navbar></Navbar>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <h2>Crear mi Cita</h2>
              <Form citas={citas} setCitas={setCitas} />
            </div>
            <div className="one-half column">
              <Lista citas={citas} setCitas={setCitas}/>          
            </div>
          </div>
        </div>
      </>
  );
}
  