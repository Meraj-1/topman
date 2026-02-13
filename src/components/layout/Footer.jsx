export default function Footer() {
  return (
    <footer className="bg-[#111] py-10 text-center text-gray-400">
      <h3 className="text-gold font-luxury text-xl mb-4">
        TOPMAN DESIGNER STUDIO
      </h3>

      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
