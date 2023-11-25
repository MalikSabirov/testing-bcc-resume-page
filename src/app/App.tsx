import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<h1 className="underline">home</h1>} />
        <Route path="*" element={<p>oops</p>} />
      </Routes>
    </>
  );
};

export default App;
