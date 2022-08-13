import './css/App.css';
import {useState, useEffect} from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

const API = 'http://localhost:5000'


function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // load todos on page load

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + '/todos').then((res) => res.json()).then((data) => data).catch((error) => console.log(error));

      setLoading(false);
      setTodos(res);
    }

    loadData();
  }, [])

  const HandlerSubmit = async (e) => {
    e.preventDefault();
    
    const todo = {
      id: Math.random(),
      title: title,
      time: time,
      description: description,
      done: false
    }

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      }
    })

    setTodos((prevState) => [...prevState, todo])

    setTitle("")
    setTime("")
    setDescription("")
  }

  const handleDelete = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    })

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleDone = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "content-type": "application/json",
      }
    })

    setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)));

  }

  if (loading){
    <p>Carregando...</p>
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>

      <div className="todo-main">
        <div className='form-todo'>
          <h2>Insira a sua proxima tarefa:</h2>
          <form onSubmit={HandlerSubmit}>
            <label htmlFor='title'>O que voce vai fazer?</label>
            <input type="text" name="title" placeholder="Titulo da tarefa" onChange={(e) => setTitle(e.target.value)} value={title || ""} 
            required 
            />

            <label htmlFor='description'>Descricao: </label>
            <input type="text" name="description" placeholder="descricao" onChange={(e) => setDescription(e.target.value)} value={description || ""} 
            required 
            />

            <label htmlFor='time'>Duracao: </label>
            <input type="number" name="time" placeholder="Tempo estimado (em horas)" onChange={(e) => setTime(e.target.value)} value={time || ""} 
            required 
            />


            <input type="submit" value="submit"/>
          </form>
        </div>

        <div className="list-todo">
          <h2>Listas de tarefas:</h2>
          {todos.length === 0 && <p>Nao possui tarefas!</p>}
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <h3 className={todo.done ? 'todo-done' : ''}>{todo.title}</h3>
              <p>descricao: {todo.description}</p>
              <p>Duracao: {todo.time}hrs</p>
              <div className='actions'>
                <span onClick={() => handleDone(todo)}>
                  {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
                </span>
          
                <BsTrash onClick={() => handleDelete(todo.id)}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
