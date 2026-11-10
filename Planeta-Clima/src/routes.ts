import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './pages/Home';
import Climas from './pages/Climas';
import Problemas from './pages/Problemas';
import ProblemDetail from './pages/ProblemDetail';
import Solucoes from './pages/Solucoes';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import Busca from './pages/Busca';
import AreasAfetadas from './pages/AreasAfetadas';
import Conta from './pages/Conta';
import Versao2 from './pages/Versao2';
import CidadeVersao2 from './pages/CidadeVersao2';
import Version2Auth from './pages/Version2Auth';
import Version2Problemas from './pages/Version2Problemas';
import Version2Solucoes from './pages/Version2Solucoes';
import Version2Sobre from './pages/Version2Sobre';
import Version2Busca from './pages/Version2Busca';
import Version2Turismo from './pages/Version2Turismo';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'climas', Component: Climas },
      { path: 'problemas', Component: Problemas },
      { path: 'problema/:id', Component: ProblemDetail },
      { path: 'solucoes', Component: Solucoes },
      { path: 'sobre', Component: Sobre },
      { path: 'login', Component: Login },
      { path: 'criar-conta', Component: CriarConta },
      { path: 'busca', Component: Busca },
      { path: 'areas-afetadas', Component: AreasAfetadas },
      { path: 'conta', Component: Conta },
      { path: 'versao-2/login', Component: Version2Auth },
      { path: 'versao-2/criar-conta', Component: Version2Auth },
      { path: 'versao-2', Component: Versao2 },
      { path: 'versao-2/cidade/:id', Component: CidadeVersao2 },
      { path: 'versao-2/problemas', Component: Version2Problemas },
      { path: 'versao-2/solucoes', Component: Version2Solucoes },
      { path: 'versao-2/sobre', Component: Version2Sobre },
      { path: 'versao-2/busca', Component: Version2Busca },
      { path: 'versao-2/turismo', Component: Version2Turismo },
    ],
  },
]);
