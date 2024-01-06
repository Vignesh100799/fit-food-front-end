import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";

const Reviews = () => {
  const review = [
    {
      id: 1,
      name: "#HealthyEater123",
      comment: "The personalized meal suggestions are amazing! They've really helped me stick to my diet and stay on track. Highly recommended.",
    },
    {
      id: 2,
      name: "#FitAndHappy",
      comment: "This app has been a game-changer for me. The detailed nutrition analysis and community support make it easy to achieve my fitness goals. Love it!",
    },
    {
      id: 3,
      name: "#NutritionExplorer",
      comment: "As someone who loves trying new recipes, the recipe database access has been fantastic. The app provides a variety of delicious and healthy options.",
    },
    {
      id: 4,
      name: "#WellnessJourney",
      comment: "The 24/7 nutritionist support has been invaluable. Whenever I have questions or need guidance, there's always someone ready to help. Great app!",
    },
    {
      id: 5,
      name: "#DietSuccess2022",
      comment: "I've tried several diet apps, and this one stands out. The personalized plans and exclusive recipes keep things interesting, making my journey enjoyable and effective.",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 2500,  
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="reviews-container">
          <h2>Customer Reviews</h2>
          <Slider {...settings}>
            {review.map((review) => (
              <div key={review.id} className="reviews-slide">
                <h3>{review.name}</h3>
                <p>{review.comment}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
