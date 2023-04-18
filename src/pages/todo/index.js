import Head from "next/head";
import React from "react";
import style from "../../styles/Todo.module.css";
import Link from "next/link";
export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();
  return { props: { todos } };
}

function todo({ todos }) {
  return (
    <div>
      <Head>
        <title>Tarefas</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>Tarefas por fazer</h1>
      <ul className={style.todolist}>
        {todos.map((item)=>(
            <Link href={`todo/${item.id}`}>{item.title}</Link>
        ))}
      </ul>
    </div>
  );
}

export default todo;
