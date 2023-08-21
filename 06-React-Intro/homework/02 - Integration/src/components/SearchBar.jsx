export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={props.SearchBar}>Agregar</button>
      </div>
   );
}
