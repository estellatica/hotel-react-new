import React from "react";

const Contact = () => {
    return (
        <>
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/" className="navbar-brand p-0">
                        <img src="img/logo.png" alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/booking" className="nav-item nav-link">Booking</a>
                            <a href="/contact" className="nav-item nav-link active">Contact</a>
                        </div>
                        <a href="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</a>
                    </div>
                </nav>

                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-3 text-white animated slideInDown">Contact Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}

            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Get In Touch</h5>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed" frameBorder="0" style={{ minHeight: "300px", border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>
    );
};

export default Contact;
