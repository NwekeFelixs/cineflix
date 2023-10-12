import React from 'react'
import '../components/css/main.css'
import '../components/css/media_query.css'
import '../components/css/variable.css'
import '../components/css/reset.css'
import Header from './fragments/Header'
import Banner from './fragments/Banner'
import Movies from './fragments/Movies'
import Category from './fragments/Category'
import Live from './fragments/Live'
import Footer from './fragments/Footer'

function Home() {
  return (
    <div className='container'>
      <Header/>
      <main>
        <Banner/>
        <Movies/>
        <Category/>
        <Live/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
