import React from 'react'

const Task = () => {
  const tasks=[
    {
      id:1,
      title:"Finish Project report",
      description:"complete the project report by end of the week",
      status:"In progress",
      dueDate:"2023-10-01",
    },
    {
      id:2,
      title:"Team Meeting",
      description:"Attend the weekly team meeting",
      status:"Completed",
      dueDate:"2023-10-02",
    },
    {
      id:3,
      title:"Client Call",
      description:"Call the client to discuss project updates",
      status:"Pending",
      dueDate:"2023-10-03",
    },
  ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white shadow-sm rounded-lg p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Tasks</h1>
        {/* task list */}
        <section className="space-y-6">
          {tasks.map((task)=>(
            <div key={task.id} className='flex items-center justify-between bg-white rounded-lg shadow-md p6 border-l-4' style={{borderColor:task.status==='Completed'? 'green':task.status==='In progress' ? 'yellow':'red'}}>
              <div className="flex flex-col">
                <h2 className='text-xl font-semibold text-gray-800'>{task.title}</h2>
                <p className='text-sm text-gray-600 mt-2'>{task.description}</p>
                <p className='text-sm text-gray-600 mt-2'>Due Date:{task.dueDate}</p>
              </div>
              <section className="flex space-x-4">
                <span className={`px-4 py-3 text-center text-sm rounded-full ${task.status==='Completed'? 'bg-green-100 text-green-600':task.status==='In progress'? 'bg-yellow-100 text-yellow-600':'bg-red-100 text-red-600'}`}>{task.status}</span>
                {/* Buttons */}
                <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>Edit</button>
                {task.status!=='Completed' && <button className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'>Mark as Completed</button>}
                <button className='px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors'>Delete</button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Task