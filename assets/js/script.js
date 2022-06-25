// TODO: Declare any global variables we need

var controlsDiv = document.createElement('div');
var messageDiv = document.createElement('div');
var imageTag = document.createElement('img');
var flipBtn = document.createElement('button');
var clearBtn = document.createElement('button');

var imgDiv = document.getElementById('imgDiv');

let headCount = 0;
let tailCount = 0;
let totalCount = 0;
let headPercent =0;
let tailPercent = 0;


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    //image section
    imageTag.src = "./assets/images/penny-heads.jpg"
    imgDiv.append(imageTag);

    //button section
    controlsDiv.classList.add('controls');
    flipBtn.setAttribute('id','flip')
    flipBtn.textContent="flip the penny!"

    clearBtn.setAttribute('id','clear')
    clearBtn.textContent="clear scoreboard"

    controlsDiv.append(flipBtn)
    controlsDiv.append(clearBtn)

    imgDiv.append(controlsDiv);

    //button section
    messageDiv.classList.add('message-container');
    messageDiv.textContent ='let\'s get rolling!';


    imgDiv.append(messageDiv);
   
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        document.getElementById('flip').addEventListener('click',function(e){
            
            let randomFlip = Math.random()*5;
            totalCount++;
            console.log(randomFlip,totalCount )
            if(randomFlip<2.5)
            {           
                 imageTag.src = "./assets/images/penny-heads.jpg"
                 messageDiv.textContent ='You Flipped Heads!';
                 headCount++;
        }
            else{
                imageTag.src = "./assets/images/penny-tails.jpg"
                messageDiv.textContent ='You Flipped Tails!';
                tailCount++;
            }
            headPercent = Math.round(headCount*100/totalCount );
            document.getElementById('heads').textContent=headCount;
            document.getElementById('heads-percent').textContent=headPercent;
            tailPercent = Math.round(tailCount*100/totalCount );
            document.getElementById('tails').textContent=tailCount;
            document.getElementById('tails-percent').textContent=tailPercent;



            console.log('flip','h'+headCount ,
            't'+tailCount ,
            'tot'+totalCount,
            'hp'+headPercent,
            'tp'+tailPercent)

        });

    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

        document.getElementById('clear').addEventListener('click',function(e){

            headCount = 0;
            tailCount = 0;
            totalCount = 0;
            headPercent =0;
            tailPercent = 0;
            imageTag.src = "./assets/images/penny-heads.jpg"
            messageDiv.textContent ='let\'s get rolling!';
            document.getElementById('tails').textContent=tailCount;
            document.getElementById('tails-percent').textContent=tailPercent;
            document.getElementById('heads').textContent=tailCount;
            document.getElementById('heads-percent').textContent=tailPercent;
            console.log('clear',headCount ,
            tailCount ,
            totalCount,
            headPercent,
            tailPercent)
        });
})