import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>

<div className="row">

   <div className="twelve columns">
      <ul className="copyright">
         <li>&copy; Copyright 2019 Mustafa</li>
         <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Sanket Garg</a></li>   
      </ul>

   </div>

   <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

</div>

</footer>
    </React.Fragment>
    )
  }
}
