import { ExpenseContainer } from "./ExpenseContainer/ExpenseContainer";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">
        Gerenciador de Gastos
      </h1>

      <ExpenseContainer />
    </main>
  );
}