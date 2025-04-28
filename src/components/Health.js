import React from 'react'
import HealthNavbar from './HealthNavbar'
import HealthCareJourney from '../pages/HealthCareJourney'
import Footer from './Footer'
import HealthInform from '../pages/HealthInform'

const Health = () => {
  return (
    <div>
      <HealthNavbar />
      <HealthInform />
      <Footer />
    </div>
  )
}

export default Health
