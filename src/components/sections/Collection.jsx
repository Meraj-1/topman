const categories = [
  "Sherwani",
  "Jodhpuri",
  "Suits",
  "Tuxedo",
  "Indo-Western",
];

export default function Collection() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl text-center font-luxury text-gold mb-12">
        Our Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-8 text-center rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl text-gold">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
