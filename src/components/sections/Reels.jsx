export default function Reels() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-luxury text-gold mb-8">
        Latest Reels
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <iframe
          className="w-full h-64"
          src="https://www.instagram.com"
          title="Reel1"
        ></iframe>
        <iframe
          className="w-full h-64"
          src="https://www.instagram.com"
          title="Reel2"
        ></iframe>
        <iframe
          className="w-full h-64"
          src="https://www.instagram.com"
          title="Reel3"
        ></iframe>
      </div>
    </section>
  );
}
