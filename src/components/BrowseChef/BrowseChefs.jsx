import React from 'react';

const ChefCard = ({ imageUrl, title, text }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="Chef" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

const ChefList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <ChefCard
        imageUrl="url_to_image_1.jpg"
        title="Chef 1"
        text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <ChefCard
        imageUrl="url_to_image_2.jpg"
        title="Chef 2"
        text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <ChefCard
        imageUrl="url_to_image_3.jpg"
        title="Chef 3"
        text="This is a longer card with supporting text below as a natural lead-in to additional content."
      />
      <ChefCard
        imageUrl="url_to_image_4.jpg"
        title="Chef 4"
        text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
    </div>
  );
};

export default ChefList;
