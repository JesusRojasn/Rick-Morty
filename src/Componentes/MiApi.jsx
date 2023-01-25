import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Spinner, Container, Modal } from 'react-bootstrap';


const MiApi = ({ valorBusqueda, ordenar }) => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  
  const [nombre, setNombre] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
    getData();

  },[]);
 
  useEffect(() => {
   
    ordenando();

  },[ordenar]);

  async function getData() {
    const res = await fetch("https://rickandmortyapi.com/api/character/?page=1"
    );
    const data = await res.json();
    setPersonajes(data.results);
    setCargando(true);
  }

  function ordenando() {
    const nuevoOrdenado = personajes.sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    setPersonajes([...nuevoOrdenado])
  }



  return cargando ? (
    <Container>
      <Row>
        {personajes
            .filter((p) => { 
          return p.name.toLowerCase().includes(valorBusqueda.toLowerCase());
          })
            .map((p) => {
            return (
              <Col  key={p.id} style={{ marginTop: "4vh", marginBottom: "5rem"}}>
                <Card style={{ width: "19rem", backgroundColor: "#F3EE7B", borderRadius: "2rem"}}>
                  <Card.Img style={{borderRadius: "2rem 2rem 0 0"}} variant="top" src={p.image} />
                  <Card.Body>
                    <Container
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <Row>
                        <Card.Title style={{ textAlign: "center" }}>
                          {p.name}
                        </Card.Title>
                        <div
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <Button
                            variant="outline-primary"
                            onClick={() => {
                              handleShow(false);
                              setNombre(p);
                            }}
                          >
                            Ver Mas
                          </Button>
                        </div>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      <>
        <Modal show={show} onHide={handleClose}>
          <div nombre={[nombre]}>
            <Modal.Header className="d-flex" style={{justifyContent: "center", backgroundColor: "#22C1C3" }}>
              <Modal.Title>{nombre.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ justifyContent: "center", backgroundColor: "#22C1C3"}}>
              <div className="d-flex" style={{ justifyContent: "center", backgroundColor: "#22C1C3"  }}>
                <img
                  alt={nombre.name}
                  src={nombre.image}
                  style={{  borderRadius: "50%", marginBottom: "3rem"}}
                />
              </div>
              <div nombre={[nombre]}>
                <p>
                  <strong>Tipo de especie:</strong> {nombre.species}
                </p>
                <p>
                  <strong>Estado:</strong> {nombre.status}
                </p>
                <p>
                  <strong>Genero:</strong> {nombre.gender}
                </p>
     
                <p>
                  <strong>Localidad: </strong>
                  {nombre.location ? nombre.location.name : "sin Localidad"}
                </p>
                <p>
                  <strong>Origen: </strong>
                  {nombre.origin ? nombre.origin.name : 'hola'}
                  </p>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "center", backgroundColor: "#22C1C3"}} >
              <Button variant="danger" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    </Container>
  ) : (
    <div>
      <h3>Cargando...</h3>
      <div className="Container1">
      <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
};
export default MiApi;