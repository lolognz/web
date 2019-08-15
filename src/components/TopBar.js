import React from 'react';

class TopBar extends React.Component {
  render() {
    return <nav class="navbar navbar-expand-sm navbar-light" id="navbar">
        {/*Brand*/}
        {/* <a class="navbar-brand" href="#">Navbar</a> */}

        {/* Toggler/collapsibe Button */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#section-header">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section-about">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section-resume">Link</a>
                </li>
            </ul>
        </div>
    </nav>
  }
}

export default TopBar;
