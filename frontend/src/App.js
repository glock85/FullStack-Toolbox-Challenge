import { NavbarComponent } from "./components/Navbar";

import { Loading } from "./components/Loading";
import { useApp } from "./hooks/useApp";
import { AppContent } from "./components/AppContent";

export const App = () => {
  const { handleSubmit, inputValue, setInputValue, loading } = useApp();
  return (
    <div className="d-flex flex-column min-vh-100 gap-5">
      <NavbarComponent />

      {loading ? (
        <Loading />
      ) : (
        <AppContent
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
};
