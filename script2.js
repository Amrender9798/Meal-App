const mealName = document.getElementById("meal_name");
const mealImage = document.getElementById("meal_image");
const mealDescription = document.getElementById("meal_description");
const meal = localStorage.getItem("meal");

const parsedData = JSON.parse(meal);
console.log(parsedData);

mealName.textContent = parsedData.strCategory;
mealImage.src = parsedData.strCategoryThumb;
mealDescription.textContent = parsedData.strCategoryDescription;