import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const CourseCard = ({course}) => {
    const { image, name, courseNumber } = course;
    return (
            <Card
            style={{
              width: '18rem',
              height: '25rem'
            }}
             >
            <img
              alt="name"
              src={image}
              height="50%"
              object-fit="cover"
            />
            <CardBody>
              <CardTitle tag="h5">
                {courseNumber}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {name}
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
    );
}

export default CourseCard;