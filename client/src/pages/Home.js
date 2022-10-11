import NavBarLogo from '../components/NavbarLogo';
import SearchBox from '../components/SearchBox';

function Home() {

  return (
    <>
      <header className='Home'>
        <NavBarLogo />
        <SearchBox />
      </header>
    </>
  );
}

export default Home;