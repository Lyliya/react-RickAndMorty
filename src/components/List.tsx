interface ListProps {
  value: string[];
}

function List({ value }: ListProps) {
  return (
    <ul>
      {value.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
}

export default List;
