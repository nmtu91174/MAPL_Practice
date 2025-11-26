import React from "react";
import { Container, Row, Col, Navbar, Nav, Button, Form } from "react-bootstrap";
import "../css/Home.css" // Import file CSS ở trên

export default function Home() {
    return (
        <>
            {/* ================= HEADER ================= */}
            {/* Sử dụng class bg-beige để đổi màu nền */}
            <Navbar expand="lg" className="bg-beige py-3">
                <Container>
                    {/* Bên trái: Menu */}
                    <Nav className="me-auto d-none d-lg-flex">
                        <Nav.Link href="#mag" className="nav-link-custom">MAGAZINE</Nav.Link>
                        <Nav.Link href="#shop" className="nav-link-custom">SHOP</Nav.Link>
                    </Nav>

                    {/* Ở giữa: Logo */}
                    <Navbar.Brand href="#home" className="mx-auto fw-bold fs-3 letter-spacing-2">
                        GOODMOODS
                    </Navbar.Brand>

                    {/* Bên phải: Utilities */}
                    <Nav className="ms-auto d-flex flex-row gap-3 align-items-center">
                        <Nav.Link href="#lang" className="nav-link-custom">FR / EN</Nav.Link>
                        <span className="cursor-pointer">🔍</span>
                        <span className="cursor-pointer">🛒</span>
                    </Nav>
                </Container>
            </Navbar>

            {/* ================= HERO SECTION ================= */}
            <section className="bg-beige hero-section py-5">
                <Container className="position-relative h-100">
                    <Row className="align-items-center h-100">

                        {/* Cột trái: Ảnh nhỏ nằm dưới */}
                        <Col md={5} className="d-none d-md-block position-relative" style={{ top: "100px" }}>
                            <img
                                src="https://placehold.co/400x500/e0c0a0/ffffff?text=Decor"
                                alt="Decor Left"
                                className="hero-img-left shadow-lg"
                            />
                        </Col>

                        {/* Cột phải: Ảnh to & Text đè lên */}
                        <Col md={7} className="position-relative">
                            <img
                                src="https://placehold.co/600x400/d0b090/ffffff?text=Interior"
                                alt="Main Interior"
                                className="hero-img-right shadow"
                            />

                            {/* Text Overlay (Sử dụng vị trí tuyệt đối đè lên ảnh) */}
                            <div className="position-absolute top-50 start-0 translate-middle-y text-white ps-4" style={{ zIndex: 10 }}>
                                <h6 className="text-uppercase ls-2 mb-2">Interview</h6>
                                <h1 className="hero-title text-uppercase mb-3">Hiromi</h1>
                                <p className="mb-4" style={{ maxWidth: "300px" }}>
                                    Johanna de Clisson et ses créatures hybrides.
                                </p>
                                <Button variant="outline-light" className="rounded-0 px-4">
                                    VOIR PLUS &rarr;
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    {/* Dots slider giả lập */}
                    <div className="d-flex justify-content-center gap-2 mt-5">
                        <span className="bg-white rounded-circle p-1"></span>
                        <span className="bg-white opacity-50 rounded-circle p-1"></span>
                        <span className="bg-white opacity-50 rounded-circle p-1"></span>
                    </div>
                </Container>
            </section>

            {/* ================= SLOGAN ================= */}
            <Container className="py-5 text-center">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 className="fw-bold fs-4 text-uppercase lh-base my-5">
                            S'inspirer des nouveaux styles.<br />
                            Découvrir des objets uniques.<br />
                            <span className="text-decoration-underline">Et nourrir</span> son propre mood.
                        </h2>
                    </Col>
                </Row>
            </Container>

            {/* ================= NEWS GRID ================= */}
            <Container className="pb-5">
                <div className="text-center mb-5">
                    <h3 className="text-decoration-underline fw-bold text-uppercase">News</h3>
                    <p className="text-muted fst-italic">Découvrez les dernières actus qui nous ont marqués</p>
                </div>

                <Row className="g-4">
                    {/* Cột 1 */}
                    <Col md={4}>
                        <div className="mb-4">
                            <img src="https://placehold.co/300x200" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1">Pop-Corn</small>
                            <h5 className="fw-bold fs-6">10 nouvelles galeries au PAD Paris 2023</h5>
                        </div>
                        <div>
                            <img src="https://placehold.co/300x300" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1">Pop-Corn</small>
                            <h5 className="fw-bold fs-6">La vie pigmentée d'Elitis</h5>
                        </div>
                    </Col>

                    {/* Cột 2 (Ảnh giữa cao hơn - Masonry effect giả lập) */}
                    <Col md={4} className="mt-md-5">
                        <div className="mb-4">
                            <img src="https://placehold.co/300x400" className="news-img news-img-tall" alt="Tall News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1">Hot Stuff</small>
                            <h5 className="fw-bold fs-6">Forest Marseille</h5>
                        </div>
                    </Col>

                    {/* Cột 3 */}
                    <Col md={4}>
                        <div className="mb-4">
                            <img src="https://placehold.co/300x200" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1">Hot Stuff</small>
                            <h5 className="fw-bold fs-6">Rétro futur</h5>
                        </div>
                        <div className="mb-4">
                            <img src="https://placehold.co/300x200" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1">Pop-Corn</small>
                            <h5 className="fw-bold fs-6">Espaces Atypiques</h5>
                        </div>
                        <div className="text-end mt-4">
                            <a href="#" className="text-dark fw-bold text-decoration-none">VOIR PLUS &rarr;</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ================= NEWSLETTER ================= */}
            <section className="bg-purple text-white py-5 text-center">
                <Container>
                    <h3 className="fw-bold text-uppercase mb-3 ls-2">Newsletter</h3>
                    <p className="mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                        Découvrez les plus beaux objets, lieux & créatifs du moment.
                    </p>

                    <Form className="d-flex justify-content-center mb-3 mx-auto" style={{ maxWidth: '500px' }}>
                        <Form.Control
                            type="email"
                            placeholder="Votre email"
                            className="bg-transparent border-0 border-bottom border-white rounded-0 text-white shadow-none me-2"
                            style={{ color: 'white' }}
                        />
                        <Button variant="outline-light" className="rounded-0 border-0 fw-bold">
                            S'INSCRIRE
                        </Button>
                    </Form>

                    <small className="opacity-50 fst-italic">
                        PS: Un extrait de notre trendbook offert lors de votre inscription !
                    </small>
                </Container>
            </section>
        </>
    );
}