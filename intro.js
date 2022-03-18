const intro = introJs();

intro.setOptions({
  steps: [
    {
      intro: 'Welcome to our new website! Lets take a tour!'
    },

    {
      element: '#step1',
      intro: 'Please read this paragraph carefully.'
    },


    {
      element: '#step2',
      intro: 'This paragraph is also very important.'
    },


    {
      element: '#step3',
      intro: 'Here is the submit button.'
    }


  ]
})

intro.start();
