import { useLoaderData } from "react-router-dom";
import Newscardd from "../components/Newscard/Newscardd";

const NewsPages = () => {
    const {data:news} = useLoaderData();
   // console.log(data);
    return (
        <div>
           
           <h1 className="font-semibold mb-3">Dragon News Home!!</h1>
          <div>
         
         {
            news.map(singlenews=> <Newscardd news={singlenews} key={singlenews._id}></Newscardd> )
         }

          </div>
        </div>
    );
};

export default NewsPages;