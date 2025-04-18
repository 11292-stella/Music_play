import MyNav from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./components/MyFooter"
import FirstCards from "./components/FirstCards"
import QueenCards from "./components/QueenCards"
import "./style/style.css"
import OthersCards from "./components/OthersCards"

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1 container mt-4">
          <FirstCards />
        </main>

        <QueenCards />
        <OthersCards />
        <MyFooter />
      </div>
    </>
  )
}

export default App
