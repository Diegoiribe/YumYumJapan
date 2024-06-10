import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let datos = {
      email: email
    }
    fetch('https://api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        alert('¡Gracias por suscribirte!')
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Hubo un error al suscribirse. Por favor, intenta nuevamente.')
      })
  }

  return (
    <div
      className="w-full bg-center  h-[300px] p-20 space-y-10 "
      style={{
        backgroundImage:
          'url("https://img.freepik.com/vector-premium/rojo-oriental-chino-patrones-fisuras-ilustracion_193606-43.jpg")'
      }}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-white">¡MANTENTE AL DIA!</h1>
        <p className="text-sm font-medium text-white">
          Unete a nuestro boletin y se el primero en enterarte de ofertas
          exclusivas, descuenteos y las ultimas en golosinas japonesas
        </p>
      </div>
      <form className="flex gap-5" onSubmit={() => handleSubmit()}>
        <input
          type="email"
          placeholder="Correo electronico"
          className="w-1/2 rounded-3xl p-2 shadow-inner outline-none"
          value={email}
          onChange={(e) => setEmail(String(e.target.value))}
        />
        <button
          type="submit"
          className="bg-black text-white px-7 py-2 rounded-3xl cursor-pointer"
        >
          Suscribirse
        </button>
      </form>
    </div>
  )
}

export default Newsletter
