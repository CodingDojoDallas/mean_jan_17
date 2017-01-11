function DeckFunctions(){
	this.deck = createDeck();

	this.shuffle = function(){
		this.deck = shuffleDeck(this.deck);
	}

	this.reset = function(){
		this.deck = createDeck();
	}
	this.dealCard = function(){
		var dealtCard = this.deck[this.deck.length-1];
		this.deck.length-= 1;
		console.log(dealtCard);
		return dealtCard;
	}

	function createDeck(){
		var deck = [];
		for (var i = 1; i <= 52; i++) {
			deck.push(i);
		}
		return deck;
	}
	function shuffleDeck(deck){
		var newDeckOrder =[];
		var indexLengthLeft = deck.length;
		var indexOfDeck;

		while (indexLengthLeft != 0){
			indexOfDeck = Math.floor(Math.random()* deck.length);

			if (indexOfDeck in deck) {
				newDeckOrder.push(deck[indexOfDeck]);
				delete deck[indexOfDeck];
				indexLengthLeft--;
			}
		}
		return newDeckOrder;
	}



}

var deck1 = new DeckFunctions();

console.log(deck1);
deck1.shuffle();
console.log(deck1);
console.log("length...");
console.log(deck1.length);
deck1.dealCard();
deck1.dealCard();
deck1.dealCard();


function PlayerConstructor(name){
	this.name = name;
	this.hand = dealHand();

	this.take = function(){
		var card = deck1.dealCard();
		this.hand.push(card);
		console.log(this.hand);
	}

	this.discard = function(handIndex){
		if (handIndex in this.hand) {
			this.hand.splice(handIndex,1);
		}
		console.log(this.hand);
		return this.hand;
	}

	function dealHand(){
		var hand = [];
		for (var i = 0; i < 5; i++) {
			card = deck1.dealCard();
			hand.push(card);
		}
		console.log(hand);
		return hand;
	}

}

// Test player - Bob
console.log("Created new user and user has a hand")
var bob = new PlayerConstructor("Bob");
bob.take();
// Discard from index number... in this example index 1...
bob.discard(1);
