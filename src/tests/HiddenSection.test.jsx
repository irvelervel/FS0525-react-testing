// questo file conterrà TUTTI i test che vorrò predisporre per lo unit/integration
// testing del componente HiddenSection

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HiddenSection from '../components/HiddenSection'

// di solito, i test vengono "raggruppati" in famiglie, o suits

// noi faremo diverse "famiglie" di tests per HiddenSection, ad esempio
// - la prima testerà quello che ci si aspetta venga montato nel DOM
// all'avvio del componente, senza ancora nessuna interazione
// - un'altra famiglia testerà invece il bottone, e cosa succede quando cliccato

// per creare una suit di test, si utilizza la parola "describe"

describe('Testing initial mounting', () => {
  // qui dentro inseriremo uno dopo l'altro i test di questa "famiglia"
  // test('it checks if title is mounted correctly')
  // cerchiamo che il tiolo all'avvio del componente ci sia
  it('checks if title is mounted correctly', () => {
    // 1) montare il componente nel VIRTUAL DOM
    render(<HiddenSection />)
    // 2) individuazione degli elementi da testare
    const title = screen.getByText('Componente da testare')
    // 3) interazione con l'elemento trovato
    // si salta
    // 4) verifica ipotesi/tesi, vado a confermare le mie aspettative
    expect(title).toBeInTheDocument()
  })
  // cerchiamo che il bottone ci sia e abbia etichetta "MOSTRA"
  it('searches for the button', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra/i) // funziona per "mostra", "MOSTRA", "mOsTrA" etc.
    // screen.getByRole('button')
    // 3) non lo clicchiamo ancora
    // 4)
    expect(button).toBeInTheDocument()
  })
  // cerchiamo che la CARD non ci sia all'avvio
  it("shouldn't show the card", () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    // qui, per testare l'ASSENZA dell'immagine, la devo recuperare con un
    // queryBy, perchè utilizzando un getBy esploderebbe la riga 49
    const image = screen.queryByAltText(/orso/i) // null
    // 3)
    // 4)
    expect(image).toBeNull() // dovrebbe essere proprio null
    expect(image).not.toBeInTheDocument()
  })
})

describe('Testing button functionality', () => {
  // testiamo che dopo il click sul bottone la sua etichetta sia diventata "NASCONDI"
  it('should change button label after click', () => {
    // 1)
    render(<HiddenSection />)
    // 2) trovo il bottone
    const button = screen.getByText(/mostra/i)
    // 3) CLICCO sul bottone!
    expect(button).toHaveClass('btn-success')
    fireEvent.click(button) // ho cliccato una volta sul bottone
    // ora provo a RI-cercare il bottone con la sua nuova etichetta,
    // e verifico sia atterrato sul DOM
    const newButton = screen.getByText(/nascondi/i)
    // 4) mi aspetto di trovare questo newButton nella pagina
    expect(newButton).toHaveClass('btn-danger')
    expect(newButton).toBeInTheDocument()
  })

  it('should render the bear card after click', () => {
    // 1)
    render(<HiddenSection />)
    // 2) trovo il bottone
    const button = screen.getByText(/mostra/i)
    // 3) CLICCO sul bottone!
    fireEvent.click(button) // ho cliccato una volta sul bottone
    // cerco l'orso con getByAltText (in un impeto di spavalderia)
    const image = screen.getByAltText(/orso/i)
    // 4)
    expect(image).toBeInTheDocument()
  })
})
