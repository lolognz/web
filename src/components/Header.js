import React from 'react';

class Header extends React.Component {
  render() {
    return <section class="intro" id="section-header">
        <div class="content-header">
            <div class="col-sm-12">
                <h1 id="name-header">My Website</h1>
                <p id="text-header">Lorem ipsum.</p>
                <ul class="social-icons">
                    <li><a href="https://www.linkedin.com/in/mgonzalezriojo/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://scholar.google.es/citations?user=Iow8x7EAAAAJ&hl=es&oi=ao" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i></a></li>
                    <li><a href="https://github.com/lolognz" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a></li>
                    <li><a href="https://twitter.com/lolognz" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
  }
}

export default Header;
