import * as sapper from '@sapper/app';
import mixpanel from 'mixpanel-browser';

mixpanel.init("f2c36b9a2a8c0a30ff2185ee883253f8", { "api_host": "https://api-eu.mixpanel.com" }, "");

sapper.start({
	target: document.querySelector('#sapper')
});