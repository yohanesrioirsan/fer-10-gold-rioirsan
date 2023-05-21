import { Container} from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";


const CarDetail = () => {

  const { id } = useParams();
  const [car, setCar] = useState();
  useEffect(() => {
    console.log('useEffect');
    const url = 'https://bootcamp-rent-cars.herokuapp.com/customer/car/' + id;
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCar(data);
    })

   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div className="car-detail-hero">
        <NavigationBar />
        <SearchForm />
      </div>
      <Container className="paket-container">
        <Row>
          <Col lg={9}>
            <Card className="paket">
              <Container>
                <Card.Title className="pt-3">Tentang Paket</Card.Title>
                <Card.Title className="pt-2">Include</Card.Title>
                <Card.Text className="list pt-2">
                    <li>Apa saja yang teremasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk tiket Wisata</li>
                    <li>Sudah termasuk pajak.</li>
                </Card.Text>
                <Card.Title className="pt-2">Exclude</Card.Title>
                <Card.Text className="list pt-2">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </Card.Text>
                <Card.Title className="pt-2">Refund, Reschedule, Overtime</Card.Title>
                <Card.Text className="list pt-2">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </Card.Text>
              </Container>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <Container>
                {car && car.image ? (
                  <Card.Img variant="top" src={car.image}></Card.Img>
                  ) : (
                    <div className="default-background">
                    </div>
                )}
                <Card.Title className="pt-3">
                  {car ? `${car.name}` : null}
                </Card.Title>
                <Card.Text className="fw-bold pt-2">
                  {car ? <h6>Total Rp.{car.price}</h6> : null} 
                </Card.Text>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CarDetail;