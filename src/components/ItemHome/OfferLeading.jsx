import data from '../../data/db'
import ItemOffer from './ItemOffer'

const OfferLeading = () => {
  const limitedData = data.slice(0, 3)

  return (
    <div className="flex gap-5 flex-col justify-center items-center mt-24 ">
      <div className="w-[85%] rounded-3xl shadow-2xl ">
        <div className="w-full bg-yellow-300 rounded-t-3xl">
          <h1 className="text-2xl font-bold p-4 text-[#7a4215]">
            OFERTAS ESPECIALES
          </h1>
        </div>
        <div className="flex justify-center  p-5">
          {limitedData.map((item) => (
            <ItemOffer key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OfferLeading
