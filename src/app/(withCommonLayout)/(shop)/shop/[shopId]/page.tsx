"use client";
import ProductsCard from "@/src/components/Card/ProductCard";
import {
  useAddfollowerMutation,
  useCheckMyFolloQuery,
  useGetFollowerCountQuery,
  useRemoveFollowerMutation,
} from "@/src/redux/features/Follower/followerApi";
import { useGetShopProductQuery } from "@/src/redux/features/products/productApi";
import { useGetSingleshopQuery } from "@/src/redux/features/shop/shopApi";
import { Button } from "@nextui-org/button";
import { useParams } from "next/navigation";

const ShopPage = () => {
  const { shopId } = useParams();
  const { data: singleShop } = useGetSingleshopQuery(shopId);
  const singleShopData = singleShop?.data;
  const { data: getShopProduct } = useGetShopProductQuery(shopId);
  const shopProducts = getShopProduct?.data;
  const { data: getFollowerCount } = useGetFollowerCountQuery(shopId);
  const followerThisShop = getFollowerCount?.data?.follower;
  const [addFollower] = useAddfollowerMutation();
  const [removeFollower] = useRemoveFollowerMutation();
  const { data: checkMyFollow } = useCheckMyFolloQuery(shopId);
  const isIFollowThisShop = checkMyFollow?.data?.isFollow;

  const handleFollowShop = async () => {
    const res = await addFollower(shopId);
  };

  const handleUnfollowShop = async () => {
    const res = await removeFollower(shopId);
  };
  return (
    <div>
      {/* Profile Banner */}
      <div className="relative bg-blue-600 h-40">
        <div className="absolute bottom-3 left-4 flex items-center space-x-4 w-full">
          {/* Profile Picture */}
          <img
            className="w-28 h-28 rounded-full border-4 border-white"
            src={
              singleShopData?.logo ||
              "https://i.ibb.co.com/z89cgQr/profile.webp"
            }
            alt="Profile Picture"
            height={500}
            width={500}
          />
          <div className="text-white w-full">
            <h2 className="text-2xl font-bold">{singleShopData?.name} </h2>
            <h2 className="text-sm">{singleShopData?.title}</h2>
            <div className="flex justify-between items-center">
              <p className="text-sm">{followerThisShop} Followers</p>
              <div className="flex pr-6 md:pr-20 gap-2">
                {isIFollowThisShop ? (
                  <Button onClick={handleUnfollowShop} className="btn btn-sm">
                    Unfollow
                  </Button>
                ) : (
                  <Button onClick={handleFollowShop} className="btn btn-sm">
                    Follow
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shop products */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 gap-4">
        {shopProducts?.map((product: any) => (
          <ProductsCard key={product._id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
