
function displayFood() {
    const foodssDiv = document.getElementById('foods');
    const inputFood = document.getElementById('input-foodName').value;
   
    fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFood}`)
   
    .then(res => res.json())
    .then(data => display(data.meals))
     
    function  display(meals){
        for (let i = 0; i < meals.length; i++) {
            const mealsName = meals[i];
            console.log(mealsName.strMeal);
            
            
             
            const foodsDiv = document.createElement('div');
            foodsDiv.className = "food";
            const foodsInfo = `
            <img src=${mealsName.strMealThumb}>
             <h3>${mealsName.strMeal}</h3>
             <button onclick = "displayFoodDetails('${mealsName.idMeal}')" >details</button>
            `;
            foodsDiv.innerHTML = foodsInfo;
            foodssDiv.appendChild(foodsDiv);
           
        }
    }
     
}

   function displayFoodDetails(id){
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => DisplayFoodsInfo(data.meals[0]))
      
    }

    function DisplayFoodsInfo(food){
         const foodDiv = document.getElementById('foodDetails');
         foodDiv.innerHTML =`
         <img src = ${food.strMealThumb}>
         <h3>${food.strMeal}</h3>
         

         `
    }


