import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, price, brandName, rating, description, image } = product;
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const brandName = form.brand.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const image = form.image.value;
    const updatedProduct = {
      name,
      price,
      brandName,
      rating,
      description,
      image,
    };
    console.log(updatedProduct);
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.info("Product Updated Successfully");
        }
      });
  };

  return (
    <div className="bg-[#c9bc96] max-w-6xl mx-auto mt-20 md:p-24 p-10">
      <h2 className="font-extrabold text-4xl text-center my-5">
        Update a Product
      </h2>
      <form onSubmit={handleUpdateProduct}>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={image}
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Product Name"
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
                defaultValue={brandName}
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
                defaultValue={price}
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
                defaultValue={description}
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
                defaultValue={rating}
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

export default UpdateProduct;
