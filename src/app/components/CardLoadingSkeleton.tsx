export default function CardLoadingSkeleton() {
  return (
    <div className="w-56 h-80 rounded-md shadow-lg">
      <div className="w-56 h-56 bg-gray-400 animate-pulse rounded-t-md"></div>
      <div className="p-2">
        <div className="bg-gray-400 animate-pulse w-3/4 rounded-full h-4 mb-2"></div>
        <div className="bg-gray-400 animate-pulse w-1/4 rounded-full h-2 mb-2"></div>
      </div>
    </div>
  );
}
