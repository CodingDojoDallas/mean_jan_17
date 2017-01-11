function Deck() {
	var self =this;
	var suit = ['spades', 'hearts', 'diamonds', 'clubs'];
	self.cards=[];
	this.shuffle=function(){ //stackoverflow
		 var currentIndex = self.cards.length, temporaryValue, randomIndex;

  		// While there remain elements to shuffle...
  		while (0 !== currentIndex) {

    	// Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	// And swap it with the current element.
    	temporaryValue = self.cards[currentIndex];
    	self.cards[currentIndex] = self.cards[randomIndex];
    	self.cards[randomIndex] = temporaryValue;
  		}

  		return self.cards;	
	}

	this.reset = init
	this.deal=function(player){
		this.shuffle();
		var card = self.cards.pop();
		player.hand.push(card);
		console.log (card);
	}
	var init=function(){
		var cards = [];
		for (var i = 0; i<suit.length;i++ ){
			for(var count=2; count<12; count++){
				if (count<11){
					cards.push(count.toString() + ' of ' + suit[i])
				}
				else{
					cards.push('Jack of ' + suit[i]);
					cards.push('Ace of ' + suit[i]);
					cards.push('Queen of ' + suit[i]);
					cards.push('King of ' + suit[i]);
					console.log('inside function');

				}
			}
		}
		console.log(cards);
		self.cards=cards;
	}
	// console.log(self);
	var new_deck =init();
	console.log(new_deck);
}

var set = new Deck();

// set.reset;
// console.log(set.cards);

// set.deal()
// set.deal()
// set.deal()
// set.deal()


function Player (name){
	this.name=name;
	this.hand=[];
	this.discard=function(){
		console.log(this);
		this.hand.push();
	}

}

var basim = new Player();

set.deal(basim);

console.log(basim.hand)

basim.discard();
console.log(basim.hand);
