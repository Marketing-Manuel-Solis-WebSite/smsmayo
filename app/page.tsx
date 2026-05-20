import Image from "next/image";
import CallButton from "./components/CallButton";
import VideoEmbed from "./components/VideoEmbed";
import StickyCallBar from "./components/StickyCallBar";
import { PHONE_NUMBER_DISPLAY } from "./lib/tracking";

const practiceAreas = [
  { title: "Inmigración", desc: "Defensa, visas y residencia." },
  { title: "Accidentes", desc: "Auto, peatón y trabajo." },
  { title: "Lesiones Personales", desc: "Atención a su reclamo." },
  { title: "Defensa Criminal", desc: "Asistencia en su proceso." },
  { title: "Compensación Laboral", desc: "Trámite de su caso." },
  { title: "Asuntos Familiares", desc: "Representación legal." },
];

const steps = [
  {
    n: "01",
    title: "Llame",
    desc: "Marque y hable con nuestro equipo en español.",
  },
  {
    n: "02",
    title: "Cuente su caso",
    desc: "Escuchamos los detalles de su situación.",
  },
  {
    n: "03",
    title: "Avancemos",
    desc: "Iniciamos el proceso para arreglar su caso.",
  },
];

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden pb-32">
      <header className="relative z-10 px-5 pt-6">
        <div className="mx-auto flex max-w-md items-center justify-center">
          <div className="relative h-16 w-[220px]">
            <Image
              src="/LogoManuelSolis.png"
              alt="Law Offices Of Manuel Solis"
              fill
              priority
              sizes="220px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto mt-4 max-w-md px-5">
        <div className="divider-gold" />
      </div>

      <section className="relative px-5 pt-8">
        <div className="mx-auto max-w-md text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light shadow-[0_0_8px_rgba(241,210,126,0.8)]" />
            Atención en español
          </span>

          <h1 className="font-serif mt-5 text-[34px] leading-[1.05] sm:text-[40px]">
            <span className="text-white">Hable hoy con</span>
            <br />
            <span className="gold-text">Law Offices Of</span>
            <br />
            <span className="gold-text">Manuel Solis</span>
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-white/80">
            Nuestro equipo legal está listo para escucharle y trabajar
            para arreglar su caso. Llame ahora y reciba atención directa.
          </p>

          <div className="mt-7 space-y-3">
            <CallButton
              location="hero_primary"
              label="Llamar ahora"
              subLabel={PHONE_NUMBER_DISPLAY}
              variant="primary"
              size="xl"
              pulse
            />
            <CallButton
              location="hero_secondary"
              label="Hablar con un representante"
              variant="ghost"
              size="md"
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-[11px] uppercase tracking-[0.2em] text-white/55">
            <span className="flex items-center gap-1.5">
              <Dot /> Español
            </span>
            <span className="flex items-center gap-1.5">
              <Dot /> Atención directa
            </span>
            <span className="flex items-center gap-1.5">
              <Dot /> Equipo legal
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 pt-10">
        <div className="mx-auto max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
              Conózcanos
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>
          <VideoEmbed />
          <div className="mt-5">
            <CallButton
              location="below_video"
              label="Llamar después del video"
              subLabel="Hablemos hoy"
              variant="primary"
              size="lg"
              pulse
            />
          </div>
        </div>
      </section>

      <section className="px-5 pt-14">
        <div className="mx-auto max-w-md">
          <h2 className="font-serif text-center text-[26px] leading-tight">
            <span className="text-white">Un equipo legal a su lado para</span>{" "}
            <span className="gold-text">arreglar su caso</span>
          </h2>

          <ul className="mt-6 space-y-3">
            {[
              {
                t: "Atención en español",
                d: "Conversamos con usted con claridad y respeto.",
              },
              {
                t: "Equipo legal completo",
                d: "Abogados y personal de apoyo en cada paso.",
              },
              {
                t: "Trayectoria reconocida",
                d: "Años representando casos en distintas áreas.",
              },
              {
                t: "Disponibilidad telefónica",
                d: "Una llamada y comenzamos a escucharle.",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <Check />
                <div>
                  <p className="font-semibold text-white">{item.t}</p>
                  <p className="mt-0.5 text-sm text-white/70">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <CallButton
              location="why_us"
              label="Llamar y avanzar con mi caso"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pt-14">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
              Tres pasos
            </p>
            <h2 className="font-serif mt-2 text-[26px] leading-tight text-white">
              Así <span className="gold-text">comenzamos</span>
            </h2>
          </div>

          <ol className="mt-6 space-y-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex items-start gap-4 rounded-2xl border border-gold/15 bg-white/[0.03] p-4"
              >
                <span className="font-serif gold-text text-[28px] leading-none">
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-white">{s.title}</p>
                  <p className="mt-0.5 text-sm text-white/70">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7">
            <CallButton
              location="steps"
              label="Empezar con una llamada"
              variant="primary"
              size="lg"
              pulse
            />
          </div>
        </div>
      </section>

      <section className="px-5 pt-14">
        <div className="mx-auto max-w-md rounded-3xl border border-gold/25 bg-gradient-to-b from-[#0f1c44]/80 to-[#0a1330]/60 p-6 text-center backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
            Law Offices Of Manuel Solis
          </p>
          <h2 className="font-serif mt-2 text-[26px] leading-tight text-white">
            Hable con nosotros y <span className="gold-text">arregle su caso</span>
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Marque y reciba atención inmediata de nuestro equipo legal.
          </p>

          <div className="mt-6 space-y-3">
            <CallButton
              location="final_primary"
              label="Llamar ahora"
              subLabel={PHONE_NUMBER_DISPLAY}
              variant="primary"
              size="xl"
              pulse
            />
            <CallButton
              location="final_secondary"
              label="Hablar con un representante"
              variant="secondary"
              size="md"
            />
          </div>
        </div>
      </section>

      <footer className="px-5 pt-12">
        <div className="mx-auto max-w-md text-center">
          <div className="relative mx-auto mb-4 h-10 w-[160px] opacity-90">
            <Image
              src="/LogoManuelSolis.png"
              alt="Law Offices Of Manuel Solis"
              fill
              sizes="160px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="divider-gold mb-4" />
          <p className="text-[12px] uppercase tracking-[0.2em] text-gold-light">
            Law Offices Of Manuel Solis
          </p>
          <p className="mt-2 text-[12px] text-white/55">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
          <p className="mt-1 text-[11px] text-white/40">
            Publicidad legal. Resultados anteriores no garantizan resultados similares.
          </p>
        </div>
      </footer>

      <StickyCallBar />
    </main>
  );
}

function Dot() {
  return (
    <span className="inline-block h-1 w-1 rounded-full bg-gold-light/80" />
  );
}

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full gold-gradient text-[#0a1330]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
