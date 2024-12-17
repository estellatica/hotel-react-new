'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  useEffect(() => {
    // Menghapus spinner setelah halaman dimuat
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.classList.remove('show');
    }
  }, []);

  return (
    <>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link href="/" className="navbar-brand p-0">
            <Image src="/img/logo.png" alt="Logo" width={150} height={50} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link href="/" className="nav-item nav-link">Home</Link>
              <Link href="/about" className="nav-item nav-link active">About</Link>
              <Link href="/booking" className="nav-item nav-link">Booking</Link>
              <Link href="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link href="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
          </div>
        </nav>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link href="/">Pages</Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <Image src="/img/about.jpg" alt="About Us" layout="fill" objectFit="cover" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
              <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Footer Start */}
      <footer className="container-fluid bg-dark text-light footer pt-5 mt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <Link href="/about" className="btn btn-link">About Us</Link>
              <Link href="/contact" className="btn btn-link">Contact Us</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default About;