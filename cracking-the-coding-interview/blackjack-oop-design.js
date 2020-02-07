// Deck of Cards: Design the data structures for a generic deck of cards. Explain how you would subclass the data structures to implement blackjack.

// 1) deck of 52 cards to use to play blackjack between a couple people
// 2) core objects: Deck, card
// 3) analyze relationships:
// Deck has many Cards in an array
// 4) actions

// Deck
// properties: cards (array),
// #constructor(): creates a deck of 52 cards
// #shuffle(): shuffles the cards
// #draw(n): returns n cards from the top of the deck
// #add(cards): adds array of cards back to the bottom of the deck

// Card
// properties: number, suit
// #constructor(number, suit): creates a card of number and suit

// Solution: use constants for suits

// Player
