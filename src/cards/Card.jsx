import "./Card.css";
import Star from "../assets/images/Star 1.png";
import Image1 from "../assets/images/image 12.jpg"
import Bike from "../assets/images/mountain-bike 1.jpg"
import Wedding from "../assets/images/wedding-photography 1.png"
import John from "../assets/images/john-rodenn-castillo-XzUAEcZ7dDg-unsplash.jpg"

const Bloglist = () => {

   const blogs = [
     {
       title: "5.0 (6)-USA",
       image: Image1,
       body: "ONLINE",
       text: "From $136/",
       author: "Life lessons Kate Zaferes",
       id: 1,
     },
     {
       title: "5.0 (6)-USA",
       image: Wedding,
       body: "SOLD OUT",
       text: "From $136/",
       author: "Learn wedding photography",
       id: 2,
     },
     {
       title: "5.0 (6)-USA",
       image: Bike,
       body: "ONLINE",
       text: "From $136/",
       author: "Group mountain biking",
       id: 3,
     },
     {
       title: "5.0 (6)-USA",
       image: John,
       text: "From $136/",
       body: "ONLINE",
       author: "Life lessons Kate Zaferes",
       id: 3,
     },
   ];


  return (
    <>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <button className="online">{blog.body}</button>
            <img className="img" src={blog.image} alt="img" />
            <p className="title">
              <img className="star" src={Star} alt="" />
              {blog.title}
            </p>
            <p>{blog.author}</p>
            <p>
              <span>{blog.text}person</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bloglist;
