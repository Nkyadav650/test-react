
import './App.css';
import SearchBar, { Dropdown } from './components/SearchBar';
import './components/searchbar.css'
import Table from './components/Table';
function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const options = ["All", "Option1", "Option2", "Option3"];
  const rightOptions = ["All", "Option11", "Option22", "Option32"];
  const handleOption = (optionValue) => {
    console.log("Option value:", optionValue);
  };

  return (
    <div>
      <div className="search-bar-container">
        <Dropdown options={options} onOption={handleOption} className='dropdown'/>
        <SearchBar placeholder="Search" onSearch={handleSearch} className="search" />
        <Dropdown options={rightOptions} onOption={handleOption} />

      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
export default App;
