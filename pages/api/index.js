export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="w-full p-4 flex justify-between bg-white shadow">
        <h1 className="text-xl font-bold">Rankory</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Join Beta
        </button>
      </header>

      <section className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">
          Track Your Local SEO Rankings
        </h2>
        <p className="mt-4 text-gray-600">
          Daily rank tracking & alerts for your business.
        </p>
      </section>

      <footer className="w-full p-4 text-center text-sm text-gray-500">
        © 2025 Rankory. All rights reserved.
      </footer>
    </main>
  );
}
