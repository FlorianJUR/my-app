import { createTask, getTasks } from "@/app/lib/tasks";

export default async function () {
  const tasks = await getTasks(); //revient quand les tache sont prêtes
  return (
    <div className="flex">
      <section className="flex-1 min-w-0 break-all">
        <h1 className="text-4xl text-center">Mon Blog</h1>
        <ul className="list-disc">
          {tasks.map((task) => (
            <li key={task.title}>
              <h2 className="text-2xl">{task.title}</h2>
              <p>{task.content}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex-1 min-w-0">
        <form action={createTask}>
          <label>
            Titre :
            <input name="title" className="w-full border p-2" />
          </label>
          <label>
            Article :
            <textarea name="content" rows={6} className="w-full border p-2" />
          </label>
          <button>Ajouter</button>
        </form>
      </section>
    </div>
  );
}
