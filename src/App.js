import React, { Component } from 'react';
import $ from "jquery"
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        foo: 'bar',
        resumeData:{}
      }
    }
    getResumeData(){
      $.ajax({
        url:'https://react-resume-builder.netlify.com/resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({resumeData: data})
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      })
    }
    componentDidMount(){
      this.getResumeData();
    }
    render() {
      
    return (
      <React.Fragment>
        <Header data = {this.state.resumeData.main}/>
        <About  data = {this.state.resumeData.main}/>
        <Resume data = {this.state.resumeData.resume}/>
        <Portfolio data = {this.state.resumeData.portfolio}/>
        <Testimonials data = {this.state.resumeData.testimonials}/>
        <Contact data = {this.state.resumeData.main}/>
        <Footer data = {this.state.resumeData.main}/>
      </React.Fragment>
    )
  }
}
