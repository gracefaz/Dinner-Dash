import { useState } from "react";

function SpecialOffer() {
  const initialSpecialOfferItems = [
    {
      name: "Spicy Wedges",
      imageURL:
        "https://theeverykitchen.com/wp-content/uploads/2019/07/air-fryer-spiced-potato-wedges-500x500.jpg",
      price: "£3.99",
      orderCount: 0,
    },
    {
      name: "Garlic Bread",
      imageURL:
        "https://www.simplyrecipes.com/thmb/_kfMeM8vmbWkGWn6Y0PDmHdfYu4=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__09__Garlic-Bread-LEAD-1-8b9944bb8e7a4fc49094da4d34f7ba50.jpg",
      price: "£4.00",
      orderCount: 0,
    },
    {
      name: "Cookie Dough",
      imageURL:
        "https://www.chelseasmessyapron.com/wp-content/uploads/2018/11/Edible-Cookie-Dough-7.jpg",
      price: "£3.99",
      orderCount: 0,
    },
    {
      name: "Root Beer",
      imageURL:
        "https://www.liquor.com/thmb/aEcipdKA3bO32i1CItgxSXclpb0=/735x0/boozy-rootbeer-float-720x720-primary-86031db0158b4d03bc74392767244438.jpg",
      price: "£2.99",
      orderCount: 0,
    },
  ];

  const [specialOfferItems, setSpecialOfferItems] = useState(
    initialSpecialOfferItems
  );

  // quantity = menuItems.orderCount;

  const quantityInc = (specialOfferItemName) => {
    setSpecialOfferItems((currSpecialOfferItems) => {
      let newArr = [...currSpecialOfferItems];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].name === specialOfferItemName) {
          newArr[i].orderCount += 1;
        }
      }
      return newArr;
    });
  };

  return (
    <div className="specialOffer">
      <div className="row">
        <div className="menu-list">
          <h1 id="whynottry">Why not try?</h1>
          <ul id="list">
            {specialOfferItems.map((specialOfferItem) => {
              return (
                <div className="column">
                  <li className="listItem" key={specialOfferItem.name}>
                    <h3 id="menuItemName">{specialOfferItem.name}</h3>
                    <img
                      alt=""
                      className="menu-img"
                      src={specialOfferItem.imageURL}
                    ></img>
                    <h4>Price: {specialOfferItem.price}</h4>
                    <h5 id="quantity">Qty: {specialOfferItem.orderCount}</h5>
                    <button
                      onClick={() => {
                        quantityInc(specialOfferItem.name);
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
    </div>
  );
}

export default SpecialOffer;
