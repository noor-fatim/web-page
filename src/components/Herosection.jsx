const Herosection = () => {
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="src/assets/shoe-pic.png"
          class="d-block mx-lg-auto img-fluid bg-remove"
          alt="Bootstrap Themes"
          width="300"
          height="300"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6 section-1">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Step into Comfort and Style with Our Latest Sneakers!
        </h1>
        <p class="lead">
          Elevate your everyday look with our new line of sneakers, designed for
          ultimate comfort and modern style. Whether you're hitting the gym or
          strolling through the city, these shoes provide the perfect blend of
          support and fashion
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            Buy Now
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
