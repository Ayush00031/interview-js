import useFetch from "./UseFetch";

const FetchData = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      FetchData:
      {data &&
        data.map((item) => {
          <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default FetchData;
