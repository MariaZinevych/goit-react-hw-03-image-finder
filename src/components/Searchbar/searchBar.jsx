export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <header>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(e.target.elements.query.value);
            e.target.reset();
          }}
        >
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
