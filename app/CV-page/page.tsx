export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient from-indigo-600 to-sky-500 px-6 py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Bienvenue dans le CV de Florian
        </h1>
        <p className="mt-3 text-lg text-indigo-800">
          Étudiant en ingénieur · Électronique & informatique
        </p>
      </header>

      <section className="mx-auto max-w-2xl px-4">
        <h2 className="mt-6 mb-4 text-2xl font-semibold">Formation</h2>
        <div className="flex flex-col gap-4">
          <Institut_map
            instituts="Ecole Européenne de Bruxelles 4"
            duration="2012-2024"
            graduation="24 aout 2024, baccalauréat européen note:20/20"
            description="Obtion scientifique et approfondissement en mathématiques"
          />
          <Institut_map
            instituts="ECAM Brussels Engineering School"
            duration="2024-actuel"
            graduation=""
            description="Acuellement en 2ème année en obtion électronique informaique"
          />
        </div>
        <h2 className="mt-6 mb-4 text-2xl font-semibold">Projets</h2>
        <div className="flex flex-col gap-4">
          <Project_map
            project="Miligrammes en microgravité"
            duration="2023-2024"
            description="Mesure d'une masse de l'ordre de grandeur du miligramme en apesanteur. Cela à été possible gâce a l'étude d'un système oscillatoire dépendant de la masse"
          />
          <Project_map
            project="Algorithme Python"
            duration="2025-2026"
            description="Développment d'une intéligence aritificiel à l'aide un algorithme récursif. Le but étant d'apotimiser un coup dans le jeu Kamisado"
          />
        </div>
      </section>
    </main>
  );
}

function Institut_map(props: {
  instituts: string;
  duration: string;
  graduation?: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold">{props.instituts}</h3>
            <span className="rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-700">
              {props.duration}
            </span>
          </div>
          <span className="text-slate-400 transition-transform group-open:rotate-180">
            ▼
          </span>
        </summary>

        <div className="space-y-2 border-t border-slate-100 px-5 pb-5 pt-4 text-slate-600">
          {props.graduation && (
            <p>
              <span className="font-medium text-slate-800">Diplôme :</span>{" "}
              {props.graduation}
            </p>
          )}
          <p>
            <span className="font-medium text-slate-800">Description :</span>{" "}
            {props.description}
          </p>
        </div>
      </details>
    </div>
  );
}

function Project_map(props: {
  project: string;
  duration: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold">{props.project}</h3>
            <span className="rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-700">
              {props.duration}
            </span>
          </div>
          <span className="text-slate-400 transition-transform group-open:rotate-180">
            ▼
          </span>
        </summary>

        <div className="space-y-2 border-t border-slate-100 px-5 pb-5 pt-4 text-slate-600">
          <p>
            <span className="font-medium text-slate-800">Description :</span>{" "}
            {props.description}
          </p>
        </div>
      </details>
    </div>
  );
}
