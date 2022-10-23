import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Material Design for Bootstrap</title>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      {/* Google Fonts Roboto */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700,display=swap"
      />
      {/*Main Navigation*/}
      <header>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      #intro {\n        background-image: url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2790&q=80");\n        height: 100vh;\n      }\n\n      /* Height for devices larger than 576px */\n      @media (min-width: 992px) {\n        #intro {\n          margin-top: -58.59px;\n        }\n      }\n\n      .navbar .nav-link {\n        color: #fff !important;\n      }\n    ',
          }}
        />
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
          style={{ zIndex: 2000 }}
        >
          <div className="container-fluid">
            {/* Navbar brand */}
            <a className="navbar-brand nav-link" target="_blank">
              <strong>PATI</strong>Library
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#intro">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    rel="nofollow"
                    target="_blank"
                  >
                    Learn Bootstrap 5
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav d-flex flex-row">
                {/* Icons */}
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" rel="nofollow" target="_blank">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" rel="nofollow" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" rel="nofollow" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                  <a className="nav-link" rel="nofollow" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/* Background image */}
        <div id="intro" className="bg-image shadow-2-strong">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="container d-flex align-items-center justify-content-center text-center h-100">
              <div className="text-white">
                <h1 className="mb-3">The Wonderful </h1>
                <h1 className="mb-3">World Of Reading</h1>
                <h5 className="mb-4">
                  The library is a place for everyone to explore, discover, and
                  engage
                </h5>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="/login"
                  role="button"
                  rel="nofollow"
                  target="_blank"
                >
                  Log in
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="/register"
                  target="_blank"
                  role="button"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
      {/*Main Navigation*/}
      {/*Main layout*/}
      <main className="mt-5">
        <div className="container">
          {/*Section: Content*/}
          <section>
            <div className="row">
              <div className="col-md-6 gx-5 mb-4">
                <div
                  className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://www.pcclean.io/wp-content/gallery/library-hd-wallpapers/919004.jpg"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6 gx-5 mb-4">
                <h4>
                  <strong>
                    We believe a world-class library should be a direct
                    reflection of the exquisite nature of the content we
                    preserve.
                  </strong>
                </h4>
                <p className="text-muted">
                  Every step of our process, from locating these precious
                  documents, to protecting them in our digital library, is done
                  with the same level of focus, precision, and expertise that
                  was used during their creation centuries ago.
                </p>
                <p className="text-muted">
                  The discovered texts are painstakingly cataloged to ensure
                  they are properly identified. After cataloging, the texts are
                  scanned using the finest quality digital equipment. The
                  scanning process then produces image files which are carefully
                  input the laborious process of keying in,
                  character-by-character, the content of works. The input
                  process makes the texts searchable so that researchers,
                  scholars, and translators can search the content of works,
                  locating phrases, terms, people, and places. Catalogues,
                  scans, and inputted texts are then archived in our digital
                  library for long-term safeguarding and access.
                </p>
              </div>
            </div>
          </section>
          {/* Section: Content*/}
          <hr className="my-5" />
          {/*Section: Content*/}
          <section className="text-center">
            <h4 className="mb-5">
              <strong>What We Provide</strong>
            </h4>
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=400&fit=crop&dpr=2"
                      className="img-fluid"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>Books</strong>
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://c0.wallpaperflare.com/preview/422/190/338/announcement-article-articles-copy-coverage.jpg"
                      className="img-fluid"
                    />
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>Articles</strong>
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://saylordotorg.github.io/text_understanding-media-and-culture-an-introduction-to-mass-communication/section_08/9c8126a9510afacdff08bffc2a09c4d3.jpg"
                      className="img-fluid"
                    />
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>Magazines</strong>
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Content*/}
          <hr className="my-5" />
          {/*Section: Content*/}
          <section className="mb-5">
            <h4 className="mb-5 text-center">
              <strong>Contact Us</strong>
            </h4>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Name
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-1">
                    <input
                      type="email"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Email address
                    </label>
                    .
                  </div>
                  {/* Contact input */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Contact No
                    </label>
                  </div>
                  {/* Message input */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Message
                    </label>
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example3"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Subscribe to our dailyupdates
                    </label>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Send
                  </button>
                  {/* Register buttons */}
                  <div className="text-center"></div>
                </form>
              </div>
            </div>
          </section>
          {/*Section: Content*/}
        </div>
      </main>
      {/*Main layout */}
      {/*Footer*/}
      <footer className="bg-light text-lg-start">
        <hr className="m-0" />
        <div className="text-center py-4 align-items-center">
          <p>Follow us on social media</p>
          <a
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-primary m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:PATI Digital Liabraries
        </div>
        {/* Copyright */}
      </footer>
      {/*Footer*/}
      {/* MDB */}
      {/* Custom scripts */}
    </div>
  );
}
