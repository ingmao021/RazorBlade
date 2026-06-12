import React, { useState, useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'descripcion', 'instrucciones', 'detalles', 'uso'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Focus on the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    {
      id: 'inicio',
      name: 'Inicio',
      href: '#inicio',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'descripcion',
      name: 'Info',
      href: '#descripcion',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'instrucciones',
      name: 'Pasos',
      href: '#instrucciones',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      id: 'detalles',
      name: 'Specs',
      href: '#detalles',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: 'uso',
      name: 'Videos',
      href: '#uso',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-body bg-white text-gray-800 selection:bg-brand-gold selection:text-white pb-20">
      {/* MOBILE HEADER (APP BAR STYLE) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Centered logo look */}
          <a
            href="#inicio"
            className="font-display text-xl font-bold tracking-wider text-gray-900 hover:text-brand-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>Razor</span>
            <span className="text-brand-gold">Blade</span>
          </a>

          {/* Quick Action Button for Mobile Users (e.g. Call / Contact) */}
          <a
            href="https://wa.me/#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold/15 text-brand-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-brand-gold/25 transition-colors duration-350"
            aria-label="Contact support"
          >
            <svg className="w-3.5 h-3.5 fill-current text-brand-dark" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.638-1.016-5.12-2.871-6.973-1.857-1.854-4.329-2.877-6.98-2.878-5.448 0-9.866 4.418-9.871 9.864-.002 1.702.451 3.361 1.311 4.823L1.92 19.986l6.727-1.764zm9.362-5.467c-.29-.145-1.716-.848-1.976-.942-.26-.096-.45-.144-.64.145-.19.285-.736.942-.902 1.134-.167.19-.335.213-.625.069-.29-.145-1.225-.451-2.333-1.441-.862-.77-1.443-1.721-1.612-2.011-.17-.29-.018-.447.127-.591.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.19.048-.36-.024-.507-.072-.145-.64-1.544-.877-2.114-.23-.556-.465-.48-.64-.49-.166-.008-.356-.01-.546-.01-.19 0-.5.07-.76.356-.26.285-.992.97-1.026 2.372-.034 1.402.992 2.76 1.133 2.952.14.192 1.95 2.978 4.723 4.174.66.284 1.175.454 1.577.582.663.21 1.267.18 1.744.109.531-.08 1.715-.7 1.957-1.378.24-.677.24-1.258.17-1.377-.07-.12-.26-.192-.55-.337z" />
            </svg>
            <span>Ayuda</span>
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-14">
        {children}
      </main>

      {/* MOBILE NAVIGATION BAR (FLOATING BOTTOM TAB BAR) */}
      <nav className="fixed bottom-3 left-4 right-4 z-50 bg-white/90 backdrop-blur-lg border border-gray-150 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2 rounded-2xl flex justify-around items-center max-w-lg mx-auto transition-transform duration-300">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              className={`flex flex-col items-center gap-1 py-1 px-3.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'text-brand-gold scale-105'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <span className="text-[10px] font-semibold tracking-wider uppercase">
                {link.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* FOOTER */}
      <footer className="bg-gray-50 text-gray-500 pt-16 pb-20 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="space-y-8 text-center max-w-md mx-auto">
            {/* Brand */}
            <div>
              <h2 className="font-display text-2xl font-bold tracking-wider text-gray-900">
                Razor<span className="text-brand-gold">Blade</span>
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed font-light mt-3">
                El arte del afeitado clásico. Diseñado con precisión quirúrgica para una herramienta profesional duradera.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-gray-400" aria-label="Facebook">
                <svg className="w-4.5 h-4.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-gray-400" aria-label="Instagram">
                <svg className="w-4.5 h-4.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-gray-400" aria-label="Twitter">
                <svg className="w-4.5 h-4.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>

            {/* Newsletter Mini */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-light mb-4">
                Entérate primero de nuestros lanzamientos.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex max-w-xs mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="bg-white border border-gray-200 px-3.5 py-1.5 text-xs text-gray-800 rounded-l focus:outline-none focus:border-brand-gold w-full transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-r transition-colors duration-300"
                >
                  Unirse
                </button>
              </form>
            </div>

            {/* Copyright */}
            <div className="text-[10px] text-gray-400 pt-6">
              <p>&copy; {new Date().getFullYear()} Razor Blade.</p>
              <p className="font-light mt-1 text-gray-400">
                Diseño premium optimizado para móvil.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
