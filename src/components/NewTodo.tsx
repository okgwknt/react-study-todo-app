import { FormEvent, useState, VFC } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export const NewTodo: VFC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="NewTodo">
      <input
        type="text"
        name="title"
        onChange={(event) => setTitle(event.currentTarget.value)}
        value={title}
        className="NewTodo__inputTitle"
      />
      <button type="submit">Add</button>
    </form>
  );
};
