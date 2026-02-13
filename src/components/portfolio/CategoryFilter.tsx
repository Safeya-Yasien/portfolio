interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
            activeCategory.toLowerCase() === cat.toLowerCase()
              ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
              : "bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 text-gray-600 dark:text-gray-400 hover:border-blue-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
