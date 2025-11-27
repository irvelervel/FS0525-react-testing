import { useState } from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap'

const HiddenSection = () => {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          <h2 className="text-center my-3">Componente da testare</h2>
          <div className="text-center">
            <Button
              variant={show ? 'danger' : 'success'}
              onClick={() => {
                setShow(!show)
              }}
            >
              {show ? 'NASCONDI' : 'MOSTRA'}
            </Button>
          </div>
          {show && (
            <Card className="mt-3">
              <Card.Img variant="top" src="https://placebear.com/400/400" />
              <Card.Body>
                <Card.Title>Orsetto</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HiddenSection
