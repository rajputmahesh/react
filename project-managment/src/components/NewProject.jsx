import { useRef } from "react";
import Input from "./Input.jsx";


export default function NewProject({onAdd}){
  const title = useRef();
  const discription = useRef();
  const dueDate = useRef();
  
  function handleSave(){
    const enterTitle = title.current.value;
    const enterDiscription = discription.current.value;
    const enterDueDate = dueDate.current.value;
  
    //Validation....
  
    onAdd({
      title: enterTitle,
      discription: enterDiscription,
      dueDate: enterDueDate
    });
  }
  

  return (
  <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li>
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
      </li>
      <li>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        onClick={handleSave}>Save</button>
      </li>
    </menu>
    <div>
      <Input type="text" ref={title} label="Title" isTextarea={false} />
    </div>
    <div>
      <Input ref={discription} label="Description" isTextarea={true} />
    </div>
    <div>
      <Input type="Date" ref={dueDate} label="Due Date" isTextarea={false} />
    </div>
  </div>
);
};