/* eslint-disable react/prop-types */

const Button = ({variant = "bg-black", children = "..."}) => {
  return (
    <button
      className={`${variant} text-white rounded-md p-2 text-xl font-semibold`}
      type="submit">
     {children}
    </button>
  )
}

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-x-2">
      <Button variant="bg-red-400">login</Button>
      <Button variant="bg-slate-400">logout</Button>
      <Button variant="bg-indigo-400"></Button>
    </div>
  )
}

export default App
