import products from "@/data/valorant.json";
import ProductCard from "@/components/ProductCard";

export default function ValorantPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Valorant VP</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
