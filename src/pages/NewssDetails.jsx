import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Right from "../layouts/Right";

const NewssDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  
  console.log(news);
  
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section className="w-10/12 mx-auto grid grid-cols-12">
          <div className="col-span-9">
            <h2 className="font-bold text-xl mb-3">Dragon news:</h2>
            <div className="card bg-base-100 shadow-md">
              <figure className="px-10 pt-10">
                <img
                  src={news.image_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{news.details
                }</h2>
                <p>{news.title}</p>
                <div className="card-actions">
                  <Link to = "/" className="btn btn-primary">Back to Home </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <Right></Right>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewssDetails;
