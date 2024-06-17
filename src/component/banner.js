import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import face from '../assents/face2.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} data-aos="fade-up-right">
            <span className="tagline">
              Welcome to my Portfolio
            </span>
            <h1>{`Hi I'm Anas Badri`}</h1>
            <h1><span className="wrap">{text}</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley</p>
            <button onClick={() => console.log("connect")}>Contact Me</button>
          </Col>
          <Col xs={12} md={6} xl={5} data-aos="fade-left">
            <img src={face} alt="headerimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
