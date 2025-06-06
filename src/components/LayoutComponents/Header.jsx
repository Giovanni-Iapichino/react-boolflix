import SearchBar from "../HeaderComponents/SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1>Boolfix</h1>
        <SearchBar />
      </div>
    </header>
  );
}
