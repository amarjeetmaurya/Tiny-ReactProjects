// ProductCard.jsx
export default function ProductCard({
  item,
  isActive,
  onDotsClick,
  onEdit,
  onDelete,
  onShare,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between relative">

      {/* Item Name */}
      <span className="text-gray-700 font-medium">{item.name}</span>

      {/* Three Dots Button */}
      <button
        onClick={onDotsClick}
        className="text-gray-400 hover:text-gray-700 text-xl font-bold px-2 rounded hover:bg-gray-100 transition"
      >
        ⋯
      </button>

      {/* Dropdown Menu */}
      {isActive && (
        <div className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-36">
          <p
            onClick={onEdit}
            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
          >
            ✏️ Edit
          </p>
          <p
            onClick={onDelete}
            className="px-4 py-2 hover:bg-red-50 cursor-pointer text-sm text-red-500"
          >
            🗑️ Delete
          </p>
          <p
            onClick={onShare}
            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
          >
            📤 Share
          </p>
        </div>
      )}
    </div>
  );
}