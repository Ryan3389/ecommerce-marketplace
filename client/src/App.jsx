// import { useState } from "react"


// const App = () => {
//   const [formData, setFormData] = useState({
//     text: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target

//     setFormData({
//       ...formData,
//       [name]: value
//     })
//   }

//   const handleFormSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const response = await fetch('/api/test', {
//         method: 'POST',
//         body: JSON.stringify(formData)
//       })

//       const data = await response.json()
//       console.log(data)
//     } catch (error) {
//       console.error("Form submit error: ", error)
//     }
//   }
//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="text">Text</label>
//       <input
//         type="text"
//         name="text"
//         onChange={handleChange}
//       />
//       <input type="submit" />
//     </form>
//   )
// }


// export default App

// import { useState } from "react"

// const App = () => {
//   const [category, setCategory] = useState({
//     category: ''
//   })

//   const handleChange = (e) => {
//     setCategory({
//       ...category,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleFormSubmit = async (e) => {
//     const queryParams = new URLSearchParams(category).toString()
//     try {
//       const response = await fetch(`/api/category_name?${queryParams}`, {
//         method: 'GET',
//       })

//       const data = await response.json()

//       console.log(data)
//     } catch (error) {
//       console.error('Form submit error: ', error)
//     }
//   }
//   return (
//     <>
//       <label htmlFor="category_name">Category Name</label>
//       <select name="category_name" id="category_name" value={category} onChange={handleChange}>
//         <option value="Running">Running</option>
//         <option value="Workout and Training">Workout and Training</option>
//         <option value="Youth">Youth</option>
//       </select>

//       <button onClick={handleFormSubmit}>Filter</button>
//     </>
//   )
// }

// export default App

import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <Outlet />
  )
}

export default App