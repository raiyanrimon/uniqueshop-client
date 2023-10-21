import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const brandName = form.brand.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const image = form.image.value;
    const type = form.type.value;
    const newProduct = {
      name,
      price,
      brandName,
      rating,
      description,
      image,
      type,
    };
    console.log(newProduct);
    fetch(
      `https://unique-shop-server-cgne3mnfw-golam-raiyans-projects.vercel.app/product`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.info("Product Added Successfully");
        }
      });
    form.reset();
  };

  return (
    <div className="bg-[#a29a81] max-w-6xl mx-auto mt-20 md:p-24 p-10">
      <h2 className="font-extrabold text-4xl text-center my-5">
        Add a Product
      </h2>
      <form onSubmit={handleAddProduct}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Product Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="numbers"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Product"
          className="btn btn-block mt-3"
        />
      </form>
    </div>
  );
};

export default AddProduct;
