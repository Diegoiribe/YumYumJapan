import ItemLeading from './ItemLeading'

const Leading = () => {
  return (
    <div className="flex gap-5 flex-col justify-center items-center">
      <div className="w-[85%] ">
        <h1 className="font-bold text-3xl py-3">PRODUCTOS DESTACADOS</h1>
        <div className="bg-red-600 h-1"></div>
      </div>
      <div className="flex gap-5 w-[85%] flex-wrap justify-around ">
        <ItemLeading />
      </div>
    </div>
  )
}

export default Leading
