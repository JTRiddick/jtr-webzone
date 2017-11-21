import React from 'react';
import Link from 'gatsby-link';

import FontAwesome from 'react-fontawesome';
import '../sass/style.scss';


const IndexPage = () => {
  return(
  <div>
    <main className="page-container">
      <nav className="navbar">

      </nav>
      {/* <!-- Main jumbotron--> */}
      <header className="superheader super-fill centered vaporwave-road">
        <div className='container'>
          <h1>Jordan Taylor Riddick</h1>
        </div>
        <div className="container">
          <h2>UI/UX . Front-End Dev</h2>
          <p><span>How's it going?</span></p>
          <p><span>You don't have to answer.</span></p>
        </div>
        <div className="container">

          <a href="#who">
              {/* <i className="fa fa-chevron-circle-down fa-5x"></i> */}
              <FontAwesome name='chevron-circle-down'
                size='5x'
              />
          </a>

        </div>
      </header>

      <section className= "container group block block-one" >

        <div className="panel panel-default" id="who">
          <div className="panel-heading">
            <h2>But Who This?</h2>
          </div>
          <div className="panel-body centered">
            <p>
              I bring a... "unique" perspective to developing user interfaces, responsive sites, apps, and games
            </p>
            <p>
              I like making interactive web zones with Node, Express, and React. It's pretty great so far.
            </p>
            <p>
              The best thing about JavaScript is how it plumps when you cook it, like a hot dog.
            </p>
          </div>
        </div>
      </section>

      <section className= "container group block block-three">

        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>More About Me</h2>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-third">
                <h3>
                  Skills
                </h3>
                <ul className="skill-list">
                  <li>Javascript / ES6</li>
                  <li>HMTL5 / CSS3</li>
                  <li>SASS</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>JQuery</li>
                  <li>Node</li>
                  <li>Bootstrap</li>
                  <li>Mongo</li>
                </ul>
              </div>
              <div className="col-third">
                <h3>
                  Tools
                </h3>
                <ul className="tool-list">
                  <li>Git Source Control</li>
                  <li>Webpack 3</li>
                  <li>NPM</li>
                  <li>Gulp</li>
                  <li>Gatsby</li>
                  <li>AWS EC2 + S3</li>
                  <li>Linux / OSX Bash$</li>
                  <li>VirtualBox</li>
                  <li>Unity</li>

                </ul>
              </div>
              <div className="col-third">
                <div id="contact">
                  <div className="well well-lg">
                    <a href="http://github.com/JTRiddick" target="_blank"><i className="fa fa-github fa-4x"></i></a>
                    <a href="https://www.linkedin.com/in/jtriddick/" target="_blank"><i className="fa fa-linkedin fa-4x"></i></a>
                    <div className="well contact">
                      <p>Send me a message: <a href="mailto:riddick.taylor@gmail.com?Subject=Well%20Hello%20There" target="_top">Riddick.Taylor@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>


  </div>)
}
export default IndexPage;
