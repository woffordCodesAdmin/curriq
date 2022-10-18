const instuctions = {
  setup: {
    npm: [
      "npm i express concurrently dotenv jsonwebtoken mongoose morgan serve-favicon bcryptjs",
    ],
    proxy: "'proxy': 'http://localhost:5000',",
    concurrently: "/images/concur",
  },
  frontend: {
    folderStructure: [
      "All necessary folders are prepoulated within the create-react-app syntax",
    ],
    indexJS: [
      "require react-router-dom",
      "Wrap Router tags around App Components",
    ],
    pages: [
      "Create AuthPage.jsx -> Add <SignUpForm/> component",
      "Create NewOrderPage.jsx",
      "Create OrderHistory.jsx",
    ],
    components: [
      "Create NavBar.jsx",
      "Create SignUpForm.jsx",
      " Populate App.jsx",
    ],
    utilities: [
      "Create Users-Api.js -> Establish a POST req with userData Stringified",
      "Create Users-Service.js -> get token from usersApi userData and manage token",
    ],
  },
  backend: {
    folderStructure: [
      "config",
      "controllers",
      "models",
      "routes",
      "touch* server.js",
    ],
    serverJS: [
      "Make all necessary npm requirements",
      "Configure .env",
      "Configure and Connect Mongoose",
      "Import usersRouter",
      "Configure app.use() to connect an api specific route to express",
      "Set up Server [app.listen]",
    ],
  },
  models: {
    users: [
      "require mongoose",
      "require mongoose",
      "build UserSchema",
      "build middleware for password encryption",
    ],
  },
  controllers: {
    users: [
      "Make api folder for user controller",
      "Require User Model",
      "Establish JWT",
      "Create New User",
      "Create Token",
      "Send User with Token as JSON response",
    ],
  },
  database: [],
  routes: {
    users: [
      "Make api Routes folder",
      "import userController",
      "Create POST router that sends createdUser to Express",
    ],
  },
};

const describe = (info) => {
  let mainScreen = document.querySelector(".screen");
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "container");
  wrapper.innerHTML = info;
  mainScreen.append(wrapper);
};

const be = () => {
  let data = instuctions.backend.folderStructure;
  data.map((info) => {
    describe(info);
  });
};
const fe = () => {
  let data = instuctions.frontend.folderStructure;
  data.map((info) => {
    describe(info);
  });
};
const npm = () => {
  let data = instuctions.setup.npm.map((info) => {
    describe(info);
  });
};
const ps= ()=>{
    let data = instuctions.setup.proxy.map((info) => {
        describe(info);
      });
}
const srver=()=>{
    let data = instuctions.backend.serverJS.map((info) => {
        describe(info);
      });
}
const umod = ()=>{
    let data = instuctions.models.users.map((info) => {
        describe(info);
      });
}
const ucon = ()=>{
    let data = instuctions.controllers.users.map((info) => {
        describe(info);
      });
}
const aroute =()=>{
    let data = instuctions.routes.users.map((info) => {
        describe(info);
      });
}
const ind =()=>{
    let data = instuctions.frontend.indexJS.map((info) => {
        describe(info);
      });
}
const pgs =()=>{
    let data = instuctions.frontend.pages.map((info) => {
        describe(info);
      });
}
const cmpts = ()=>{
    let data = instuctions.frontend.components.map((info) => {
        describe(info);
      });
}
const util = ()=>{
    let data = instuctions.frontend.utilities.map((info) => {
        describe(info);
      });
}