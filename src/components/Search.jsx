import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') ?? '';
    setValue(searchQuery);
    onSearch(searchQuery);
  }, [location.search]);

  const handleChange = (e) => {
    const val = e.target.value;
    const searchParams = new URLSearchParams();

    if (val) {
      searchParams.set('search', val);
    } else {
      searchParams.delete('delete');
    }
    navigate({ search: searchParams.toString() });
  };
  return (
    <>
      <div>Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          placeholder="a"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
