type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  discount: number | null;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="font-bold">{product.name}</h2>
      <p>{product.price} TL</p>
      <p>Stok: {product.stock}</p>
      {product.discount && <p className="text-red-500">%{product.discount} indirim</p>}
    </div>
  );
}
