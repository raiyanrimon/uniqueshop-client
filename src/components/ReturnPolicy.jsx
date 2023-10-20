const ReturnPolicy = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-5 text-red-300">
        Return and Refund Policy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border rounded-lg border-green-300  text-justify p-5 space-y-5">
          <h2 className="text-center font-semibold text-2xl">Refunds</h2>
          <p>
            Once we receive your returned item, we will inspect it and notify
            you about the status of your refund. If your return is approved, we
            will process the refund to your original payment method. Refunds may
            take several business days to appear in your account.
          </p>
        </div>
        <div className="border rounded-lg border-green-300  text-justify p-5 space-y-5">
          <h2 className="text-center font-semibold text-xl">
            Return Eligibility
          </h2>
          <p>
            We want you to be satisfied with your purchase. If you are not
            entirely happy with your order, we accept returns on most items
            within 7 days of receiving your order.
          </p>
        </div>
        <div className="border rounded-lg border-green-300  text-justify p-5 space-y-5">
          <h2 className="text-center font-semibold text-xl">Return Shipping</h2>
          <p>
            Customers are responsible for the cost of return shipping. We
            recommend using a trackable and insured shipping method to ensure
            your return is received safely.
          </p>
        </div>
        <div className="border rounded-lg border-green-300  text-justify p-5 space-y-5">
          <h2 className="text-center font-semibold text-xl">
            Damaged or Defective Items
          </h2>
          <p>
            If you receive a damaged or defective item, please contact us within
            3 days of receiving the order. We will provide instructions for
            returning the item and offer a replacement or a refund.
          </p>
        </div>
        <div className="border rounded-lg border-green-300  text-justify p-5 space-y-5">
          <h2 className="text-center font-semibold text-xl">
            Non-Returnable Items
          </h2>
          <p>
            Some items are not eligible for returns, including Handmade items.
          </p>
        </div>
        <div className="border rounded-lg border-green-300  text-justify p-5 space-y-5">
          <h2 className="text-center font-semibold text-xl">Return Process</h2>
          <p>
            To initiate a return, please contact our customer service team at
            with your order number and details about the product you would like
            to return. We will guide you through the return process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
