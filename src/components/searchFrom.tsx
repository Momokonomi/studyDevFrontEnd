import SearchIcon from '../public/icons/searchIcon';

export default function SearchForm() {
  return (
    <>
      <div>
        <SearchIcon />
        <input type='search' placeholder='検索' />
        <SearchIcon />
      </div>
    </>
  );
}
