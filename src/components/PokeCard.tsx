const PokeCard = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg border-2  shadow-md h-80">
      <h1>Nombre</h1>
      <p>001</p>
      <img src="" alt="POKEMON" />
      <div className="flex space-x-3">
        <p>grass</p>
        <p>poison</p>
      </div>
    </div>
  );
};

export default PokeCard;
