import ItemView from '../components/ItemShow/ItemView'
import Carrusel from '../components/ItemShow/Carrusel'
import Layout from '../hocs/Layout'

const ItemShow = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-20">
        <ItemView />
        <div className="bg-red-500 w-[90%] h-[3px] mt-24"></div>
        <Carrusel />
      </div>
    </Layout>
  )
}

export default ItemShow
