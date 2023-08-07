// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButton = document.querySelectorAll('.like-glyph');


likeButton.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (e.target.className === 'like-glyph') {
      mimicServerCall(e)
      .then(resp => {
        if (resp === 'Pretend remote server notified of action!') {
          e.target.className += ' activated-heart'
          e.target.innerHTML = FULL_HEART;
        }
        
      })
      .catch(err => {
        let div = document.querySelector('#modal');
        div.className = '';
        setTimeout(() => {
          div.className = 'hidden';
        }, 3000)
      })
    } else if (e.target.className === 'like-glyph activated-heart') {
      mimicServerCall(e)
      .then(resp => {
        if (resp === 'Pretend remote server notified of action!') {
          e.target.className = 'like-glyph'
          e.target.innerHTML = EMPTY_HEART;
        }
        
      })
      .catch(err => {
        let div = document.querySelector('#modal');
        div.className = '';
        setTimeout(() => {
          div.className = 'hidden';
        }, 3000)
      })
    }
      
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
