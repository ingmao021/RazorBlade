import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeader } from '../components/SectionHeader';

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <LayoutAdjuster>
      {/* Custom Keyframe Animations Style Tag */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 4s infinite linear;
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section id="inicio" className="relative min-h-[85vh] flex items-center pt-20 pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Subtle radial ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,160,106,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-5 relative z-10">
          <div className="flex flex-col gap-10 items-center">
            {/* Text & CTA content */}
            <div className="space-y-5 text-center w-full max-w-lg" data-aos="fade-up">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-sm">
                Edición de Lujo
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-[1.2]">
                El Arte del <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-600 to-brand-gold">
                  Afeitado Clásico
                </span>
              </h1>
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-sm mx-auto">
                Precisión, control y estilo en cada pasada. Vuelve a lo esencial con una herramienta de acero quirúrgico diseñada para toda la vida.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#descripcion"
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md shadow-brand-gold/15 rounded-sm text-center"
                >
                  Descubre el Producto
                </a>
                <a
                  href="#uso"
                  className="border border-gray-300 hover:border-brand-gold text-gray-600 hover:text-brand-gold px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm text-center"
                >
                  Ver en Acción
                </a>
              </div>

              {/* Meta specifications */}
              <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 max-w-xs mx-auto">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400 mb-0.5">Material</span>
                  <span className="text-xs font-semibold text-gray-800">Acero Quirúrgico</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400 mb-0.5">Cuchillas</span>
                  <span className="text-xs font-semibold text-gray-800">Titanio Doble</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400 mb-0.5">Mango</span>
                  <span className="text-xs font-semibold text-gray-800">Largo de 4"</span>
                </div>
              </div>
            </div>

            {/* Premium Image Placeholder */}
            <div className="w-full max-w-[320px]" data-aos="fade-up" data-aos-delay="100">
              <div className="relative w-full aspect-[4/5] rounded-lg border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 flex flex-col justify-between overflow-hidden shadow-xl hover:border-brand-gold/30 transition-all duration-500 group">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Top decorative element */}
                <div className="flex justify-between items-center text-[9px] text-gray-400 tracking-wider font-mono">
                  <span>MODEL R-1</span>
                  <span className="text-brand-gold">5 BLADES INCLUDED</span>
                </div>

                {/* Main Placeholder Text */}
                <div className="my-auto text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-150 flex items-center justify-center mx-auto text-brand-gold group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.871 4A17.926 17.926 0 003 12c0 2.871.67 5.586 1.871 8m14.13 0a17.93 17.93 0 001.87-8c0-2.871-.67-5.586-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.513.692l-1.17 1.4a2 2 0 01-3.07 0l-1.17-1.4A2 2 0 006.58 5H6.5" />
                    </svg>
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-700">
                    Contenedor de Imagen de la Afeitadora
                  </p>
                  <p className="text-[9px] text-gray-400">
                    (Reemplazar con imagen definitiva)
                  </p>
                </div>

                {/* Bottom decorative scale */}
                <div className="flex justify-between text-[8px] text-gray-450 font-mono pt-3 border-t border-gray-150">
                  <span>SCALE: 1:1</span>
                  <span>100% PREMIUM QUALITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLADE SEPARATOR */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 opacity-80 overflow-hidden animate-shine" />

      {/* SECTION 2: DESCRIPTION (About style from Story theme) */}
      <section id="descripcion" className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-12">
            {/* Lado B: Content & features details */}
            <div className="space-y-6">
              <SectionHeader
                category="Diseño y Ergonomía"
                title="Ajustable a tu Estilo"
                description="Esta afeitadora ajustable te brinda flexibilidad total en agresividad. Posición baja para un afeitado relajado; posición media o alta para eliminar rebabas de varios días con facilidad."
                centered={true}
              />

              {/* Warning/Attention box with custom dashed border */}
              <div className="border border-dashed border-brand-gold/45 bg-brand-gold/5 rounded-sm p-4 flex gap-3 items-start max-w-md mx-auto">
                <span className="text-brand-gold text-lg flex-shrink-0">⚠️</span>
                <p className="text-xs text-brand-gold font-light leading-relaxed">
                  <strong>Precaución:</strong> Ajusta la agresividad siempre con las manos secas. Sujeta el cabezal por los extremos laterales, manteniéndote alejado de los bordes afilados de la hoja.
                </p>
              </div>

              {/* Feature Grid (Left icon, right title + content) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <span className="text-md">✦</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-gray-800 uppercase mb-0.5">Mango de 4"</h4>
                    <p className="text-[11px] text-gray-500 font-light">Diseñado ergonómicamente, ideal para manos grandes.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <span className="text-md">✦</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-gray-800 uppercase mb-0.5">Sistema Clip</h4>
                    <p className="text-[11px] text-gray-500 font-light">Cambio de hoja rápido y seguro en segundos.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <span className="text-md">✦</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-gray-800 uppercase mb-0.5">Satinado Cepillado</h4>
                    <p className="text-[11px] text-gray-500 font-light">Acabado cromado antideslizante de alta durabilidad.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <span className="text-md">✦</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-gray-800 uppercase mb-0.5">Acero Inoxidable</h4>
                    <p className="text-[11px] text-gray-500 font-light">Estructura quirúrgica resistente a la corrosión.</p>
                  </div>
                </div>
              </div>

              {/* Minimal specs table */}
              <div className="pt-6 border-t border-gray-150 max-w-md mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-light text-gray-600 min-w-[280px]">
                    <tbody>
                      <tr className="border-b border-gray-150">
                        <td className="py-2.5 font-semibold text-gray-800 uppercase text-[10px] tracking-wider w-1/3">Material</td>
                        <td className="py-2.5 text-gray-500">Acero inoxidable quirúrgico cepillado</td>
                      </tr>
                      <tr className="border-b border-gray-150">
                        <td className="py-2.5 font-semibold text-gray-800 uppercase text-[10px] tracking-wider">Colores</td>
                        <td className="py-2.5 text-gray-500">Negro mate satinado / Plata cromo cepillado</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-semibold text-gray-800 uppercase text-[10px] tracking-wider">Contenido</td>
                        <td className="py-2.5 text-gray-500">1 Afeitadora Premium + 5 cuchillas de titanio</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Lado A: Portrait image placeholder with floating badges */}
            <div className="relative flex justify-center max-w-[320px] mx-auto w-full">
              <div className="relative w-full aspect-[3/4] rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center shadow-md p-6 group overflow-hidden">
                {/* Glow ring */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/10 to-transparent rounded-sm blur opacity-45 group-hover:opacity-80 transition duration-1000" />
                
                <div className="text-center relative z-10">
                  <span className="text-5xl text-brand-gold/30 block mb-3">✦</span>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-700 font-semibold mb-1">Detalle de Ángulo</p>
                  <p className="text-[9px] text-gray-400">(Placeholder de Imagen Secundaria)</p>
                </div>

                {/* Floating Badge 1 (Top Left) - Overlaps safely inside mobile layout */}
                <div className="absolute top-4 left-3 bg-white border border-gray-200 p-2.5 shadow-lg rounded-sm max-w-[110px] transition-colors duration-300">
                  <h3 className="font-display text-lg font-bold text-brand-gold leading-none">Titanio</h3>
                  <p className="text-[8px] uppercase tracking-wider text-gray-500 mt-0.5">Recubiertas</p>
                </div>

                {/* Floating Badge 2 (Bottom Right) */}
                <div className="absolute bottom-4 right-3 bg-white border border-gray-200 p-2.5 shadow-lg rounded-sm max-w-[110px] transition-colors duration-300">
                  <h3 className="font-display text-lg font-bold text-brand-gold leading-none">4 oz</h3>
                  <p className="text-[8px] uppercase tracking-wider text-gray-500 mt-0.5">Balanceado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLADE SEPARATOR */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 opacity-80 overflow-hidden animate-shine" />

      {/* SECTION 3: LOADING / ASSEMBLY INSTRUCTIONS (Timeline style from Story theme) */}
      <section id="instrucciones" className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <SectionHeader
            category="Guía de Inicio"
            title="Instrucciones de Carga"
            description="Aprende a recargar las hojas de forma segura mediante nuestro sistema de clip automático."
          />

          {/* Vertical Timeline Steps for Mobile */}
          <div className="flex flex-col gap-12 relative pt-2 max-w-sm mx-auto">
            {/* Step 1 */}
            <div className="relative space-y-3 text-center group" data-aos="fade-up">
              {/* Vertical connector line for mobile */}
              <div className="absolute left-1/2 -translate-x-1/2 top-16 w-[1px] h-14 border-l border-dashed border-gray-300 z-0" />
              
              <div className="relative z-10 w-16 h-16 mx-auto rounded-full border border-gray-200 bg-white flex items-center justify-center font-display text-2xl font-bold text-brand-gold group-hover:border-brand-gold transition-colors duration-300 shadow-sm">
                01
              </div>
              <h3 className="text-sm font-bold tracking-wider text-gray-800 uppercase mt-2">
                Retirar Placa
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light px-4">
                Presiona y levanta la placa superior del cabezal con el pulgar para liberar el compartimento de la hoja.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-3 text-center group" data-aos="fade-up" data-aos-delay="100">
              {/* Vertical connector line for mobile */}
              <div className="absolute left-1/2 -translate-x-1/2 top-16 w-[1px] h-14 border-l border-dashed border-gray-300 z-0" />

              <div className="relative z-10 w-16 h-16 mx-auto rounded-full border border-gray-200 bg-white flex items-center justify-center font-display text-2xl font-bold text-brand-gold group-hover:border-brand-gold transition-colors duration-300 shadow-sm">
                02
              </div>
              <h3 className="text-sm font-bold tracking-wider text-gray-800 uppercase mt-2">
                Colocar Hoja
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light px-4">
                Coloca la nueva hoja de titanio de doble filo en la guía del cabezal, manteniéndola alineada.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-3 text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="relative z-10 w-16 h-16 mx-auto rounded-full border border-gray-200 bg-white flex items-center justify-center font-display text-2xl font-bold text-brand-gold group-hover:border-brand-gold transition-colors duration-300 shadow-sm">
                03
              </div>
              <h3 className="text-sm font-bold tracking-wider text-gray-800 uppercase mt-2">
                Ajustar y Encajar
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light px-4">
                Vuelve a colocar la placa superior y presiona suavemente hasta escuchar el click de encaje magnético/clip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLADE SEPARATOR */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 opacity-80 overflow-hidden animate-shine" />

      {/* SECTION 4: TECHNICAL DETAILS (Card layout with border-top from Story theme) */}
      <section id="detalles" className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <SectionHeader
            category="Especificaciones"
            title="Detalles Técnicos"
            description="Una mirada profunda al diseño, ingeniería y niveles de ajuste de nuestra afeitadora."
          />

          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {/* Card 1: Aggressiveness Levels */}
            <div className="bg-gray-55 border border-gray-200 border-t-[3px] border-t-brand-gold p-5 rounded-sm shadow-sm space-y-3 hover:border-brand-gold/30 transition-all duration-300">
              <h3 className="font-display text-lg font-bold text-gray-900">Posiciones de Agresividad</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Regula la inclinación y exposición de la hoja de acuerdo a tu tipo de piel y vello.
              </p>
              <div className="pt-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-gray-600 font-light min-w-[280px]">
                    <tbody>
                      <tr className="border-b border-gray-150">
                        <td className="py-2 font-bold uppercase tracking-wider text-brand-gold w-1/3">Nivel 1-2</td>
                        <td className="py-2 text-gray-500 text-[11px]">Sensible, diario, vello fino.</td>
                      </tr>
                      <tr className="border-b border-gray-150">
                        <td className="py-2 font-bold uppercase tracking-wider text-brand-gold">Nivel 3-4</td>
                        <td className="py-2 text-gray-500 text-[11px]">Normal, medio, cada 2 días.</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-bold uppercase tracking-wider text-brand-gold">Nivel 5-6</td>
                        <td className="py-2 text-gray-500 text-[11px]">Vello grueso, barba de días.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Card 2: Materials & Finishes */}
            <div className="bg-gray-55 border border-gray-200 border-t-[3px] border-t-brand-gold p-5 rounded-sm shadow-sm space-y-3 hover:border-brand-gold/30 transition-all duration-300">
              <h3 className="font-display text-lg font-bold text-gray-900">Materiales & Acabados</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Construida con materiales seleccionados para soportar la humedad constante sin oxidarse y conservar la robustez estructural para toda la vida.
              </p>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Su recubrimiento de titanio en las hojas prolonga la retención del filo hasta 3 veces más que el acero tradicional, mientras que el cromado mate ofrece una superficie rugosa que optimiza la adherencia incluso con los dedos húmedos o jabonosos.
              </p>
              <div className="text-[9px] text-gray-400 font-mono tracking-wider pt-3 border-t border-gray-200">
                ACERO QUIRÚRGICO • RESISTENCIA A LA CORROSIÓN
              </div>
            </div>

            {/* Card 3: Clip vs Screw System */}
            <div className="bg-gray-55 border border-gray-200 border-t-[3px] border-t-brand-gold p-5 rounded-sm shadow-sm space-y-3 hover:border-brand-gold/30 transition-all duration-300">
              <h3 className="font-display text-lg font-bold text-gray-900">Diferencias de Sistemas</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Por qué el mecanismo de clip superior es superior al roscado tradicional por tornillo.
              </p>
              <div className="pt-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-gray-600 font-light min-w-[280px]">
                    <thead>
                      <tr className="border-b border-gray-200 text-[9px] uppercase tracking-wider text-gray-400 text-left">
                        <th className="pb-2">Aspecto</th>
                        <th className="pb-2">Clip (Nuestra)</th>
                        <th className="pb-2 text-gray-400">Tornillo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-150">
                        <td className="py-2 text-gray-700 font-bold uppercase tracking-wider text-[9px]">Cambio</td>
                        <td className="py-2 text-brand-gold font-medium">1 clic (Rápido)</td>
                        <td className="py-2 text-gray-400">Roscar (Lento)</td>
                      </tr>
                      <tr className="border-b border-gray-150">
                        <td className="py-2 text-gray-700 font-bold uppercase tracking-wider text-[9px]">Ajuste</td>
                        <td className="py-2 text-brand-gold font-medium">Auto perfecta</td>
                        <td className="py-2 text-gray-400">Manual (Riesgo)</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-700 font-bold uppercase tracking-wider text-[9px]">Seguro</td>
                        <td className="py-2 text-brand-gold font-medium">Alta (Cero toque)</td>
                        <td className="py-2 text-gray-400">Baja (Riesgoso)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Card 4: Caring & Maintenance */}
            <div className="bg-gray-55 border border-gray-200 border-t-[3px] border-t-brand-gold p-5 rounded-sm shadow-sm space-y-3 hover:border-brand-gold/30 transition-all duration-300">
              <h3 className="font-display text-lg font-bold text-gray-900">Cuidado & Mantenimiento</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Prolonga el rendimiento de tu afeitadora siguiendo estas sencillas pautas periódicas.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-light text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-brand-gold font-semibold">✓</span>
                  <span>Enjuaga con abundante agua caliente después de usar.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-gold font-semibold">✓</span>
                  <span>Sacude el exceso de agua (nunca seques la cuchilla).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-gold font-semibold">✓</span>
                  <span>Deja secar al aire libre en zona bien ventilada.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-gold font-semibold">✓</span>
                  <span>Cambia la hoja cada 3-5 afeitados regularmente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLADE SEPARATOR */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 opacity-80 overflow-hidden animate-shine" />

      {/* SECTION 5: VIDEOS / MODO DE USO (Grid Layout from Story theme) */}
      <section id="uso" className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <SectionHeader
            category="Video Tutoriales"
            title="Modo de Uso"
            description="Visualiza el paso a paso y perfecciona tu técnica de afeitado clásico profesional."
          />

          {/* Grid of video tutorials */}
          <div className="flex flex-col gap-8 max-w-sm mx-auto">
            {/* Video Card 1 */}
            <article className="bg-white border border-gray-200 overflow-hidden rounded-sm group shadow-sm hover:border-brand-gold/30 transition-all duration-300" data-aos="fade-up">
              {/* Aspect Ratio Video Box */}
              <div className="relative aspect-video bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden cursor-pointer">
                {/* Visual placeholder inside video */}
                <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400 text-[9px] font-mono mb-1.5">MP4 COMPATIBLE</span>
                  <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold">Video Tutorial 01</span>
                </div>

                {/* Overlapping Play Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/95 border border-gray-200 flex items-center justify-center text-gray-800 group-hover:text-brand-gold group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">PREPARACIÓN</span>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-brand-gold transition-colors duration-300">
                  Cómo cargar la cuchilla
                </h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Detalle paso a paso del montaje de la hoja aplicando medidas de seguridad básicas.
                </p>
              </div>
            </article>

            {/* Video Card 2 */}
            <article className="bg-white border border-gray-200 overflow-hidden rounded-sm group shadow-sm hover:border-brand-gold/30 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              {/* Aspect Ratio Video Box */}
              <div className="relative aspect-video bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden cursor-pointer">
                {/* Visual placeholder inside video */}
                <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400 text-[9px] font-mono mb-1.5">MP4 COMPATIBLE</span>
                  <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold">Video Tutorial 02</span>
                </div>

                {/* Overlapping Play Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/95 border border-gray-200 flex items-center justify-center text-gray-800 group-hover:text-brand-gold group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">TÉCNICA</span>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-brand-gold transition-colors duration-300">
                  Técnica de afeitado clásico
                </h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Cómo posicionar el mango a 30 grados y deslizar la máquina sin ejercer presión.
                </p>
              </div>
            </article>

            {/* Video Card 3 */}
            <article className="bg-white border border-gray-200 overflow-hidden rounded-sm group shadow-sm hover:border-brand-gold/30 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              {/* Aspect Ratio Video Box */}
              <div className="relative aspect-video bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden cursor-pointer">
                {/* Visual placeholder inside video */}
                <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center p-4 text-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400 text-[9px] font-mono mb-1.5">MP4 COMPATIBLE</span>
                  <span className="text-xs uppercase tracking-wider text-gray-700 font-semibold">Video Tutorial 03</span>
                </div>

                {/* Overlapping Play Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/95 border border-gray-200 flex items-center justify-center text-gray-800 group-hover:text-brand-gold group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">AJUSTE</span>
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-brand-gold transition-colors duration-300">
                  Ajuste de agresividad
                </h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Cómo elegir la numeración de agresividad y regular la separación de la hoja según tu piel.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      </LayoutAdjuster>
    </MainLayout>
  );
};

// Helper internal wrapper to ensure scroll-margin works correctly for navigation links
const LayoutAdjuster: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="[&_section]:scroll-mt-14">{children}</div>;
};
