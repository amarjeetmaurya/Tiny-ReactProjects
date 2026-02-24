// ProductGrid.jsx
import ProductCard from "./ProductCard";

export default function ProductGrid({
  items,
  activeItemId,
  onItemClick,
  onEdit,
  onDelete,
  onShare,
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          isActive={activeItemId === item.id}
          onDotsClick={() => onItemClick(item.id)}
          onEdit={() => onEdit(item)}      // 👈 passing the full item
          onDelete={() => onDelete(item)}  // 👈 so parent knows which one
          onShare={() => onShare(item)}    // 👈 was acted on
        />
      ))}
    </div>
  );
}