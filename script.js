const petals = document.querySelectorAll('.petal');
    const body = document.body;

    const moodColors = {
      happy:   { petal: '#f8c8dc', background: '#fef6fb' },
      excited: { petal: '#fef9c3', background: '#fffbe6' },
      angry:   { petal: '#f4a7a3', background: '#fdecea' },
      sad:     { petal: '#c4a484', background: '#f5f0e6' },
      fear:    { petal: '#d3d3d3', background: '#eeeeee' },
    };

    function setMood(mood) {
      const colors = moodColors[mood];
      petals.forEach(petal => {
        petal.style.backgroundColor = colors.petal;
      });
      body.style.backgroundColor = colors.background;
    }