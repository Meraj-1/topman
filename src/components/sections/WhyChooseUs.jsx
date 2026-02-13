export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-4xl font-luxury text-gold mb-10">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-gold text-xl mb-2">Premium Fabrics</h3>
          <p className="text-gray-400">
            We use high-quality materials for unmatched comfort.
          </p>
        </div>

        <div>
          <h3 className="text-gold text-xl mb-2">Perfect Tailoring</h3>
          <p className="text-gray-400">
            Custom-fit measurements for every client.
          </p>
        </div>

        <div>
          <h3 className="text-gold text-xl mb-2">Luxury Designs</h3>
          <p className="text-gray-400">
            Unique designer pieces crafted with precision.
          </p>
        </div>
      </div>
    </section>
  );
}
