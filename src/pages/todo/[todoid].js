import { useRouter } from "next/router";
import React from "react";
import todo from ".";

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoid}`
  );
  const todo = await data.json();
  return {
    props: { todo },
  };
}

//verifica os dados disponiveis
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const paths = data.map((todo) => {
    return {
      params: {
        todoid: `${todo.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

function Todo({todo}) {
  /*   const router=useRouter()
    const id=router.query.todoid */
  return (
    <div>
      <h2>Id:{todo.id} </h2>
      <p>{todo.title}</p>
    </div>
  );
}

export default Todo;
