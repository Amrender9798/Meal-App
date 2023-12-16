const input = document.getElementById("input");
const list = document.getElementById("list");
const information = document.getElementById("meal_information");
const favorite = document.getElementById("favorite");
let liked = JSON.parse(localStorage.getItem("list")) || [];
let arr;


input.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    const filteredMeals = arr.filter((meal) => meal.strCategory.toLowerCase().startsWith(val));
    addHTML(filteredMeals);
});

//function to show meal recommendation on UI    
function addHTML(filteredMeals){
    console.log(filteredMeals);
    list.innerHTML = filteredMeals.map((meal) => {
        return `<div>
          <h1>${meal.strCategory}</h1>
          <img src = ${meal.strCategoryThumb}\>
          <div id = "flex">
          <button class = "buttons">Read More</button>
          <button class = "like">Like Meal</button>
          </div>
          
        </div>`;
    }).join("");

    const buttons = document.querySelectorAll(".buttons");
    const likeMealButton = document.querySelectorAll(".like");

    

    buttons.forEach((button, index) => {
        button.addEventListener("click", function(){
            const meal = filteredMeals[index];
            console.log(meal);
            const serializedMeal = JSON.stringify(meal);
            console.log(serializedMeal);
            localStorage.setItem("meal",serializedMeal);
            window.location.href = "information.html";
        });
    });

    likeMealButton.forEach((button,index) => {
        button.addEventListener("click",function(){
            const meal = filteredMeals[index];
        
            // Check if the meal is not already in the liked array
            if (!liked.some(existingMeal => existingMeal.strCategory === meal.strCategory)) {
                liked.push(meal);
                console.log(liked);
            }
            
           
            
        })

    });
    
    
}
favorite.addEventListener("click",function(){
    localStorage.setItem("list",JSON.stringify(liked));
    window.location.href = "favorite.html";

});




//funtion to fetch Data from the API
async function fetchData(){
    input.focus();
    const request = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await request.json();
    arr = data.categories;
    addHTML(arr);
  
}

document.addEventListener("DOMContentLoaded", function(){
    fetchData();
});
