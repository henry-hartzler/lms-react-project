import {  Card, CardImgOverlay, CardImg, CardTitle } from "reactstrap";
import learning from '../app/assets/img/classroom.png';
import { Container } from "reactstrap";
import '../App.css';

const HomePage = () => {

    return (
          <Container className="blackPearl">
            <Card inverse>
              <CardImg
                alt="Card image cap"
                src={learning}
                className="img-fluid min-vh-100"
              />
              <CardImgOverlay>
                <CardTitle className="p-3" tag="h1">
                  <span className="blackPearl badge text-white">Welcome to <span className="text-success">Fresh Start</span> LMS</span>
                  
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </Container>
      );
}
 
export default HomePage;