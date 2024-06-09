import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import PropTypes from 'prop-types'

const ItemOffer = ({ item }) => {
  return (
    <div
      className={`relative w-[33%] h-[400px] px-16 ${
        item.id == 2 ? 'border-l-2 border-r-2 border-yellow-500' : ''
      }`}
    >
      <div
        className="h-2/5 w-full bg-red-200 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url('https://cubiro.com/wp-content/uploads/2016/09/daifuku-mochi.jpg')`
        }}
      ></div>
      <div className="flex flex-col justify-around h-3/5 items-center ">
        <div className="mt-3">
          <p className="font-medium text-center">
            Mochi de frijol rojo <br /> (ej.2da linea de texto)
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center gap-5 w-full items-center">
            <p className="text-gray-400 line-through">$12.345.67</p>
            <p className="font-bold text-[#5fb1bb] ">25% OFF</p>
          </div>
          <p className="text-2xl font-bold text-[#7a4215] ">$6.175,84</p>
        </div>
        <div className="flex gap-5 px-7 py-2 bg-[#f0a205] rounded-3xl text-white">
          <AddShoppingCartIcon />
          <p>¡Aprovecha ahora!</p>
        </div>
      </div>
    </div>
  )
}

ItemOffer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
}

export default ItemOffer
