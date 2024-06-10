import items from '../../data/db'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import './style.css'

const ItemCarrusel = () => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="min-w-[23%] border border-red-600 rounded-md h-[350px] "
        >
          <div
            className="h-1/2 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`
            }}
          ></div>
          <div className="flex flex-col justify-around h-1/2 items-center">
            <div>
              <p className="font-medium text-center">
                {item.name} <br /> (ej.2da linea de texto)
              </p>
            </div>
            <div className="flex justify-around w-full items-center">
              <p className="text-2xl font-bold">
                $
                {item.price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </p>
              <div className="rounded-[50%] bg-[#5fb1bb] h-[45px] w-[45px] flex justify-center items-center">
                <AddShoppingCartIcon className="text-white" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ItemCarrusel
