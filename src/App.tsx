import { AllyProvider } from './context/AllyContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <AllyProvider>
          <AppRoutes />
      </AllyProvider>
    </ThemeProvider>
  );
}

export default App;
