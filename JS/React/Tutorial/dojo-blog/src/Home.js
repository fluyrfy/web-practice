import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // let name = "mario";
  // const [name, setName] = useState("mario");
  // const [age, setAge] = useState(25);
  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);

  // const [name, setName] = useState('Mario');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  // const handleClick = () => {
  //   setName("Frank");
  //   setAge(30);
  // };
  // const handleClickAgain = (name) => {
  //   console.log("hello " + name);
  // };

  // this hook use when first render & state value change
  // useEffect(() => {
  //   console.log('use effect ran');
  //   console.log(name);
  // }, [name]); // 在後方加入空數組限定只讓hook在第一次render時執行

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
      {/* <button onClick={() => setName('Frank')}>change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
