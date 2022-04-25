import React from 'react'
import AdminHomePage from './components/AdminHomePage'
import ApplicationFormPage from './components/ApplicationFormPage'
import CreateTripPage from './components/CreateTripPage'
import HomePage from './components/HomePage'
import ListTripsPage from './components/ListTripsPage'
import LoginPage from './components/LoginPage'
import TripDetailsPage from './components/TripDetailsPage'


function App() {
  return (
    <div>
<AdminHomePage/>
<ApplicationFormPage/>
<CreateTripPage/>
<HomePage/>
<ListTripsPage/>
<LoginPage/>
<TripDetailsPage/>
    </div>
  )
}

export default App