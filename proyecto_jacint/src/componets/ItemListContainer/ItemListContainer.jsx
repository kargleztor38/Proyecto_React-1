import './ItemListContainer.css'

// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({ titulo, subtitulo }) => {
  return (
    <div className='container'>
      <h3>{titulo}</h3>
      <h2>{subtitulo}</h2>
    </div>
  );
};
