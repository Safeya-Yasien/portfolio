import { uniques } from "@/data/servicesData";
import CustomTitle from "./CustomTitle";

export default function UniqueSection() {
  return (
    <section className="px-6 md:px-16">
      <CustomTitle title="What Makes Me Unique" />
      <div className="grid md:grid-cols-3 gap-8">
        {uniques.map((item) => (
          <div
            key={item.title}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition text-blue-900 dark:text-blue-400 relative overflow-hidden"
          >
            {/* icons */}
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
