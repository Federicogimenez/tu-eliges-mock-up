import { AllyProvider } from './context/AllyContext';
import { CountryProvider } from './context/CountryContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <CountryProvider>
        <AllyProvider>
            <AppRoutes />
        </AllyProvider>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
