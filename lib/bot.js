'use strict';

//require('dotenv').config();

const https = require('https');

class Bot {
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */
    static checkMessage(message) {
        
		const messageText = message.text;
		
		var toReturn = "";
		
		var randomInt = 0;
		
		const firstInsultArray = [
		"artless",
		"bawdy",
		"beslubbering",
		"bootless",
		"churlish",
		"cockered",
		"clouted",
		"craven",
		"currish",
		"dankish",
		"dissembling",
		"droning",
		"errant",
		"fawning",
		"fobbing",
		"froward",
		"frothy",
		"gleeking",
		"goatish",
		"gorbellied",
		"impertinent",
		"infectious",
		"jarring",
		"loggerheaded",
		"lumpish",
		"mammering",
		"mangled",
		"mewling",
		"paunchy",
		"pribbling",
		"puking",
		"puny",
		"qualling",
		"rank",
		"reeky",
		"roguish",
		"ruttish",
		"saucy",
		"spleeny",
		"spongy",
		"surly",
		"tottering",
		"unmuzzled",
		"vain",
		"venomed",
		"villainous",
		"warped",
		"wayward",
		"weedy",
		"yeasty"
		];
		
		const secondInsultArray = [
		"base—court",
		"bat—fowling",
		"beef—witted",
		"beetle—headed",
		"boil—brained",
		"clapper—clawed",
		"clay—brained",
		"common—kissing",
		"crook-pated",
		"dismal—dreaming",
		"dizzy-eyed",
		"doghearted",
		"dread-bolted",
		"earth-vexing",
		"elf-skinned",
		"fat-kidneyed",
		"fen-sucked",
		"flap-mouthed",
		"fly-bitten",
		"folly-fallen",
		"fool-born",
		"full-gorged",
		"guts-griping",
		"half-faced",
		"hasty-witted",
		"hedge-born",
		"hell-hated",
		"idle-headed",
		"ill-breeding",
		"ill-nurtured",
		"knotty-pated",
		"milk-livered",
		"motley-minded",
		"onion-eyed",
		"plume-plucked",
		"pottle-deep",
		"pox-marked",
		"reeling-ripe",
		"rough-hewn",
		"rude-growing",
		"rump-fed",
		"shard-borne",
		"sheep-biting",
		"spur-galled",
		"swag-bellied",
		"tardy-gaited",
		"tickle-brained",
		"toad-spotted",
		"unchin-snouted",
		"weather-bitten"
		];
		
		const thirdInsultArray = [
		"apple—john",
		"baggage",
		"barnacle",
		"bladder",
		"boar—plg",
		"bugbear",
		"bum—bailey",
		"canker—blossom",
		"clack—dish",
		"clotpole",
		"coxcomb",
		"codpiece",
		"death-token",
		"dewberry",
		"flap-dragon",
		"flax-Wench",
		"flirt-gill",
		"foot-licker",
		"fustilarian",
		"giglet",
		"gudgeon",
		"haggard",
		"harpy",
		"hedge-pig",
		"horn-beast",
		"hugger-mugger",
		"joithead",
		"lewdster",
		"lout",
		"maggot-pie",
		"malt-worm",
		"mammet",
		"measle",
		"minnow",
		"miscreant",
		"moldwarp",
		"mumble-news",
		"nut-hook",
		"pigeon-egg",
		"pignut",
		"puttock",
		"pumpion",
		"ratsbane",
		"scut",
		"skainsmate",
		"strumpet",
		"varlot",
		"vassal",
		"whey-face",
		"wagtail"
		];
		
		const firstNounArray = [
		"Bro",
		"Dude",
		"Gurl",
		"Homie",
		"Bae",
		"Bruh",
		"Girl",
		"Fam",
		"Shawty",
		"Man",
		"Home slice",
		"Gal",
		"Hunny",
		"Sweetie",
		"B*tch",
		"Nugget"
		];
		
		const firstAdjectiveArray = [
		"harder",
		"finer",
		"bigger",
		"stronger",
		"faster",
		"hotter",
		"cuter",
		"sexier",
		"thiccer",
		"buffer",
		"higher",
		"greater",
		"smaller",
		"thirstier",
		"hungrier"
		];
		
		const secondNounArray = [
		"a bowl of oatmeal",
		"a slice of white bread",
		"the noonday sun",
		"the midnight sun",
		"Beyonce's backup dancers",
		"a nice bowl of Cinnamon Toast Crunch",
		"National Socialism",
		"my Trigonometry professor",
		"Switzerland",
		"the Emancipation Proclamation",
		"My Chemical Romance",
		"Manchester United",
		"the Glorious Nation of Pakistan",
		"a number 9 with fries on the side",
		"Harry Potter and the Order of the Phoenix",
		"The Elder Scrolls V: Skyrim",
		"Neil Patrick Harris",
		"Angela Merkel",
		"Texas",
		"my entire collection of rare Pokemon cards",
		"David L. Boren",
		"JOHN CENA",
		"the book of Leviticus",
		"Killmonger",
		"a Whopper, Jr.",
		"Anthony Hui"
		];
		
		const secondAdjectiveArray = [
		"with a slice of cheese",
		"drenched in sauce",
		"Legendary Edition",
		"with honey on top",
		"if you know what I mean",
		"hail to the chief, baby",
		"mmm, mmm, mmm",
		"...Tasty!",
		"on a Tuesday evening"
		];
		
		const profArray = [
		"Are you failing this class? Say yes.",
		"Is your code broken? Say yes.",
		"Git gud",
		"Java runs on over 3 billion devices. Then you came along, and now it only runs on 1.",
		"ZyLabs marked you as an NNPP",
		"For your grade, Web-CAT just returned \":(\"",
		"I tried to run your project, but it threw an ID 10-T error",
		"HTTP Error 418",
		"I think you may be just one bit short of a boolean",
		"It seems your getGoodCode() method is a void type",
		"It's a good thing you're learning C++ - it doesn't have garbage collection, so maybe it'll stop deleting your code."
		]
		
		const roasterRegex = /^!roast\s*@/;
		
		const compRegex = /^\/roast\s*@/;
		
		const profRegex = /^>roast\s*@/;
		
		const yesRegex = /^say yes/;
		
		if (messageText && (message.sender_type == "user"))
		{
			if (roasterRegex.test(messageText.toLowerCase()))
			{
				toReturn = messageText.substring(6,messageText.length);
				toReturn += ", thou art a ";
				randomInt = Math.floor(Math.random() * firstInsultArray.length);
				toReturn += firstInsultArray[randomInt];
				toReturn += ", ";
				randomInt = Math.floor(Math.random() * secondInsultArray.length);
				toReturn += secondInsultArray[randomInt];
				toReturn += " ";
				randomInt = Math.floor(Math.random() * thirdInsultArray.length);
				toReturn += thirdInsultArray[randomInt];
				toReturn += "!";
				return toReturn;
			}
			if (compRegex.test(messageText.toLowerCase()))
			{
				toReturn = messageText.substring(6,messageText.length);
				toReturn += ", ";
				randomInt = Math.floor(Math.random() * firstNounArray.length);
				toReturn += firstNounArray[randomInt];
				toReturn += ", you ";
				randomInt = Math.floor(Math.random() * firstAdjectiveArray.length);
				toReturn += firstAdjectiveArray[randomInt];
				toReturn += " than ";
				randomInt = Math.floor(Math.random() * secondNounArray.length);
				toReturn += secondNounArray[randomInt];
				toReturn += ", ";
				randomInt = Math.floor(Math.random() * secondAdjectiveArray.length);
				toReturn += secondAdjectiveArray[randomInt];
				toReturn += " ;)";
				return toReturn;
			}
			if (profRegex.test(messageText.toLowerCase()))
			{
				randomInt = Math.floor(Math.random() * profArray.length);
				return profArray[randomInt];
			}
			if (yesRegex.test(messageText.toLowerCase())
			{
				return "Yes";
			}
		}
        return null;
    };

    /**
     * Sends a message to GroupMe with a POST request.
     *
     * @static
     * @param {string} messageText A message to send to chat
     * @return {undefined}
     */
    static sendMessage(messageText) {
        // Get the GroupMe bot id saved in `.env`
        const botId = process.env.BOT_ID;

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };

        const body = {
            bot_id: botId,
            text: messageText
        };

        // Make the POST request to GroupMe with the http module
        const botRequest = https.request(options, function(response) {
            if (response.statusCode !== 202) {
                console.log('Rejecting bad status code ' + response.statusCode);
            }
        });

        // On error
        botRequest.on('error', function(error) {
            console.log('Error posting message ' + JSON.stringify(error));
        });

        // On timeout
        botRequest.on('timeout', function(error) {
            console.log('Timeout posting message ' + JSON.stringify(error));
        });

        // Finally, send the body to GroupMe as a string
        botRequest.end(JSON.stringify(body));
    };
};

module.exports = Bot;
