import Card from '@/components/custom/Card'
import React from 'react'

function Doctors() {
  return (
    <div className="py-10" id="ourDoctors">
    <h1 className="text-center text-6xl font-bold tracking-wide">Our Doctors</h1>
      <div className="flex flex-wrap gap-5 p-10 justify-evenly ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Doctors