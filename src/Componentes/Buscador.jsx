import React, { useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap';


const Buscador = ({setValorBusqueda, setOrdenar }) => {
    const [valorCaja, setValorCaja] = useState (''); 
  return (
    <Container>
     <InputGroup className="Container">
        <Form.Control
          placeholder="Ingrese personaje"
          aria-label="Ingrese personaje"
          aria-describedby="basic-addon2"
          onChange={(e)=>setValorCaja(e.target.value)}
        />
        <Button variant="success" id="button-addon2" onClick={()=>setValorBusqueda(valorCaja)}>
          Buscar
        </Button>
        <Button variant="primary" id="button-addon2" onClick={()=>{setOrdenar(true)}}>
          Ordenar A-Z
        </Button>
      </InputGroup>
    

    </Container>
  )
}



export default Buscador;