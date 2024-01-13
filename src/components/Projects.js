import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import projImg1 from "../assets/img/project-img1.png"

export const Projects = () => {

    const projects = [
        {
            title: "Website  Pemandian Air Soda Taurutung",
            description: " Integrate the design into HTML, CSS, and JavaScript code, ensuring consistency between the design appearance and the actual display in the browser. Design and develop a responsive and aesthetically pleasing user interface to enhance the user experience of the Tarutung Soda Water Bath website.",
            image: projImg1,
            url: "https://github.com/srgjo27/air-soda--tarutung-website",
        },
        {
            title: "IT Del Canteen Website",
            description: "Designed and implemented a responsive user interface using HTML, CSS, and JavaScript with Bootstrap, and jQuery, to improve user experience on the Canteen IT Del Website. Develop and integrate the backend system using the PHP programming language, with the application of the Laravel framework, to ensure the smooth functioning of the website, including database management using MySQL.",
            image: "",
            url: "",
        },
        {
            title: "LokerKu Website",
            description: "Design and develop a responsive and aesthetically pleasing user interface to enhance the user experience of the LokerKu website. Develop and integrate the backend system using the PHP programming language, with the application of the Laravel framework, to ensure the smooth functioning of the website, including database management using MySQL.",
            image: "",
            url: "",
        },
        {
            title: "MarketKu  Desktop Application",
            description: "",
            image: "",
            url: "",
        },
        {
            title: "Delhub Mobile-Based Application",
            description: "",
            image: "",
            url: "",
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These skills have been applied in leading and collaborating on challenging projects, where I have not only improved my problem-solving and database management abilities but also produced innovative and cutting-edge solutions.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>
                                        Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Two</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Three</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}