/*
"use server";
import { cacheTag, revalidateTag, updateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { eq } from "drizzle-orm";

// dit que le code tourne que du coté serveur
export type Task = {
  title: string;
  content: string;
};

const tasks: Task[] = [];

//exectution instantannée mais le code peut faire chose d'autre chose pendant l'attente
//liste les taches
export async function getTasks() {
  "use cache";
  cacheTag("tasks"); //execute ca quand on demande dans le cache
  const results = await db.select().from(tasksTable);
  return results;
}

//les taches
export async function createTask(from: FormData) {
  const title = from.get("title")?.toString();
  //const content = from.get("content")?.toString();
  if (title) {
    await db.insert(tasksTable).values({ title: title });
  }
  updateTag("tasks");
  // Full relead
  //const currentPage = (await headers()).get("referer") ?? "/";
  //redirect(currentPage ?? "/");
}
*/
"use server";

import { db } from "@/db";
import { tasksTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getTasks() {
  return await db.select().from(tasksTable);
}

export async function addTask(form: FormData) {
  await db.insert(tasksTable).values({
    title: String(form.get("title")),
    done: false,
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function editTask(form: FormData) {
  await db
    .update(tasksTable)
    .set({
      title: String(form.get("title")),
      done: form.get("done") === "on",
    })
    .where(eq(tasksTable.id, String(form.get("id"))));
  redirect((await headers()).get("referer") ?? "/");
}

export async function removeTask(id: string) {
  await db.delete(tasksTable).where(eq(tasksTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}
