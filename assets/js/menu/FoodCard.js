export const FoodCard = (foodObj, loggedIn) => {

    return `
    <div class="col-sm-6 g-4">
        <div class="card">
        <div class="h-100">
        <img src="./assets/images/${
          foodObj.imageURL
        }" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body">
                <h5 class="card-title">${foodObj.name}</h5>
                <p class="card-text">${foodObj.description}</p>
                <p>Price: $${foodObj.price}</p>
                <!-- show only if logged in -->
                ${loggedIn ? `<button type="button" class="btn btn-primary">Example Bootstrap Button</button>` : ``}
                <p>${
                  foodObj.isVegetarian
                    ? `<img src ="./assets/images/icon-veg.png" alt="IsVegetarian">`
                    : ""
                }</p>
            </div>
        </div>
    </div>
    `;
};