"use server";
import { cacheTag, revalidateTag, updateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// dit que le code tourne que du coté serveur
export type Task = {
  title: string;
  content: string;
};

const tasks: Task[] = [];

//exectution instantannée mais le code peut faire chose d'autre chose pendant l'attente
//liste les taches
export async function getTasks() {
  //"use cache";
  //cacheTag("tasks"); //execute ca quand on demande dans le cache
  return tasks;
}

//les taches
export async function createTask(from: FormData) {
  const title = from.get("title")?.toString();
  const content = from.get("content")?.toString();
  if (title && content) {
    tasks.push({ title, content });
  }
  updateTag("task");
  // Full relead
  //const currentPage = (await headers()).get("referer") ?? "/";
  //redirect(currentPage ?? "/");
}
