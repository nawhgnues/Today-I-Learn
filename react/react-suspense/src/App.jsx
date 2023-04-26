import React, { Suspense } from "react";

const TodoList = React.lazy(() => import("../components/TodoList"));

function App() {
  return (
    <div>
      <h1>리액트 서스펜스</h1>
      <Suspense fallback={<div>로딩중...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;
