import { Field } from "../components/field";
import { Button } from "../components/button";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-3 max-w-sm mx-auto mt-10 pb-10">
      <Field type="email" placeholder="Email" />
      <Field type="password" placeholder="Mot de passe" />
      <Button type="submit">Se connecter</Button>
    </form>
  );
}
