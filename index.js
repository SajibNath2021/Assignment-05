
function displayFood() {
    const allFoodsDiv = document.getElementById('foods');
    const inputFood = document.getElementById('input-foodName').value;
   
    fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFood}`)
    .then(res => res.json())
    .then(data => display(data.meals))
     
    const  display = meals=>{
           
        meals.forEach(mealsName => {
            const foodsDiv = document.createElement('div');
            foodsDiv.className = "food";
            const foodsInfo = `
            <img src=${mealsName.strMealThumb}>
             <h3>${mealsName.strMeal}</h3>
             <button onclick = "displayFoodDetails('${mealsName.idMeal}')" >details</button>
            `;
            foodsDiv.innerHTML = foodsInfo;
            allFoodsDiv.appendChild(foodsDiv);
        });
       
    }
    
     
}

   const displayFoodDetails= id =>{
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => DisplayFoodsInfo(data.meals[0]))
      
    }

   const  DisplayFoodsInfo = food =>{
         const foodDiv = document.getElementById('foodDetails');
         foodDiv.className = 'detail'
         foodDiv.innerHTML =`
         <img src = ${food.strMealThumb}>
         <h3>${food.strMeal}</h3>
         <p>Ingredient No1 : ${food.strIngredient1}<p>
         <p>Ingredient No2 : ${food.strIngredient2}<p>
         <p>Ingredient No3 : ${food.strIngredient3}<p>
         <p>Ingredient No4 : ${food.strIngredient4}<p>
         <p>Ingredient No5 : ${food.strIngredient5}<p>
         <p>Ingredient No6 : ${food.strIngredient6}<p>
         <p>Ingredient No7 : ${food.strIngredient7}<p>
         <p>Ingredient No8 : ${food.strIngredient8}<p>
         <p>Ingredient No9 : ${food.strIngredient9}<p>
         <p>Ingredient No10 : ${food.strIngredient10}<p>
         `
    }


