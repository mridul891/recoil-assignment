import CreateTodo from "./CreateTodo"
import FilterTodo from "./FilterTodo"
import RenderTodo from "./RenderTodos"


const Todos = () => {
    return (
        <div>
            <CreateTodo />
            <RenderTodo />
            <FilterTodo />
        </div>
    )
}

export default Todos