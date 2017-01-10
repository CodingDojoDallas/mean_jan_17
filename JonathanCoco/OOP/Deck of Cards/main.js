function DeckCards(name, num_wheels, num_passengers, speed)
{
  var cards = ['ace', '2','3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var suites = ['hearts', 'clubs', 'diamonds', 'spades'];

  var deck = []

  this.reset = function() { console.log('reset');

                            deck = [];
                            for (var i = 0; i<suites.length; i++)
                            {
                              for (var j=0; j<cards.length; j++)
                              {
                                  card = new Card(cards[j], suites[i]);
                                  deck.push(card);
                              }
                            }
                          }

  this.shuffle = function() { var m = deck.length, t, i;
                              // While there remain elements to shuffle…
                              while (m) {

                                // Pick a remaining element…
                                i = Math.floor(Math.random() * m--);

                                // And swap it with the current element.
                                t = deck[m];
                                deck[m] = deck[i];
                                deck[i] = t;
                              }
                            }


  this.deal = function() {
                            var card = {};
                            if (deck.length > 0)
                            {
                              card = deck[0];
                              deck.shift();
                            }

                            return card;
                         }

  this.displayDeck = function() {
                                    for (var i=0; i<deck.length; i++)
                                    {
                                      console.log(deck[i].suite + "  " + deck[i].card);
                                    }
                                }
}

function Card(card, suite)
{
  this.card = card;
  this.suite = suite;
}

function Player(name)
{
  this.name = name;
  this.hand = [];

  this.addCard = function(card) { this.hand.push(card); }
  this.discardCard = function() { this.hand.shift(); }
  this.displayCards = function()  {
                                      for (var i=0; i<this.hand.length; i++)
                                      {
                                        console.log(this.hand[i].suite + "  " + this.hand[i].card);
                                      }
                                  }
}

deck = new  DeckCards();

console.log("reset the deck")

deck.reset();
deck.shuffle();

player1 = new Player("Jonathan");
player2 = new Player("Jennifer");

player1.addCard(deck.deal());
player1.addCard(deck.deal());
player1.addCard(deck.deal());

player2.addCard(deck.deal());
player2.addCard(deck.deal());
player2.addCard(deck.deal());

console.log("player 1 cards");
player1.displayCards();

console.log("player2 cards");
player2.displayCards();

player2.discardCard();
player2.discardCard();

console.log("player2 cards");
player2.displayCards();
