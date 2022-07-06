import React, { Component, Fragment } from 'react'
import AboutCom from '../components/home/AboutCom'
import Banefits from '../components/home/Banefits'
import ContactForm from '../components/home/ContactForm'
import HeaderCom from '../components/home/HeaderCom'
import HowToDo from '../components/home/HowToDo'
import Team from '../components/home/Team'
import Footer from '../components/home/Footer'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderCom />
        <AboutCom />
        <HowToDo />
        <Banefits />
        <Team />
        <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default HomePage