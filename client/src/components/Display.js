import React, { useState, useEffect } from 'react'

export default function Display() {
  const [organizations, setOrganizations] = useState([])

  useEffect(() => {
    // Here you would typically fetch data from your backend
    // For now, we'll use mock data
    const mockData = [
      { id: 1, name: 'Shelter A', type: 'shelter', peopleServed: 50, address: '123 Main St' },
      { id: 2, name: 'Restaurant B', type: 'restaurant', peopleServed: 100, address: '456 Oak Ave' },
      { id: 3, name: 'Org C', type: 'other', peopleServed: 75, address: '789 Pine Rd' },
    ]
    setOrganizations(mockData)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Registered Organizations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <div key={org.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">{org.name}</h2>
              <p className="text-gray-600 mb-2">{org.type.charAt(0).toUpperCase() + org.type.slice(1)}</p>
              <p><strong>People Served:</strong> {org.peopleServed}</p>
              <p><strong>Address:</strong> {org.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}