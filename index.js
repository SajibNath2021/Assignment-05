// start

const inputFood = document.getElementById('input-foodName').value;
function displayFood() {
    const allFoodsDiv = document.getElementById('foods');
    const inputFood = document.getElementById('input-foodName').value;
    const errorTag = document.getElementById('error-message');
   
    fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFood}`)
    .then(res => res.json())
    .then(data => display(data.meals))
    .catch(error => displayError("Sorry, Invalid Food!!! Plz try again..."))
    
    const  display = meals=>{
        errorTag.innerText = "";
        allFoodsDiv.innerText ="";
        meals.forEach(mealsName => {
            const foodsDiv = document.createElement('div');
            foodsDiv.className = "food";
            const foodsInfo = `
            
             <button onclick = "displayFoodDetails('${mealsName.idMeal}')" >
             <img src=${mealsName.strMealThumb}>
             <h5>${mealsName.strMeal}</h5>
             </button>
            `;
            foodsDiv.innerHTML = foodsInfo;
            allFoodsDiv.appendChild(foodsDiv);
        });
        
        document.getElementById('input-foodName').value = "";
        
       
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
         <h5>Meal Ingredient</h5>
         <p> No1 :  ${food.strIngredient1} (${food.strMeasure1})<p>
         <p> No2 : ${food.strIngredient2} (${food.strMeasure2})<p>
         <p> No3 : ${food.strIngredient3} (${food.strMeasure3})<p>
         <p> No4 : ${food.strIngredient4} (${food.strMeasure4})<p>
         <p> No5 : ${food.strIngredient5} (${food.strMeasure5})<p>
         <p> No6 : ${food.strIngredient6} (${food.strMeasure6})<p>
         <p> No7 : ${food.strIngredient7} (${food.strMeasure7})<p>
         <p> No8 : ${food.strIngredient8} (${food.strMeasure8})<p>
         <p> No9 : ${food.strIngredient9} (${food.strMeasure9})<p>
         <p> No10 : ${food.strIngredient10} (${food.strMeasure10})<p>
         `
    }

    const displayError = error =>{
        const errorTag = document.getElementById('error-message');
        errorTag.innerText = error;

        const allFoodsDiv = document.getElementById('foods');
        allFoodsDiv.innerText = "";

        const foodDiv = document.getElementById('foodDetails');
        foodDiv.innerText = "";
    }
    
    // end 
    //thnq

