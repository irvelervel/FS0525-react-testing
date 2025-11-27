import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PostList from '../components/PostList'

describe('testing post list', () => {
  // - all'avvio ci sia il titolo della lista e il campo di ricerca
  it('checks at mounting title and input field', () => {
    // 1)
    render(<PostList />)
    // 2)
    const title = screen.getByText(/lista post/i)
    const input = screen.getByPlaceholderText(/cerca post/i)
    // 3)
    // 4)
    expect(title).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
  // - finito il caricamento ci debbano essere 10 elementi nella lista
  it('should contain a list with 10 elements', async () => {
    // 1)
    render(<PostList />)
    // 2)
    // 3)
    // 4)
    const elementi = await screen.findAllByTestId('elemento-lista') // TORNA UNA PROMISE!!
    expect(elementi).toHaveLength(10)
    // expect(listItems.length).toBeGreaterThan(0)
  })
  // - cercando una determinata parola dovrebbero filtrarsi tot risultati
  it('should show just 4 results with the filter "sunt"', async () => {
    // 1)
    render(<PostList />)
    // 2)
    const input = screen.getByPlaceholderText(/cerca post/i)
    // 3)
    // scrivo dentro input la parola "sunt"
    fireEvent.change(input, { target: { value: 'sunt' } })
    // cerco quanti Listgroup.Item sono rimasti
    const elementi = await screen.findAllByTestId('elemento-lista')
    expect(elementi).toHaveLength(4)
  })
})

// ESEMPIO DI FINDALLBY GESTITO CON .THEN() e .CATCH
// it('should contain a list with 10 elements', () => {
// // 1)
// render(<PostList />)
// // 2)
// screen
//     .findAllByTestId('elemento-lista') // TORNA UNA PROMISE!!
//     .then((elementi) => {
//     // 3)
//     // 4)
//     expect(elementi).toHaveLength(10)
//     // expect(listItems.length).toBeGreaterThan(0)
//     })
//     .catch((err) => {
//     console.log('errore', err)
//     })
// })
