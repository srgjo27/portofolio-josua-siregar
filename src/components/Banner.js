import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import profileImg from "../assets/img/josua-siregar.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import cvFile from "../assets/files/cv.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Fullstack Engineer", "Web Developer", "Mobile Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

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
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portofolio</span>
                                    <h1>{'Hi I\'m Josua Siregar'}<span className="wrap"> {text}</span></h1>
                                    <p> As an Information Technology student at Del Institute of Technology, I have developed deep expertise as a Fullstack Engineer, with experience in system analysis and comprehensive web and mobile application development. I am proficient in HTML, CSS, JavaScript (Node.js), PHP, Java, Dart, and Python, as well as frameworks such as Laravel, React JS, Vue, and Flutter. These skills have been applied in leading and collaborating on challenging projects, where I have not only improved my problem-solving and database management abilities but also produced innovative and cutting-edge solutions. My commitment to hard work and effective communication have enabled me to deliver outstanding results and be ready to contribute to a dynamic and innovative team.</p>
                                    {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button> */}
                                    <button className="vvd">Download CV
                                        <a href={cvFile} download>
                                            <Download size={25} />
                                        </a>
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={profileImg} alt="" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}