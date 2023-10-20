import {
  FcBusinessContact,
  FcMoneyTransfer,
  FcOvertime,
  FcTimeline,
} from "react-icons/fc";

const ShippingPolicy = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-4xl text-center text-orange-300">
        Fastest Shipping WorldWide
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 font-semibold">
        <div className="rounded-full border-black">
          <p className="flex ">
            <FcMoneyTransfer className="text-xl mr-2"></FcMoneyTransfer>{" "}
            Flat-rate shipping
          </p>
        </div>
        <div>
          <p className="flex">
            <FcTimeline className="text-xl mr-2"></FcTimeline>Real Time Order
            Tracking
          </p>
        </div>
        <div>
          <p className="flex">
            <FcOvertime className="text-xl mr-2"></FcOvertime>Less Processing
            Time
          </p>
        </div>
        <div>
          <p className="flex">
            <FcBusinessContact className="text-xl mr-2"></FcBusinessContact>
            Partnered with the best courier
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
