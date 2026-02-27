import { useEffect, useState } from "react";

const Product = () => {
    const API = import.meta.env.VITE_API;
    const CATS = ["smartphones", "laptops", "tablets", "headphones", "tv", "gaming", "accessories", "ereader"];

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetch(`${API}/app/products?search=${search}&category=${category}`)
            .then(r => r.json()).then(d => setProducts(d.products || []))
    }, [search, category])
    return (
        <div className="flex w-[80%] mx-auto justify-center items-center">
            <div className="px-8 py-6">
                <div className="flex gap-3 mb-5">
                    <input
                        placeholder="Search products..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    />
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 outline-none focus:border-indigo-400 cursor-pointer"
            >
              <option value="">All Categories</option>
              {CATS.map(c => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>

          <p className="text-gray-400 text-sm mb-4">{products.length} products found</p>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_100px_100px] px-5 py-3 bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wide">
              <span>Product</span>
              <span>Category</span>
              <span>Price</span>
              <span></span>
            </div>

            {products.length === 0 ? (
              <div className="py-16 text-center text-gray-400">No products found.</div>
            ) : (
              products.map((p) => (
                <div
                  key={p.id}
                  className="grid grid-cols-[2fr_1fr_100px_100px] px-5 py-4 border-b border-gray-100 last:border-0 items-center hover:bg-gray-50 transition"
                >
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{p.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{p.description}</div>
                  </div>
                  <div>
                    <span className="text-indigo-600 text-xs font-semibold px-2.5 py-1 capitalize">
                      {p.category}
                    </span>
                  </div>
                  <div className="font-bold text-emerald-500 text-base">₹{p.price}</div>
                </div>
              ))
            )}
          </div>
        </div>
    </div>
  );
};

export default Product;
