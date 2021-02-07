//Capture button handler and add event lister
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener('click', () => {
    const foodInput = document.getElementById("input").value;
    output(foodInput);
})
// Call first API
async function output(foodName) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    const response = await fetch(url)
    const data = await response.json()
    displayData(data);
}
// Display Data
const displayData = data => {
    const foodInput = document.getElementById("input").value;
    const parentDiv = document.getElementById('foodArea');
    const meal = data.meals;
    meal.forEach(meal => {
        const foodName = meal.strMeal;
        const foodImg = meal.strMealThumb;
        const foodInfo = `
            <div onclick=ingredients('${foodInput}') >
                <img src="${foodImg}" width="50%">
                <h5>${foodName}</h5>  
            </div>
        `;
        parentDiv.innerHTML = foodInfo;
    });
}
//Call second API
async function ingredients(foodName) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    const response = await fetch(url)
    const data = await response.json()
    displayMoreData(data);
}
// Display Ingredients
const displayMoreData = data => {
    document.getElementById('searchArea').style.visibility = 'block';
    const parentDiv = document.getElementById('foodArea');
    const meal = data.meals;
    meal.forEach(meal => {
        const foodInfo = `
        <div class="imgInfo">
            <img  src="${meal.strMealThumb}" >
            <h5>${meal.strMeal}</h5>
        </div>
        <div class="foodInfo">
            <h4>Ingredients</h4>
            <ul>
                <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
                <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
                <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
                <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
                <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
                <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
                <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
                <li>${meal.strMeasure8} ${meal.strIngredient8}</li>
                <li>${meal.strMeasure9} ${meal.strIngredient9}</li>
            </ul>
        </div>
        `;
        parentDiv.innerHTML = foodInfo;
    });
}