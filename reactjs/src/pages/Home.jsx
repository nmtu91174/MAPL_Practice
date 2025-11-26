import React from "react";
import { Container, Row, Col, Navbar, Nav, Button, Form } from "react-bootstrap";
// Đừng quên import CSS nhé
import "../css/Home.css";

export default function Home() {
    return (
        <>
            {/* ================= HEADER ================= */}
            {/* Sticky top giúp menu luôn dính trên cùng khi cuộn */}
            <Navbar expand="lg" className="bg-beige py-3 sticky-top shadow-sm">
                <Container>
                    {/* Logo nằm trái trên Mobile, Giữa trên Desktop */}
                    <Navbar.Brand href="#home" className="fw-bold fs-3 letter-spacing-2 me-auto me-lg-0 order-lg-1">
                        GOODMOODS
                    </Navbar.Brand>

                    {/* Nút Hamburger menu cho Mobile */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-lg-0 border-0" />

                    <Navbar.Collapse id="basic-navbar-nav" className="order-lg-0">
                        {/* Menu Trái */}
                        <Nav className="me-auto">
                            <Nav.Link href="#mag" className="nav-link-custom">MAGAZINE</Nav.Link>
                            <Nav.Link href="#shop" className="nav-link-custom">SHOP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Menu Phải (Icons) - Luôn hiện hoặc giấu vào toggle tùy thiết kế */}
                    {/* Ở đây tôi để hiện luôn trên desktop, mobile nằm trong toggle cho gọn */}
                    <div className="d-flex flex-row gap-3 align-items-center order-lg-2 ms-lg-auto d-none d-lg-flex">
                        <Nav.Link href="#lang" className="nav-link-custom p-0">FR / EN</Nav.Link>
                        <span className="cursor-pointer">🔍</span>
                        <span className="cursor-pointer">🛒</span>
                    </div>
                </Container>
            </Navbar>

            {/* ================= HERO SECTION ================= */}
            <section className="bg-beige hero-section py-4 py-lg-5">
                <Container className="position-relative h-100">
                    <Row className="align-items-center h-100">

                        {/* Cột trái: Chỉ hiện trên Desktop (d-none d-lg-block) */}
                        <Col lg={5} className="d-none d-lg-block col-img-left position-relative">
                            <img
                                src="https://placehold.co/400x500/e0c0a0/ffffff?text=Decor"
                                alt="Decor Left"
                                className="hero-img-left"
                            />
                        </Col>

                        {/* Cột phải: Chứa ảnh chính và Text */}
                        <Col lg={7} className="position-relative">
                            <div className="position-relative">
                                <img
                                    src="https://placehold.co/600x400/d0b090/ffffff?text=Interior"
                                    alt="Main Interior"
                                    className="hero-img-right shadow"
                                />

                                {/* Text Overlay */}
                                {/* Mobile: Căn giữa, Desktop: Căn trái */}
                                <div className="hero-text-overlay position-absolute top-50 start-0 translate-middle-y text-white ps-4 ps-md-5">
                                    <h6 className="text-uppercase ls-2 mb-2 opacity-75">Interview</h6>
                                    <h1 className="hero-title text-uppercase mb-3">Hiromi</h1>
                                    <p className="mb-4 d-none d-sm-block" style={{ maxWidth: "350px", fontSize: "1.1rem" }}>
                                        Johanna de Clisson et ses créatures hybrides.
                                    </p>
                                    <Button variant="outline-light" className="rounded-0 px-4 py-2 fw-bold border-2">
                                        VOIR PLUS &rarr;
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Dots slider */}
                    <div className="d-flex justify-content-center gap-2 mt-4 mt-lg-5">
                        <span className="bg-white rounded-circle p-1" style={{ width: 10, height: 10 }}></span>
                        <span className="bg-white opacity-50 rounded-circle p-1" style={{ width: 10, height: 10 }}></span>
                        <span className="bg-white opacity-50 rounded-circle p-1" style={{ width: 10, height: 10 }}></span>
                    </div>
                </Container>
            </section>

            {/* ================= SLOGAN ================= */}
            <Container className="py-5 text-center">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <h2 className="fw-bold text-uppercase lh-base my-4 my-md-5 fs-5 fs-md-4">
                            S'inspirer des nouveaux styles.<br className="d-none d-md-block" />
                            Découvrir des objets uniques.<br className="d-none d-md-block" />
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
                    <Col md={6} lg={4}>
                        <div className="mb-4">
                            <img src="https://placehold.co/300x200" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1 mt-2">Pop-Corn</small>
                            <h5 className="fw-bold fs-6">10 nouvelles galeries au PAD Paris 2023</h5>
                        </div>
                        <div>
                            <img src="https://placehold.co/300x300" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1 mt-2">Pop-Corn</small>
                            <h5 className="fw-bold fs-6">La vie pigmentée d'Elitis</h5>
                        </div>
                    </Col>

                    {/* Cột 2 (Layout so le chỉ hiện trên Desktop) */}
                    <Col md={6} lg={4} className="mt-lg-5">
                        <div className="mb-4">
                            <img src="https://placehold.co/300x400" className="news-img news-img-tall" alt="Tall News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1 mt-2">Hot Stuff</small>
                            <h5 className="fw-bold fs-6">Forest Marseille</h5>
                        </div>
                    </Col>

                    {/* Cột 3 */}
                    <Col md={6} lg={4}>
                        <div className="mb-4">
                            <img src="https://placehold.co/300x200" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1 mt-2">Hot Stuff</small>
                            <h5 className="fw-bold fs-6">Rétro futur</h5>
                        </div>
                        <div className="mb-4">
                            <img src="https://placehold.co/300x200" className="news-img" alt="News" />
                            <small className="fw-bold text-muted text-uppercase d-block mb-1 mt-2">Pop-Corn</small>
                            <h5 className="fw-bold fs-6">Espaces Atypiques</h5>
                        </div>
                        <div className="text-end mt-4">
                            <a href="#more" className="text-dark fw-bold text-decoration-none border-bottom border-dark pb-1">VOIR PLUS &rarr;</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ================= NEWSLETTER ================= */}
            <section className="bg-purple text-white py-5 text-center">
                <Container>
                    <h3 className="fw-bold text-uppercase mb-3 ls-2">Newsletter</h3>
                    <p className="mb-4 mx-auto opacity-75" style={{ maxWidth: '600px' }}>
                        Découvrez les plus beaux objets, lieux & créatifs du moment.
                    </p>

                    <Form className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3 mx-auto gap-2" style={{ maxWidth: '500px' }}>
                        <Form.Control
                            type="email"
                            placeholder="Votre email"
                            className="bg-transparent border-0 border-bottom border-white rounded-0 text-white shadow-none"
                            style={{ color: 'white' }}
                        />
                        <Button variant="outline-light" className="rounded-0 border-0 fw-bold text-nowrap mt-3 mt-sm-0">
                            S'INSCRIRE
                        </Button>
                    </Form>

                    <small className="opacity-50 fst-italic d-block mt-4">
                        PS: Un extrait de notre trendbook offert lors de votre inscription !
                    </small>
                </Container>
            </section>
        </>
    );
}