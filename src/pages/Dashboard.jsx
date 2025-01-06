import React from 'react'

const Dashboard = () => {
    const item = JSON.parse(localStorage.getItem("cart"));
    console.log(item); 
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard