import React from 'react'

function RecipeList({ recipes, setRecipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // const deleteRecipe = (indexToDelete) => {
  //   setRecipes((currentRecipes) =>
  //     currentRecipes.filter((ignored, index) => index !== indexToDelete)
  //   )
  // }

  const handleDelete = (recipeID) => {
    const filteredList = recipes.filter((ignored, index) => index !== recipeID)
    setRecipes(filteredList)
  }

  return (
    <div className='recipe-list'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, key) => {
            return (
              <tr key={key}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                  <img
                    src={recipe.photo}
                    alt={recipe.name}
                  />
                </td>
                <td className='content_td'>
                  <p>{recipe.ingredients}</p>
                </td>
                <td className='content_td'>
                  <p>{recipe.preparation}</p>
                </td>
                <td>
                  <button
                    name='delete'
                    onClick={() => handleDelete(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecipeList
