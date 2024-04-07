import React from 'react';
import Image from 'next/image';
import pict1 from '@/asssets/img/MaskGroup.png';
import cover from '@/asssets/img/bluecover.png';
import logo from '@/asssets/img/Peworldlogo.png';
import Link from 'next/link';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ position: 'relative' }}>
            <Image src={logo} alt="logo" style={{ position: 'absolute', top: 0, left: 0 }} />
            <Image src={pict1} alt="background1" style={{ width: '650px', height: '700px' }} />
            <Image src={cover} alt="cover" style={{ width: '650px', height: '700px', position: 'absolute', top: 0, left: 0, opacity: 0.5, zIndex: 1 }} /> {/* Menambahkan style position: absolute dan zIndex: 1 */}
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masuukkan Password" />
              </Form.Group>
              <a href="#" style={{ textAlign: "right", color: "black" }}><p>lupa password</p></a>
              <div style={{ textAlign: "center" }}>
                <Link href="/landingpages">
                <Button variant="warning">Masuk</Button>
                </Link>
                <p>Anda belum punya akun?<Link href="/auth/register/registerworker" style={{ color: "orange" }}>Daftar Disini</Link></p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
