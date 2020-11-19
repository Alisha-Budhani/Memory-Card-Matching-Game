// first up all make a list of all cards present in cards-block class
const box = document.querySelectorAll('.cards-block');
var cardFlipped = false;
var firstCard, secondCard;

cardsShuffle()

//now we loop through all the cards which are stored on box
box.forEach(card => card.addEventListener('click', turnCard));

function turnCard()
{
  if (this === firstCard) 
  return;
  //adding toggle coz -- if the class is their remove it, and if not then add it
  this.classList.toggle('turn');

  if (!cardFlipped)
  {
    //if false then that will be first card which is flipped
    cardFlipped = true;
    firstCard = this;
  }
  else
  {
    //if not false then it is second card
    cardFlipped = false;
    secondCard = this;

    CardsMatch();
  
  }
}

function CardsMatch()
{
  if(firstCard.dataset.match === secondCard.dataset.match)
  {
    firstCard.removeEventListener('click',turnCard);
    secondCard.removeEventListener('click',turnCard);
  }
  else
  {
    setTimeout(() => {
      firstCard.classList.remove('turn');
      secondCard.classList.remove('turn');
    }, 500);
  }
}

function cardsShuffle()
{
    box.forEach(card => {
      let position  = Math.floor(Math.random() * 16);
      card.style.order = position;
    });
}