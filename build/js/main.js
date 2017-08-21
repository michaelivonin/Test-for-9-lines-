$(function() {
  function countIt() {
    var i = 0,
        timerId = setInterval(countTo100,10);

    function countTo100(){
      $('.js-level__counter').text(++i + '%');
      if (i === 100) {
        clearInterval(timerId);
        timerId = setInterval(countTo40,15);
      }
    }

    function countTo40(){
      $('.js-level__counter').text(--i + '%');
      if (i === 40) {
        clearInterval(timerId);
      }
    }
  }

  setTimeout(countIt, 2000);
});