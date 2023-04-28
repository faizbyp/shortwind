export function App () {
  const handlePost = (e) => {
    e.preventDefault()
    console.log('data')
  }

  return (
    <main className="h-screen bg-amber-100 grid grid-cols-1 md:grid-cols-2 place-content-center">
      <section className="text-center m-auto">
        <h1 className="text-6xl md:text-8xl font-serif">Shortwind</h1>
        <p className="text-lg">Shorten your link</p>
        <form action="" className="w-full">
          <input type="text" className="text-base bg-amber-300 rounded-md p-2 mt-4" />
          <button type="submit" onClick={handlePost} className="bg-amber-500 hover:bg-amber-600 p-2 rounded-md ms-4">Shorten</button>
        </form>
      </section>
      <section className="m-auto hidden md:block">
        <h1 className="text-center text-5xl font-serif place-content-center">(Add Element Here)</h1>
      </section>
    </main>
  )
}
