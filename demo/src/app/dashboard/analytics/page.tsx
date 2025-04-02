import React from 'react'

const Analytics = () => {
  const metrics=[
       {
        title:'Total Salee',
        value:'$20,000',
        change:'+5%',
        isPositive:true,
       },
        {
          title:'Active Users',
          value:'1,500',
          change:'-10%',
          isPositive:false,
        },
        {
          title:'Website visits',
          value:'8650',
          change:'+15%',
          isPositive:true,
        },
        {
          title:'New Sign-Ups',
          value:'500',
          change:'+18%',
          isPositive:true,
        },
  ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
         <div className='max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-8'> Analytics Dashboard</h1>
          {/* Matrics  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className={`flex justify-between items-center bg-white shadow-md rounded-lg border-l-4 p-6 ${metric.isPositive ? 'border-green-500' : 'border-red-500'}`}>
                <div>
                  <h3 className='text-xl font-semibold text-gray-700'>{metric.title}</h3>
                </div>

                <h2 className='text-xl font-semibold text-gray-800'>{metric.title}</h2>
                <p className='text-3xl font-bold text-gray-900'>{metric.value}</p>
                <div className={`text-sm ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>{metric.change}</div>
              </div>
            ))}
          </div>
         </div>
    </div>
  )
}

export default Analytics