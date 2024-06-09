import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ItemLeading = ({ item }) => {
  return (
    <Link
      to={`/item/${item.id}`}
      className="w-[23%] border border-red-600 rounded-md h-[350px] "
    >
      <div
        className="h-1/2 w-full bg-red-200 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cubiro.com/wp-content/uploads/2016/09/daifuku-mochi.jpg')`
        }}
      ></div>
      <div className="flex flex-col justify-around h-1/2 items-center">
        <div>
          <p className="font-medium text-center">
            Mochi de frijol rojo <br /> (ej.2da linea de texto)
          </p>
        </div>
        <div className="flex justify-around w-full items-center">
          <p className="text-2xl font-bold">$12.345,67</p>
          <div className="rounded-[50%] bg-[#5fb1bb] h-[45px] w-[45px] flex justify-center items-center">
            <AddShoppingCartIcon />
          </div>
        </div>
      </div>
    </Link>
  )
}
ItemLeading.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
}

export default ItemLeading
