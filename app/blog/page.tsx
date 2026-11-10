import { addTask, editTask, getTasks, removeTask } from "@/app/lib/tasks";

export default async function Page() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-4xl text-center m-10">Blog de la planète Krypton</h1>
      <h2 className="text-2xl p-3">
        Ajoute du contenu et Superman vous sauvera{" "}
      </h2>
      <form action={addTask}>
        <textarea
          name="title"
          placeholder="Ecrire votre contenu ici"
          rows={5}
          className="resize w-3xl rounded-lg border p-3 m-1"
        />
        <button className="rounded-lg p-3 bg-green-400">Ajouter</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border border-gray-400 rounded-lg p-3 m-2 mb-3 shadow-sm"
          >
            <p className="break-all whitespace-pre-wrap">{task.title}</p>

            <details>
              <summary className="text-blue-600">Modifier</summary>
              <form action={editTask}>
                <input type="hidden" name="id" value={task.id} />
                <textarea
                  name="title"
                  defaultValue={task.title}
                  className="resize m-2 p-2"
                />
                <button>Enregistrer</button>
              </form>
            </details>

            <form action={removeTask.bind(null, task.id)}>
              <button className="text-red-600">Supprimer</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
