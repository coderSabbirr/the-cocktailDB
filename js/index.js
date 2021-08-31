const searchFiled = document.getElementById('search-flied');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click',function(){
    const searchText = searchFiled.value;
    searchFiled.value ='';
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDrink(data.drinks))
})


const displayDrink = drinks => {
    const showResult = document.getElementById('show-result');

    drinks.forEach(drink => {
        
        const div =document.createElement('div')
        div.classList.add('col-md-3')
        div.innerHTML= `
        <div class="card" style="width: 18rem;">
                <img src="${drink.strDrinkThumb}" class="card-img-top"
                    alt="${drink.strDrink}">
                <div class="card-body">
                    <p class="card-text">${drink.strDrink}</p>
                </div>
            </div>
        
        `;
        showResult.appendChild(div);
    });

}