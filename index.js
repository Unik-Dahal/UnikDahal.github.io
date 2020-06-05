function calculate() {
  var person1 = document.getElementById("person1").value;
  var person2 = document.getElementById("person2").value;
  var loveLoader = "<img width='100px' src='https://media0.giphy.com/media/MaaDsilpDaNCTGE2zd/source.gif'/>";
  var result = document.getElementById("results");

  if (person1 == null || person1 == "" || person1 == " ") {
    result.innerHTML = "Need first person's name!";
    return;
  }

  if (person2 == null || person2 == "" || person2 == " ") {
    result.innerHTML = "Need second person's name!";
    return;
  }
  result.innerHTML = loveLoader;

  var percentage = Math.floor(Math.random() * 100);
  var advice;

  if (0 < percentage && percentage < 25) {
    advice = "You need more time! " + person1 + ", go break a leg!";
  } else if (26 < percentage && percentage < 50) {
    advice = "Oh that's a lot of progress! " + person1 + ", you should proceed carefully, otherwise " + person2 + " might go away!";
  } else if (51 < percentage && percentage < 75) {
    advice = "You are so close! " + person1 + ", You have very good chemistry with " + person2 + ". Best of luck!";
  } else if (76 < percentage && percentage < 100) {
    advice = "No matter what the God says,  " + person1 + " is made for " + person2 + ", a pair made in heaven, but without God noticing!";
  } else {
    advice = "Hmmmmm....its's hard to say with those numbers...";
  }

  var resultpc = '<div class="result-pc">' + percentage + '%</div>';
  setTimeout(function() {
    result.innerHTML = resultpc + "\n" + advice;
  }, 3000);


}
