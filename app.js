window.onload = function() {
    let first = "A ";
    let adj = [
      "gigantic ",
      "radioactive ",
      "mad ",
      "savage ",
      "wild ",
      "fat ",
      "smelly ",
      "tiny ",
      "crazy "
    ];
    let noun = [
      "cat ",
      "racoon ",
      "dog ",
      "dragon ",
      "driver ",
      "comedian ",
      "apple "
    ];
    let action = [
      "took my ",
      "threw my ",
      "yelled at my ",
      "kicked my ",
      "stole my ",
      "burned my ",
      "bit my ",
      "hit my "
    ];
    let possetion = [
      "head ",
      "table ",
      "jacket ",
      "bag ",
      "computer ",
      "shirt ",
      "keys ",
      "bed ",
      "phone ",
      "lunch "
    ];
    let where = [
      "on the street",
      "in my house",
      "in my driveway",
      "in front of the office",
      "in the bathroom",
      "down a hole",
      "infont of the bus"
    ];
  
    let rdm1 = Math.floor(Math.random() * adj.length);
    let rdm2 = Math.floor(Math.random() * noun.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * possetion.length);
    let rdm5 = Math.floor(Math.random() * where.length);
  
    document.querySelector("#excuse").innerHTML =
      first +
      adj[rdm1] +
      noun[rdm2] +
      action[rdm3] +
      possetion[rdm4] +
      where[rdm5];
  };
  