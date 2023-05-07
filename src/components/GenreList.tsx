import useGenres from '../hooks/useGenres'

const GenreList = () => {
   const {data} = useGenres();
  return (
    <ul>
        {data.map(dataItem=> <li key={dataItem.id}>{dataItem.name}</li>)}
    </ul>
  )
}

export default GenreList