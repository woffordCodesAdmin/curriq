import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import EmployeeListItem from './EmployeeListItem'

function HomePage() {
  return (
    <div>
      <Header />
      <h1>Homepage</h1>
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default HomePage
