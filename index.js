//Twitch bot,Bans users that use forbidden words.

const tmi = require('tmi.js');
const options =
{
	options: 
	{	debug: true,
	},	
	connection:{
		cluster: 'aws',
		reconnect: true,
	},
	identity:{
		username: 'MoryZz',
		password: 'oauth:ddzsr8a8j05wza8erxc4h6vfjkin7b',
	},
	
channels: ['MoryZz'],
};
const client = new tmi.client(options);

client.connect();
client.on('connected', (address, port) =>
{
	
	client.action('MoryZz','Hello Guys');
});
client.on('chat', (channel, user, message, self) => 
{
	if(message.search("PUBG") !== -1 || message.search("LUL") !== -1 || message.search("RAGE") !== -1 )
	{
		client.action('MoryZz', 'Not cool dude');
		client.ban("MoryZz", 'user', "Bad word");
		//client.unban("MoryZz", 'user'); Didnt have other twitch users.Had to unban for tests.
		
	}
});