import axios from "axios";

export default function UserList() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res));
  return <div>로딩완료</div>;
}
