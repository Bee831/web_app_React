function card({ children }) {
    // this is just a div (card) for holding all the "converters", so you can style the container of all converters at once
    // or add some html before or after them in one place insted of doing it in every file.
    // whatever just treat it like a div all of the "converters" are inside of.
    return (
        <div className="card"> 
            { children }
        </div>
    )
}

export default card