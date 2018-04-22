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
		"boi1—brained",
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
		"boar—p1g",
		"bugbear",
		"bum—bailey",
		"canker—b1osaom",
		"c1ack—dish",
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
		
		const roasterRegex = /^!roast\s*@/;
		
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
