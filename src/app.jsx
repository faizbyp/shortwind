export function App () {
  return (
    <>
      <header className='p-6 text-center bg-amber-200 hover:bg-amber-400 text-amber-950 hover:text-white'>
        <h1 className="text-3xl font-bold">
          shortwind
        </h1>
        <p>link shortener using cleanuri api</p>
      </header>

      <form className="text-center">
        <input type="text" name="url" className="outline" />
      </form>

    </>
  )
}
