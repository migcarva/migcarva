import mixpanel from 'mixpanel-browser';
mixpanel.init("f2c36b9a2a8c0a30ff2185ee883253f8", { "api_host": "https://api-eu.mixpanel.com" }, "");

let env_check = process.env.NODE_ENV === 'production';
// let env_check = true;

let actions = {
  identify: (id) => {
    if (env_check) mixpanel.identify(id);
  },
  alias: (id) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;