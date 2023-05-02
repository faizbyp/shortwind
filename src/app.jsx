import axios from 'axios'
import { useState } from 'react'

export function App () {
  const [req, setReq] = useState('')

  const handlePost = (e) => {
    e.preventDefault()
    console.log(req)
    axios.post('https://cleanuri.com/api/v1/shorten/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      },
      url: req
    }).then((response) => console.log(response))
  }

  return (
    <main className="h-screen bg-amber-100 grid grid-cols-1 md:grid-cols-2 place-content-center">
      <section className="text-center m-auto">
        <h1 className="text-6xl md:text-8xl font-serif">Shortwind</h1>
        <p className="text-lg">Shorten your link</p>
        <form action="" className="w-full">
          <input type="text" className="text-base bg-amber-300 rounded-md p-2 mt-4" onChange={(e) => setReq(e.target.value)} />
          <button type="submit" onClick={handlePost} className="bg-amber-500 hover:bg-amber-600 p-2 rounded-md ms-4">Shorten</button>
        </form>
      </section>
      <section className="m-auto hidden md:block">
        <h1 className="text-center text-5xl font-serif place-content-center">(Add Element Here)</h1>
      </section>
    </main>
  )
}
