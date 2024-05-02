import { useState } from "react"
import { useRecoilValue } from "recoil";
import { RenderTodos } from "../store/atom/todo";

const FilterTodo = () => {
    const [titless, setTitless] = useState('');
    const todolisting = useRecoilValue(RenderTodos);
    const handleClick = () => {

        const a = todolisting.filter(name => name.title.includes(titless))
        console.log(a)

        a.map((i, index) => <p key={index}>{i.description}</p>)
    }
    return (
        <div>
            <input type="text" onChange={(e) => setTitless(e.target.value)} />
            <button onClick={handleClick}>Find</button>

        </div>
    )
}

export default FilterTodo