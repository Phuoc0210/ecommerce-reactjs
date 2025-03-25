import { IoSearchSharp } from 'react-icons/io5';
import styles from './styles.module.scss';

function Search() {
  const { search, searchInput, searchIcon, searchButton } = styles;

  return (
    <div className={search}>
      <input type='text' placeholder='Search for...' className={searchInput} />
      <button type='button' className={searchButton}>
        <IoSearchSharp className={searchIcon} />
      </button>
    </div>
  );
}

export default Search;
