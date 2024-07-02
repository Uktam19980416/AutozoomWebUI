/* eslint-disable no-unused-vars */
import "./Blog.css";
import "./Blog_resp.css";

import { Link } from "react-router-dom";

//Images Imported
import blogImg1 from "../../assets/images/blogImg1.jpg";
import blogImg2 from "../../assets/images/blogImg2.jpg";
import blogImg3 from "../../assets/images/blogImg3.jpg";

//ShevronImg
import shevronRight from "../../assets/images/shevron.svg";

function Blog() {
  return (
    <div className="Blog">
      <div className="Blog_head">
        <a href="/" className="Blog_head_link">
          <span>Luxury Cars for Rent in Dubai</span> <span> / Blog</span>
        </a>
        <h1 className="Blog_header">Blog</h1>
      </div>
      <div className="Blog_row">
        <div className="Blog_col">
          <div className="Blog_col_Img_container">
            <img
              src={blogImg1}
              className="Blog_col_img"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="Blog_col_info">
            <h2 className="Blog_col_header">
              Top 3 Destinations to Visit in Dubai in a Rental Car
            </h2>
            <p className="Blog_col_para">
              One of the main reasons to hire a car in Dubai is the quality of
              the UAE roads. According to the World Economic Forum, the Emirates
              belong to the top seven countries with the most exemplary road
              infrastructure.
            </p>
            <div className="Blog_col_info_col">
              <span>25 Seb 2022</span>
              <Link to={`/blog/blog_info_1`} onClick={scrollTo({top:0})}> <img src={shevronRight} alt="" className="shevronRight" width={30} height={30} /></Link>
            </div>
          </div>
        </div>
        <div className="Blog_col">
          <div className="Blog_col_Img_container">
            <img
              src={blogImg2}
              className="Blog_col_img"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="Blog_col_info">
            <h2 className="Blog_col_header">
              Top 5 wonderful spots for a car photo session in Dubai
            </h2>
            <p className="Blog_col_para">
              Top 5 wonderful spots for a car photo session in Dubai There are
              so many wonderful things to do in Dubai, but when you rent a car
              your opportunities are nearly doubled. The number of places you
              will die to go to and make memorable pictures is such that it
              makes you impossible to resist to hire a mode of transportation,
              if not for a day or two, then at least for a couple of hours. And,
              while doing so, who could prove against the weakness of taking a
              photo of themselves inside or near the car they`ve rented?
            </p>
            <div className="Blog_col_info_col">
              <span>11 Feb 2022</span>
              <Link to={`/blog/blog_info_2`} onClick={scrollTo({top:0})}> <img src={shevronRight} alt="" className="shevronRight" width={30} height={30} /></Link>
            </div>
          </div>
        </div>
        <div className="Blog_col">
          <div className="Blog_col_Img_container">
            <img
              src={blogImg3}
              className="Blog_col_img"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="Blog_col_info">
            <h2 className="Blog_col_header">
              Top 5 Reasons to Rent a Car Dubai Style this Summer
            </h2>
            <p className="Blog_col_para">
              Summer is more than just a beach and a body, and Autozoom Luxury
              Car Rental is more than just a regular car hire business. We`re
              your one-stop four-wheel solution to making the most of your time
              in Dubai.
            </p>
            <div className="Blog_col_info_col">
              <span>31 Jul 2022</span>
              <Link to={`/blog/blog_info_3`} onClick={scrollTo({top:0})}> <img src={shevronRight} alt="" className="shevronRight" width={30} height={30} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
