import data from "@/data/data";
import Layout from "@/Components/Layouts.tsx/Layout";
import ProductItems from "@/Components/ProductItems";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItems product={product} key={product.name}></ProductItems>
          ))}
        </div>
      </Layout>
    </div>
  );
}
