import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import data from '../../data/db'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const ItemView = () => {
  const [count, setCount] = useState(0)
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const id = segments[segments.length - 1] // El último segmento debería ser el ID
  console.log(id)

  return (
    <>
      {data
        .filter((item) => item.id === parseInt(id)) // Asegúrate de comparar valores del mismo tipo
        .map((item) => (
          <div
            key={item.id}
            className="w-[90%] h-[60vh] p-5 flex flex-row gap-24"
          >
            <div
              className="w-[50%] h-full bg-cover bg-center rounded-sm"
              style={{
                backgroundImage: `url(${item.img})`
              }}
            ></div>
            <div className="flex flex-col justify-between w-[50%]">
              <div className="space-y-5">
                <div className="space-y-3">
                  <p className="text-2xl font-medium ">{item.name}</p>
                  <p className="text-3xl font-bold">
                    $
                    {item.price.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="font-medium">{item.description}</p>
                  <div>
                    <p>¿Que es un Mochi?</p>
                    <div className="w-44 h-1 bg-red-500"></div>
                  </div>
                  <p className="font-medium">{item.ingredients}</p>
                </div>
              </div>
              <div className="space-y-5 ">
                <div className="flex justify-start w-full gap-10">
                  <div className="flex items-center justify-center px-5 border-2 border-[#54acb6] rounded-2xl">
                    <div
                      className="text-[#54acb6] font-bold  text-center cursor-pointer"
                      onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    >
                      -
                    </div>
                    <input
                      className="w-[60px] h-[30px] p-2 text-center no-arrows font-bold outline-none"
                      type="number"
                      value={count}
                      onChange={(e) => setCount(Number(e.target.value))}
                    />
                    <div
                      className="text-[#54acb6] font-bold   text-center cursor-pointer"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </div>
                  </div>

                  <button className="px-10 bg-[#54acb6] rounded-2xl font-bold text-white flex gap-3 items-center">
                    <AddShoppingCartIcon />
                    <p>Agregar al carrito</p>
                  </button>
                </div>
                <p className="text-sm">
                  <span className="font-bold">Envios gratis</span> superando los
                  $12.345,67
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ItemView
