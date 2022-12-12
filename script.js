// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // this variable is set as the current hour in military time
  var currentHour = dayjs().hour()
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour1 = $('#hour-1');
  var hour2 = $('#hour-2');
  var hour3 = $('#hour-3');
  var hour4 = $('#hour-4');
  var hour5 = $('#hour-5');
  const hourX =[hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // renderLastSaved();

  // for(let i=0; i < hourX.length; i++) {
  //   var hourBtn = hourX[i].children('button');
  //   var hourForm = hourX[i].children('textarea');
  //   hourBtn.on('click', function (){
  //     // hourValue = hourForm.value;
  //     hourForm.textContent = hourValue;
  //     localStorage.setItem("hourValue", hourValue);
  //     renderLastSaved();
  //   })
  // }
  // function renderLastSaved() {
  //   hourForm.text(localStorage.getItem('hourValue'));
  // }
  // 9 Local Storage
  // getting the button and connecting it to js
  var hour9Btn = hour9.children('button');
  // getting the text area and linking it to the js
  // the forms text area will be changed
  var hour9Form = hour9.children('textarea');
  // this function needs to run so that when the page
  // refreshes the form's text area is filled in with 
  // data from local storage
  renderLastSaved9();

  function renderLastSaved9() {
    // below sets the textarea to what we get from local storage
    // hour9Value is the key's value we're getting
  hour9Form.text(localStorage.getItem('hour9Value'));
  }
  // some jQuery action right here
  // when the btn is clicked it runs a function
  hour9Btn.on('click', function () {
// We fill hour9Value's value to the value input by the user
// this value is targeted through querySelector selecting the ID
    var hour9Value = document.querySelector('#hour9Input').value;
// The textarea's text content is equal to the input value above
    hour9Form.textContent = hour9Value;
    // we set the key and the input value using hour9Value
    localStorage.setItem("hour9Value",hour9Value);
    // clicking save gets the data we've just set
    renderLastSaved9();
  });

  // 10 Local Storage
  var hour10Btn = hour10.children('button');
  var hour10Form = hour10.children('textarea');
  
  renderLastSaved10();

  function renderLastSaved10() {
  hour10Form.text(localStorage.getItem('hour10Value'));
  }
  
  hour10Btn.on('click', function () {

    var hour10Value = document.querySelector('#hour10Input').value;

    hour10Form.textContent = hour10Value;
    localStorage.setItem("hour10Value",hour10Value);
    renderLastSaved10();
  });
  
  // 11 Local Storage
  var hour11Btn = hour11.children('button');
  var hour11Form = hour11.children('textarea');
  
  renderLastSaved11();

  function renderLastSaved11() {
  hour11Form.text(localStorage.getItem('hour11Value'));
  }
  
  hour11Btn.on('click', function () {

    var hour11Value = document.querySelector('#hour11Input').value;

    hour11Form.textContent = hour11Value;
    localStorage.setItem("hour11Value",hour11Value);
    renderLastSaved11();
  });

  // 12 Local Storage
  var hour12Btn = hour12.children('button');
  var hour12Form = hour12.children('textarea');
  
  renderLastSaved12();

  function renderLastSaved12() {
  hour12Form.text(localStorage.getItem('hour12Value'));
  }
  
  hour12Btn.on('click', function () {

    var hour12Value = document.querySelector('#hour12Input').value;

    hour12Form.textContent = hour12Value;
    localStorage.setItem("hour12Value",hour12Value);
    renderLastSaved12();
  });
  
  // 1 Local Storage
  var hour1Btn = hour1.children('button');
  var hour1Form = hour1.children('textarea');
  
  renderLastSaved1();

  function renderLastSaved1() {
  hour1Form.text(localStorage.getItem('hour1Value'));
  }
  
  hour1Btn.on('click', function () {

    var hour1Value = document.querySelector('#hour1Input').value;

    hour1Form.textContent = hour1Value;
    localStorage.setItem("hour1Value",hour1Value);
    renderLastSaved1();
  });

  // 2 Local Storage
  var hour2Btn = hour2.children('button');
  var hour2Form = hour2.children('textarea');
  
  renderLastSaved2();

  function renderLastSaved2() {
  hour2Form.text(localStorage.getItem('hour2Value'));
  }
  
  hour2Btn.on('click', function () {

    var hour2Value = document.querySelector('#hour2Input').value;

    hour2Form.textContent = hour2Value;
    localStorage.setItem("hour2Value",hour2Value);
    renderLastSaved2();
  });
  
  // 3 Local Storage
  var hour3Btn = hour3.children('button');
  var hour3Form = hour3.children('textarea');
  
  renderLastSaved3();

  function renderLastSaved3() {
  hour3Form.text(localStorage.getItem('hour3Value'));
  }
  
  hour3Btn.on('click', function () {

    var hour3Value = document.querySelector('#hour3Input').value;

    hour3Form.textContent = hour3Value;
    localStorage.setItem("hour3Value",hour3Value);
    renderLastSaved3();
  });

  // 4 Local Storage
  var hour4Btn = hour4.children('button');
  var hour4Form = hour4.children('textarea');
  
  renderLastSaved4();

  function renderLastSaved4() {
  hour4Form.text(localStorage.getItem('hour4Value'));
  }
  
  hour4Btn.on('click', function () {

    var hour4Value = document.querySelector('#hour4Input').value;

    hour4Form.textContent = hour4Value;
    localStorage.setItem("hour4Value",hour4Value);
    renderLastSaved4();
  });
  
  // 5 Local Storage
  var hour5Btn = hour5.children('button');
  var hour5Form = hour5.children('textarea');
  
  renderLastSaved5();

  function renderLastSaved5() {
  hour5Form.text(localStorage.getItem('hour5Value'));
  }
  
  hour5Btn.on('click', function () {

    var hour5Value = document.querySelector('#hour5Input').value;

    hour5Form.textContent = hour5Value;
    localStorage.setItem("hour5Value",hour5Value);
    renderLastSaved5();
  });


  // DONE TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //This for loop runs through all of the hour-x ID's and plugs them
  // in, checks the conditionals, and itterates through the rest of the list
  for (let i = 0; i < hourX.length; i++) {
    if(currentHour > (i+9)) {
      hourX[i].attr('class', 'row time-block past');
    }
    // .attr targets the container's class and writes over the class
    if(currentHour == (i+9)) {
      hourX[i].attr('class', 'row time-block present');
    }
    if(currentHour < (i+9)) {
      hourX[i].attr('class', 'row time-block future');
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  //today is equal the value of dayjs() 
  var today = dayjs();
  // we target current day and add text
  // the format of time is set within the format()
$('#currentDay').text(today.format('[Today is] MMM D, YYYY, h:mm a'));
});
