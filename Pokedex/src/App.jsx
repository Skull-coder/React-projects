import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [species, setSpecies] = useState(null)

  const [value, setValue] = useState('Pikachu')

  const [search, setSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleInputChange(e) {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (!search) return

    async function fetchPokemon() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        if (!res.ok) throw new Error("Pokémon not found")
        const data = await res.json()
        setPokemon(data)

        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${value.toLowerCase()}`)
        if (!res2.ok) throw new Error("Pokémon species not found")
        const speciesData = await res2.json()
        setSpecies(speciesData)
      } catch (err) {
        setPokemon(null)
        setSpecies(null)
        setError(err.message)
      } finally {
        setLoading(false)
        setSearch(false)
      }
    }

    fetchPokemon()
  }, [search, value])

  return (
    <div className="container">
      <div className="pokedex">
        <h1>Pokedex</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Pokemon"
            value={value}
            onChange={handleInputChange}
          />
          <img
            src="./public/pokeball.png"
            alt=""
            width="35px"
            onClick={() => setSearch(true)}
            className={loading ? "spin" : ""}
          />
        </div>

        

        {/* Handle error */}
        {error && <p style={{ color: "black" }}>{error}</p>}

        {/* Show Pokémon only when data is ready */}
        {pokemon && species && !error && (
          <>
            <div className="display">
              <div className="stats">
                {pokemon.stats.slice(0, 3).map((s, i) => (
                  <p key={i}>
                    {s.stat.name}: {s.base_stat}
                  </p>
                ))}
              </div>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                height="180px"
              />
              <h2>{pokemon.name}</h2>
            </div>

            <div className="info">
              <div className="types">
                {pokemon.types.map((t, i) => (
                  <p key={i}>{t.type.name}</p>
                ))}
              </div>

              <div className="scale">
                <p><b>Weight: {pokemon.weight}</b></p>
                <p><b>Height: {pokemon.height}</b></p>
              </div>

              <div className="disc">
                <p>
                  {species.flavor_text_entries
                    .find(e => e.language.name === "en")
                    ?.flavor_text.replace(/\f|\n/g, " ")}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
