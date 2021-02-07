
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
            `;
            foodsDiv.innerHTML = foodsInfo;
            foodssDiv.appendChild(foodsDiv);
           
        }
    }

    
     
}

