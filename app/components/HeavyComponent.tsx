"use client";

export default function HeavyComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
        Componente Cargado Dinámicamente
      </h2>
      
      <div className="space-y-6">
        <p className="text-lg text-blue-800 dark:text-blue-200">
          Este es un componente pesado que se carga de forma dinámica usando <code className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">dynamic()</code> de Next.js.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-blue-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Beneficios del Lazy Loading
            </h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
              <li>Reduce el tamaño inicial del bundle</li>
              <li>Mejora el tiempo de carga inicial</li>
              <li>Carga componentes solo cuando se necesitan</li>
              <li>Optimiza el rendimiento general</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-blue-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
              Casos de Uso
            </h3>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
              <li>Componentes grandes o complejos</li>
              <li>Contenido below-the-fold</li>
              <li>Modales y overlays</li>
              <li>Widgets de terceros</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
            💡 Tip de Rendimiento
          </h3>
          <p className="text-blue-800 dark:text-blue-200">
            Este componente se carga solo cuando es necesario, reduciendo el JavaScript inicial que el navegador debe descargar y ejecutar. Esto mejora significativamente las métricas de Core Web Vitals como FCP (First Contentful Paint) y TTI (Time to Interactive).
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-blue-900 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {item}
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                Item {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
