console.log("linkeep ran");
[...document.querySelectorAll('a')].forEach(e=>{
    //add window url params to to the href's params
      const url = new URL(e.href)
      for (let [k,v] of new URLSearchParams(window.location.search).entries()){
        url.searchParams.set(k,v)
      }
      e.href = url.toString();
    })
