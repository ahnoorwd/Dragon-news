import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftside = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1 className="font-semibold mb-3">Categhory({categories.length})</h1>
      <div className="flex flex-col">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} className="btn btn-base-100 my-2" key={category.id}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Leftside;
