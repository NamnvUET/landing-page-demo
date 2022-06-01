
import Header from './components/header';
import Navigation from './components/navigation';
import Banner from './components/banner';
import Introduce from './components/introduce';
import Teachers from './components/teachers';
import Enviroments from './components/enviroments';
import ContactForm from './components/contact_form';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Banner></Banner>
      <Introduce></Introduce>
      <Teachers></Teachers>
      <Enviroments></Enviroments>
      <ContactForm></ContactForm>
    </div>
  );

}

export default App;
