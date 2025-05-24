import { useEffect, useState } from "react";

export default function HomePageProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
        .then(res => {
            if (!res.ok) throw new Error("Erro ao buscar produtos");
            return res.json();
        })
        .then(data => setProducts(data.products))
        .catch(err => {
            console.error(err);
            setError(err.message);
        });
    }, []);

    if (error) {
        return <p className="text-red-500">Falha ao carregar produtos: {error}</p>;
    }

    return (
        <div id="productsContainer" className="flex flex-wrap gap-4 justify-center mt-48">
            {products.map(product => (
                <div key={product.id} className="flex flex-col bg-gray-200 p-4 rounded-lg w-64 h-[30rem]">
                    <img src={product.images[0]} alt={product.title} className="object-contain h-40 mb-4"/>
                    <div className="flex-1 mb-4">
                        <h3 className="font-bold text-lg line-clamp-1 mb-2">{product.title}</h3>
                        <p className="line-clamp-4 text-sm text-gray-700">{product.description}</p>
                        <p className="font-bold mt-2">Price: ${product.price}</p>
                    </div>
                    <button className="mt-auto mx-auto w-48 bg-green-400 hover:bg-green-500 p-2 rounded-lg cursor-pointer">
                        Adicionar ao carrinho
                    </button>
                </div>
            ))}
        </div>
    );
}
