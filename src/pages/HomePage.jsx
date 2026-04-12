import Banner from "../components/HomePage/Banner";
import BestSellingProducts from "../components/HomePage/BestSellingProducts";
import Categories from "../components/HomePage/Categories";
import FlashSale from "../components/HomePage/FlashSale";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
		</div>
	);
};

export default HomePage;
