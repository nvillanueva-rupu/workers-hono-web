import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Sitio Informativo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
  </style>
</head>
<body class="bg-zinc-950 text-zinc-100">

  <!-- Hero -->
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-purple-950 to-black relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle,#a855f7_0%,transparent_70%)] opacity-30"></div>
    <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        Título del Sitio
      </h1>
      <p class="text-xl md:text-2xl text-zinc-400 mb-10">Tu descripción atractiva aquí. Información clara y profesional.</p>
      <a href="#secciones" class="bg-purple-600 hover:bg-purple-700 px-10 py-5 rounded-2xl text-lg font-medium inline-flex items-center gap-3 transition">
        Ver Información <i class="fas fa-arrow-down"></i>
      </a>
    </div>
  </section>

  <!-- Contenido -->
  <section id="secciones" class="py-20 px-6 max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-16">Información Principal</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition">
        <i class="fas fa-lightbulb text-5xl text-yellow-400 mb-6"></i>
        <h3 class="text-2xl font-semibold mb-4">Sección 1</h3>
        <p class="text-zinc-400">Contenido detallado de la primera sección.</p>
      </div>
      <div class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition">
        <i class="fas fa-chart-line text-5xl text-green-400 mb-6"></i>
        <h3 class="text-2xl font-semibold mb-4">Sección 2</h3>
        <p class="text-zinc-400">Contenido de la segunda sección.</p>
      </div>
      <div class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition">
        <i class="fas fa-users text-5xl text-blue-400 mb-6"></i>
        <h3 class="text-2xl font-semibold mb-4">Sección 3</h3>
        <p class="text-zinc-400">Contenido de la tercera sección.</p>
      </div>
    </div>
  </section>

</body>
</html>
  `)
})

export default app
