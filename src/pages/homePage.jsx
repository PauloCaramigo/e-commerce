import HomePageProducts from "/src/script/HomePageProducts";
import Header from "/src/pages/components/Header";

export default function App() {
    return (
        <>
            <Header />
            <div className="absolute -z-1 bg-blue-200 h-96 w-full top-0"></div>
            <HomePageProducts />
        </>
    );
}
