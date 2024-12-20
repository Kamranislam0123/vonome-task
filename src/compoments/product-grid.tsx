export function ProductGrid() {
    const products = Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      name: "Paracetamol 500Mg",
      price: "Tk. 180",
      stock: 150,
      image: "/placeholder.svg?height=100&width=100",
      status: i % 3 === 0 ? "Out of stock" : "In stock",
      discount: i % 2 === 0 ? "5% Off" : null,
    }))
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-gray-900">{product.price}</span>
                {product.discount && (
                  <span className="text-xs text-red-500">{product.discount}</span>
                )}
              </div>
              <div className="mt-2">
                <span
                  className={`text-xs ${
                    product.status === "In stock"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {product.status}
                </span>
                {product.status === "In stock" && (
                  <span className="ml-1 text-xs text-gray-500">
                    ({product.stock})
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  