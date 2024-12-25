export default  async function TodosDetails  ({params}:{params :{id:string}}) {
    try {
  console.log("Params:", params); 

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  
  if (!response.ok) {
    console.error("Failed to fetch album details" );
    throw new Error(`HTTP error !status: ${response.status}`)
  }

  const todo = await response.json();

  return (
    <main className="w-[300px] mx-auto h-screen flex items-center justify-between">
    <div className="text-xl font-semibold  text-center p-8 space-y-2 py-20 bg-blue-400 border rounded-lg shadow-lg ">
      <h1 className="text-2xl font-bold">Todo Details</h1>
      <p><strong>ID:</strong> { todo.id}</p>
      <p><strong>Title:</strong>{todo.title}</p>
      <p><strong>Completed:</strong> { todo.completed ? "Yes" : "No"}</p>
    
    </div>
    </main>
  )
} catch (error){
    console.log("Error Fetching Todo:" ,error);
    <p>Error loading todo details.</p>
}
}

 
