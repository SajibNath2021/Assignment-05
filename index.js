const foodssDiv = document.getElementById('foods').innerText;
function displayFood() {
    const inputFood = document.getElementById('input-foodName').value;
   
    fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFood}`)
   
    .then(res => res.json())
    .then(data => displayFood(data.meals))
     const displayFood = meals=>{
            console.log(meals[0].strMeal);
            document.getElementById('foods').innerText = meals[0].strMeal;
    //     for (let i = 0; i <= meals.length; i++) {
             
    //         const mealsName = meals[i].strMeal;
                     
    //        console.log(mealsName);
    //     //    document.getElementById('foods').value = mealsName;
    //     }
      }





    //     { //console.log(data.meals[0].strMeal)
        
    //      for (let i = 0; i <= data.meals.length; i++) {
             
    //          const mealsName = data.meals[i];
             
    //          console.log(mealsName.strMeal);
    //         //  document.getElementById('input-foodName').value = mealsName.strMeal;
    //     //     const foodsDiv = document.createElement('div');
    //     //     const foodsInfo = `
    //     //     <h3>${mealsName.strMeal}</h3>
    //     //     `;
    //     //     foodsDiv.innerHTML = foodsInfo;
    //     //     foodsDiv.appendChild(foodsDiv);
            
    //      }
    //  } );
}