"use client";

import ServiceCard from "@/app/ui/ServiceCard";
import "./servicios.css";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="
        bg-[#111414]
        py-[150px]
      "
    >
      <div className="wrap">
        <div
          data-reveal
          className="
            mb-[60px]
            max-w-[760px]
            text-left
          "
        >
          <span
            className="
              mb-[18px]
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[0.85rem]
              text-[#35D6C0]
            "
          >
            <span aria-hidden="true" className="h-px w-4 bg-[#35D6C0]" />
            Servicios y paquetes
          </span>

          <h2
            className="
              text-[clamp(2.4rem,4.5vw,4.4rem)]
              leading-none
              tracking-[-0.05em]
            "
          >
            Precios claros, sin sorpresas.
          </h2>

          <p className="mt-4 text-[#91A29E]">
            Cada paquete incluye acompañamiento y ajustes mensuales. Los precios
            de desarrollo se definen según el alcance del proyecto.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            min-[641px]:grid-cols-2
            min-[981px]:grid-cols-3
          "
        >
          <ServiceCard
            badge="Con seguimiento mensual"
            title="Estrategia de Marketing Digital"
            price="3.000€ – 6.000€"
            description="Diseñada para Instagram, Facebook y YouTube: calendario, guion y dirección creativa."
            examples={[
              "Clínica dental — captación de pacientes nuevos",
              "Estudio de yoga — lanzamiento de membresías",
              "Tienda de moda — campaña de temporada",
            ]}
          />

          <ServiceCard
            badge="Precio por unidad"
            title="Layout para Marketplace"
            price={
              <>
                100€{" "}
                <small className="text-[0.7rem] font-medium text-[#667673]">
                  / modelo
                </small>
              </>
            }
            description="Fichas de producto pensadas para convertir, con creatividad natural para el comprador final."
            examples={[
              "Ferretería — 40 fichas para Amazon",
              "Marca de suplementos — catálogo completo",
              "Boutique — fichas de producto para Etsy",
            ]}
          />

          <ServiceCard
            badge="3 paquetes disponibles"
            title="Branding con MVP"
            price="Esencial · Pro · Integral"
            description="Producción de marca con las aplicaciones necesarias para lanzar o relanzar un negocio."
            examples={[
              "Startup fintech — identidad + landing",
              "Restaurante — marca + carta digital",
              "Estudio de arquitectura — identidad + portafolio",
            ]}
          />

          <ServiceCard
            badge="Con seguimiento mensual"
            title="Gestión de Redes Sociales"
            price={
              <>
                desde 2.500€{" "}
                <small className="text-[0.7rem] font-medium text-[#667673]">
                  / mes
                </small>
              </>
            }
            description="Construcción de crecimiento real y seguimiento de datos, no solo publicaciones."
            examples={[
              "Centro de fisioterapia — crecimiento de comunidad",
              "Inmobiliaria — contenido semanal",
              "Marca de cosmética — gestión completa",
            ]}
          />

          <ServiceCard
            badge="Presupuesto a medida"
            title="Desarrollo & Automatización"
            price={
              <span className="text-[1.15rem]">
                Sitios · Apps · SaaS · Chatbots
              </span>
            }
            description="Sistemas, tiendas virtuales, automatizaciones, agentes autónomos y anuncios para marketplace."
            examples={[
              "Clínica — agenda con recordatorios automáticos",
              "Inmobiliaria — chatbot de cualificación multilingüe",
              "Energía solar — generador de propuestas en PDF",
            ]}
          />

          <ServiceCard
            badge="Creatividad de producto"
            title="Contenido para Ventas"
            price={<span className="text-[1.15rem]">Presupuesto a medida</span>}
            description="Elaboración creativa que hace los productos más atractivos, de forma natural, para el comprador."
            examples={[
              "Marca de belleza — fotografía y renders de producto",
              "Café de especialidad — contenido para delivery",
              "Marca deportiva — anuncios para marketplace",
            ]}
          />
        </div>

        <p
          className="
            mt-9
            text-center
            text-[0.86rem]
            text-[#667673]
          "
        >
          ¿No sabes qué paquete encaja con tu negocio? Cuéntanos el problema y
          te decimos qué construir.
        </p>
      </div>
    </section>
  );
}
