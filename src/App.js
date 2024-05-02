import './App.css';

import { Header } from './components/header/header';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Blog } from './components/blog/blog';
import { Form } from './components/forms/form';
import { Footer } from './components/footer/footer';
import {Counter} from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Blog />
      <Form />
      <Footer />
      <Counter />
    </div>
  );
}
export default App;
