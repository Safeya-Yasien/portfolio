import { uniques } from "@/app/data/servicesData";

export default function UniqueSection() {
  return (
    <section className="px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-8">What Makes Me Unique</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {uniques.map((item) => (
          <div
            key={item.title}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition text-blue-900 dark:text-blue-400"
          >
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
