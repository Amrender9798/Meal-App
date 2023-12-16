const favMeal = document.getElementById("list");

let list = JSON.parse(localStorage.getItem("list"));

console.log(list);

function display() {
  favMeal.innerHTML = list
    .map((meal) => {
      return `<div>
      <h1>${meal.strCategory}</h1>
      <img src = ${meal.strCategoryThumb}\>
      
      <button class = "remove">Remove Meal</button>
      
      
    </div>`;
    })
    .join("");
    const remove = document.querySelectorAll(".remove");
    remove.forEach((button, index) => {
      button.addEventListener("click",function(){
        list = list.filter((num, i) => i !== index);
        localStorage.setItem("list",JSON.stringify(list));
        display();
    
      });
    });
    console.log(remove);
}

display();