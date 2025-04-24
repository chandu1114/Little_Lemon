import recipes from "../recipes";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week Specials</h2>
        <button>Order Menu</button>
      </div>

      <div className="cards">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt="recipe" />
              <div className="menu-content">
                <div className="heading">
                  <h5>{recipe.title}</h5>
                  <p>{recipe.price}</p>
                </div>
                <p>{recipe.description}</p>
                <button className="orderbtn">Order Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
