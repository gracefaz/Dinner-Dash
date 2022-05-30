function Menu() {
  const menuItems = [
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSUNdPHxU2MwG1DrpR2lvYxlxKudyfyzYPg&usqp=CAU",
      price: "£5.00",
      orderCount: 0,
    },
    {
      name: "Signiture Milkshake",
      imageURL:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/milkshake-b0d6105.jpg?quality=90&webp=true&resize=440,400",
      price: "£3.50",
      orderCount: 0,
    },
  ];

  //   const basket = {
  //     "Famous Wings": 0,
  //     "The New York Burger": 0,
  //     "Dirty Fries": 0,
  //   };

  return (
    <div className="menu-list">
      <ul id="list">
        {menuItems.map((menuItem) => {
          return (
            <li key={menuItem.name}>
              <h4>{menuItem.name}</h4>
              <img className="menu-img" src={menuItem.imageURL}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
