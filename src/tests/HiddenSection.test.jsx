// questo file conterrà TUTTI i test che vorrò predisporre per lo unit/integration
// testing del componente HiddenSection

import { render, screen } from '@testing-library/react'
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
})
