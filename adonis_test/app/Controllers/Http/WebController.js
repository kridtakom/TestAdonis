'use strict'

class WebController {
    user({view, params}){
        const data = {
            user: "Kridtakom",
            text: params.id
          };
          return view.render("test", data);
    }

    edge({view}){
        const data = {
            name: "Test Edge",
            hours: 12,
            nicknames: [
              { nick: "AAA" },
              { nick: "BBB" },
              { nick: "CCC" },
              { nick: "DDD" }
            ]
          };
          return view.render("edge", data);
    }
    
    layouts ({view}){
        return view.render("home/index")
    }

}
 
module.exports = WebController
