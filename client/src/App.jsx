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

import { useState } from "react"

const App = () => {
  // const [formState, setFormState] = useState({
  //   movieGenre: "",
  // })

  const [category, setCategory] = useState({
    category: ''
  })

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  }
  //chat gpt solution
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/test', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formState)
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     // Ensure there is data before parsing it
  //     const text = await response.text();
  //     if (text) {
  //       const data = JSON.parse(text);
  //       console.log(data);
  //     } else {
  //       console.log('No JSON returned from response');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  //My solution: post request
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/test', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formState)
  //     })


  //     const data = await response.json()

  //     console.log(data)
  //   } catch (error) {
  //     console.log('Error submitting form: ', error)
  //   }
  // }

  const handleFormSubmit = async (e) => {
    const queryParams = new URLSearchParams(category).toString()
    try {
      const response = await fetch(`/api/category_name?${queryParams}`, {
        method: 'GET',
      })

      const data = await response.json()

      console.log(data)
    } catch (error) {
      console.error('Form submit error: ', error)
    }
  }
  return (
    <>
      {/* <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="movieGenre"
          value={formState.movieGenre}
          onChange={handleChange}
        />
        <input type="submit" />
      </form> */}
      <label htmlFor="category_name">Category Name</label>
      <select name="category_name" id="category_name" value={category} onChange={handleChange}>
        <option value="Running">Running</option>
        <option value="Workout and Training">Workout and Training</option>
        <option value="Youth">Youth</option>
      </select>

      <button onClick={handleFormSubmit}>Filter</button>
    </>
  )
}

export default App