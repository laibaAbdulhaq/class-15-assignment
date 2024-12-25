import React from "react";
import Link from "next/link";
import image from "next/image"

export default async function Home() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
  const todo = await response.json();

  return (
    <div className="bg-blue-300">
    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 w-full xl:w-[1200px] mx-12 md:mx-auto lg:mx-10 xl:mx-auto    text-black">
      {todo.map((todo: any) => (
      
        <div key={todo.id} className="p-4 ">
          <img src="todos.png" alt="todo picture" width="200" height="200"/>
          <Link href={`/${todo.id}`}>
            <h1 className="py-2">{todo.title}</h1>
          </Link>
        </div> 
      ))}
      </div>
    </div>
  );
}
