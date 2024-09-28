import React from "react";
import "../DashBoard/CustomScroll.css"; // Import custom scrollbar CSS

const FoodEntries = () => {
  const data = [
    {
      meal: "Breakfast",
      food: "Porridge Oats",
      calories: "150 kcal",
      proteins: "12g",
      carbs: "50g",
      fat: "2g",
    },
    {
      meal: "Breakfast",
      food: "Banana whole",
      calories: "90 kcal",
      proteins: "2g",
      carbs: "20g",
      fat: "7g",
    },
    {
      meal: "Breakfast",
      food: "Porridge Oats",
      calories: "150 kcal",
      proteins: "12g",
      carbs: "50g",
      fat: "2g",
    },
    {
      meal: "Breakfast",
      food: "Banana whole",
      calories: "90 kcal",
      proteins: "2g",
      carbs: "20g",
      fat: "7g",
    },
    {
      meal: "Breakfast",
      food: "Natural honey",
      calories: "22 kcal",
      proteins: "1g",
      carbs: "12g",
      fat: "2g",
    },
    {
      meal: "Breakfast",
      food: "Porridge Oats",
      calories: "150 kcal",
      proteins: "12g",
      carbs: "50g",
      fat: "2g",
    },
    {
      meal: "Breakfast",
      food: "Banana whole",
      calories: "90 kcal",
      proteins: "2g",
      carbs: "20g",
      fat: "7g",
    },
    {
      meal: "Breakfast",
      food: "Natural honey",
      calories: "22 kcal",
      proteins: "1g",
      carbs: "12g",
      fat: "2g",
    },
  ];

  return (
    <div className="w-[74.5%] h-[390px] p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between">
        <h2 className="text-4xl font-normal mb-4">Food entries</h2>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.28934 3.17988C4.77512 7.64926 11.2117 15.9323 11.2117 15.9323V26.2861C11.2117 27.2352 11.9883 28.0117 12.9374 28.0117H16.3886C17.3377 28.0117 18.1143 27.2352 18.1143 26.2861V15.9323C18.1143 15.9323 24.5336 7.64926 28.0194 3.17988C28.8994 2.04096 28.0884 0.401611 26.6561 0.401611H2.65259C1.22032 0.401611 0.409273 2.04096 1.28934 3.17988Z"
            fill="#3D73AF"
          />
        </svg>
      </div>

      <div className="h-[42px] flex justify-between bg-[#F8F4EE] p-2 mb-5 mr-7">
        <div>Meal</div>
        <div className="ml-10">Food</div>
        <div className="ml-16">Calories</div>
        <div>Proteins</div>
        <div className="mr-5">Carbs</div>
        <div className="mr-5">Fat</div>
      </div>

      <div className="max-h-60 overflow-y-auto scrollbar-hide pr-6">
        <ul className="divide-y divide-gray-200">
          {data.map((entry, index) => (
            <li
              key={index}
              className={`h-[42px] flex justify-between p-2 border-none bg-[#CDDCEB] mb-5 pr-8`}
            >
              <div>{entry.meal}</div>
              <div>{entry.food}</div>
              <div>{entry.calories}</div>
              <div>{entry.proteins}</div>
              <div>{entry.carbs}</div>
              <div>{entry.fat}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodEntries;
