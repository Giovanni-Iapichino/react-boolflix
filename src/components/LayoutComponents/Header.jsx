import SearchBar from "../HeaderComponents/SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>Boolfix</h1>
        <SearchBar />
      </div>
    </header>
  );
}
