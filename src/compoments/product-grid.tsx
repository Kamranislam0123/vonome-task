export function ProductGrid() {
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: "Paracetamol 500Mg",
    price: "Tk. 180",
    stock: 150,
    image: "https://placehold.co/600x400/png?text=Image&shape=rounded",
    status: i % 3 === 0 ? "Out of stock" : "In stock",
    discount: i % 2 === 0 ? "5% Off" : null,
  }));

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-3 flex justify-start">
            <img
              src={product.image}
              alt={product.name}
              className="h-20 w-20 object-cover rounded-full"
            />
          </div>
          <div className="absolute top-2 right-2 text-xs font-medium">
            <span
              className={`${
                product.status === "In stock"
                  ? "text-emerald-600"
                  : "text-red-500"
              }`}
            >
              {product.status}
            </span>
            {product.status === "In stock" && (
              <div className="text-gray-500">({product.stock})</div>
            )}
            {product.status === "In stock" && product.discount && (
              <div className="text-xs text-red-500">
                <span>{product.discount}</span>
              </div>
            )}
          </div>
          <div className="text-left">
            <h3 className="text-sm font-medium text-gray-900">
              {product.name}
            </h3>
            <div className="mt-1">
              <span className="text-sm font-medium text-gray-900">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
