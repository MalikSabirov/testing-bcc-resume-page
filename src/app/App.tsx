import { MainWrapper } from "@/modules/layouts/main-wrapper/main-wrapper";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route index element={<h1 className="underline">home</h1>} />
        <Route path="*" element={<p>oops</p>} />
      </Routes>
    </MainWrapper>
  );
};

export default App;
