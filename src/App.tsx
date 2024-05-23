import "./App.scss";

import liverpool from "/images/4192132231_6caf7cbe6c_b.jpg";

function App() {
  return (
    <>
      <header>
        <img src={liverpool} alt="liverpool fc" />
        <div className="header1"></div>
        <div className="header2"></div>
      </header>
      <h2>categories and Cards</h2>
      <div className="cards-container">
        <div className="card">
          <div className="single-card"></div>
          <div className="divtest">
            <p className="description">Description about card</p>
            <span>test testing</span>
          </div>
        </div>
        <div className="card">
          <div className="single-card"></div>
          <div className="divtest">
            <p className="description">Description about card</p>
            <span>test testing</span>
          </div>
        </div>
        <div className="card">
          <div className="single-card"></div>
          <div className="divtest">
            <p className="description">Description about card</p>
            <span>test testing</span>
          </div>
        </div>
        <div className="card">
          <div className="single-card"></div>
          <div className="divtest">
            <p className="description">Description about card</p>
            <span>test testing</span>
          </div>
        </div>
      </div>
      <h2>News Catalog</h2>
      <div className="news-container">
        <div className="news-post">
          <img src={liverpool} alt="Jurgen Klopp" />
          <div className="news-info">
            <p className="title">Title</p>
            <p className="news-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              eaque tempore eos porro debitis eveniet, laboriosam repellat eius
              alias sed numquam suscipit fugiat! Consequatur vero aliquam
              accusamus, deleniti nobis quam. Voluptatem sit facere incidunt
              exercitationem, quas et iste natus laboriosam animi tempore earum
              eos dicta aspernatur maxime assumenda similique velit molestias?
              Iste magnam deleniti cum vel. Quos, impedit a. Explicabo.
            </p>
          </div>
        </div>
        <div className="news-post">
          <img src={liverpool} alt="peopel" />
          <div className="news-info">
            <p className="title">Title</p>
            <p className="news-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              eaque tempore eos porro debitis eveniet, laboriosam repellat eius
              alias sed numquam suscipit fugiat! Consequatur vero aliquam
              accusamus, deleniti nobis quam. Voluptatem sit facere incidunt
              exercitationem, quas et iste natus laboriosam animi tempore earum
              eos dicta aspernatur maxime assumenda similique velit molestias?
              Iste magnam deleniti cum vel. Quos, impedit a. Explicabo.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <h1 className="">footer</h1>
      </footer>
    </>
  );
}

export default App;
