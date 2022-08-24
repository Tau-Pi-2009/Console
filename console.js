let admin = [''] //<-- put your _id there.
let pi = Math.PI;
let tau = (Math.PI * 2);
let e = Math.E;
let sin = Math.sin;
let cos = Math.cos;
let tan = Math.tan;
let date = Date()
gClient.on("a", function (msg) {
  let isAdmin = (admin.indexOf(msg.p._id) !== -1); //this is used so others can't use it.
  let args = msg.a.split("");
  let cmd = args[0].toLowerCase();
  let argcat = msg.a.substring(cmd.length).trim();
  let userid = msg.p._id;
  let usercolor = msg.p.color;
  let username = msg.p.name;
  if (cmd === `>`) {
    if (isAdmin) {
      try {
        let out = eval(argcat);
        if (out) {
          MPP.chat.send(`✔ Console: ${out}`);
        }
      } catch (err) {
        MPP.chat.send(`❌ Console: ${err}`);
      };
    };
  };
});
 
