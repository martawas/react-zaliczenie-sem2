import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import { Outlet } from "react-router-dom";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { ProducsProvider } from "./context/productsContext";
function App() {
  return (
    <AppWrapper>
      <ProducsProvider>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <Paragraph paragraphText="Zadanie zaliczeniowe - sem 2 - Marta Wasilczuk" />
        </Footer>
      </ProducsProvider>
    </AppWrapper>
  );
}

export default App;
