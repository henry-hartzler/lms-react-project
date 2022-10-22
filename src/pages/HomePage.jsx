import {  Card, CardImgOverlay, CardImg, CardTitle } from "reactstrap";
import learning from '../app/assets/img/article-learningstyles-banner.jpg'
const HomePage = () => {
    return (
          <div>
            <Card inverse>
              <CardImg
                alt="Card image cap"
                src={learning}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle tag="h1">
                  Welcome to Learning
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
      );
}
 
export default HomePage;