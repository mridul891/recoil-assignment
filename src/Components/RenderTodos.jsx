import { useRecoilValue } from "recoil";

import { RenderTodos } from '../store/atom/todo';


const RenderTodo = () => {
    const todolisting = useRecoilValue(RenderTodos);
    return (
        <>
            {todolisting.map((todoItem, index) => <div key={index}>
                <p>{todoItem.title}</p>
                <p>{todoItem.description}</p>
            </div>
            )}
        </>
    )
}

export default RenderTodo