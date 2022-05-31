import { useState } from "react";

function Menu() {
  const initialMenuItems = [
    {
      name: "Famous Wings",
      imageURL:
        "https://www.thecookierookie.com/wp-content/uploads/2018/12/featured-baked-chicken-wings-reshoot.jpg",
      price: "£4.99",
      orderCount: 0,
    },
    {
      name: "The New York Burger",
      imageURL:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg",
      price: "£8.99",
      orderCount: 0,
    },
    {
      name: "Dirty Fries",
      imageURL:
        "https://www.lovebakesgoodcakes.com/wp-content/uploads/2014/08/Loaded-Bacon-Cheese-Fries-square.jpg",
      price: "£5.00",
      orderCount: 0,
    },
    {
      name: "Chicken Ceaser",
      imageURL:
        "https://reciperunner.com/wp-content/uploads/2017/07/Grilled-Chicken-Caesar-Salad-Photograph.jpg",
      price: "£6.55",
      orderCount: 0,
    },
    {
      name: "Pepperoni Pizza",
      imageURL:
        "https://www.dogtownpizza.com/wp-content/uploads/2020/01/picking-slice-of-pepperoni-pizza-picture-id1133727757.jpg",
      price: "£7.00",
      orderCount: 0,
    },
    {
      name: "Chicken Tenders",
      imageURL:
        "https://butternutmountainfarm.com/sites/default/files/styles/large/public/images/recipes/img_2197_1.jpg?itok=7aEzorlz",
      price: "£4.50",
      orderCount: 0,
    },
    {
      name: "Signiture Milkshake",
      imageURL:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/milkshake-b0d6105.jpg?quality=90&webp=true&resize=440,400",
      price: "£3.50",
      orderCount: 0,
    },
    {
      name: "Chocolate Sundae",
      imageURL:
        "https://images.aws.nestle.recipes/original/2020_06_03T13_22_21_mrs_ImageRecipes_147692lrg.jpg",
      price: "£3.99",
      orderCount: 0,
    },
  ];

  //const [quantity, setQuantity] = useState(0);
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  // quantity = menuItems.orderCount;

  const quantityInc = (menuItemName) => {
    setMenuItems((currMenuItems) => {
      let newArr = [...currMenuItems];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].name === menuItemName) {
          newArr[i].orderCount += 1;
        }
      }
      return newArr;
    });
  };

  return (
    <div className="row">
      <div className="menu-list">
        <ul id="list">
          {menuItems.map((menuItem) => {
            return (
              <div className="column">
                <li className="listItem" key={menuItem.name}>
                  <h3 id="menuItemName">{menuItem.name}</h3>
                  <img
                    alt=""
                    className="menu-img"
                    src={menuItem.imageURL}
                  ></img>
                  <h4>Price: {menuItem.price}</h4>
                  <h5 id="quantity">Qty: {menuItem.orderCount}</h5>
                  <button
                    onClick={() => {
                      quantityInc(menuItem.name);
                    }}
                    type="submit"
                    id="addButton"
                  >
                    Add
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
