// ProductList.jsx
import { useState } from "react";
import ProductGrid from "./ProductGrid";

const products = [
  { id: 1, name: "MacBook Pro" },
  { id: 2, name: "iPhone 15" },
  { id: 3, name: "iPad Air" },
];

export default function ProductList() {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleEdit = (item) => {
    console.log("Editing:", item);
    alert(`Editing: ${item.name}`);
    setActiveItemId(null); // close dropdown
  };

  const handleDelete = (item) => {
    console.log("Deleting:", item);
    alert(`Deleted: ${item.name}`);
    setActiveItemId(null);
  };

  const handleShare = (item) => {
    console.log("Sharing:", item);
    alert(`Shared: ${item.name}`);
    setActiveItemId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Products</h1>
      <ProductGrid
        items={products}
        activeItemId={activeItemId}
        onItemClick={(id) =>
          setActiveItemId((prev) => (prev === id ? null : id))
        }
        onEdit={handleEdit}
        onDelete={handleDelete}
        onShare={handleShare}
      />
    </div>
  );
}