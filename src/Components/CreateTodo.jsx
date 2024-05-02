import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { RenderTodos, TodoCreation } from "../store/atom/todo";

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [, setCreateTodo] = useRecoilState(TodoCreation)
    const renderTodo = useSetRecoilState(RenderTodos)

    const handleSubmit = () => {
        console.log(title)
        console.log(description)
        const presentTodo = {
            title: title,
            description: description
        }
        setCreateTodo(presentTodo)
        renderTodo((oldTodo) => [...oldTodo, presentTodo]);
        setTitle("")
        setDescription("")
    }

    return (
        <div style={{ display: "flex", flexDirection: "Column" }}>
            <div>
                <label htmlFor="title">Enter the title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="desciption">Enter the Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button onClick={handleSubmit} >Add Todo </button>
        </div>
    )
}

export default CreateTodo