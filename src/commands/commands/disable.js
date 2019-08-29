const { oneLine } = require('common-tags');
const Command = require('../base');

module.exports = class DisableCommandCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'disable',
			aliases: ['disable-command', 'cmd-off', 'command-off'],
			group: 'commands',
			memberName: 'disable',
			description: 'Disables a command or command group.',
			details: oneLine`
				The argument must be the name/ID (partial or whole) of a command or command group.
				Only administrators may use this command.
			`,
			examples: ['disable util', 'disable Utility', 'disable prefix'],
			guarded: true,
			throttling: {
                	usages: 2,
                	duration: 20
            		},
			args: [
				{
					key: 'cmdOrGrp',
					label: 'command/group',
					prompt: 'Which command or group would you like to disable?',
					type: 'group|command'
				}
			]
		});
	}

	hasPermission(msg) {
		if(!msg.guild) return this.client.isOwner(msg.author);
		return msg.member.hasPermission('ADMINISTRATOR') || this.client.isOwner(msg.author);
	}

	run(msg, args) {
		if(!args.cmdOrGrp.isEnabledIn(msg.guild, true)) {
			return msg.reply(
				`The \`${args.cmdOrGrp.name}\` ${args.cmdOrGrp.group ? 'command' : 'group'} is already disabled.`
			);
		}
		if(args.cmdOrGrp.guarded) {
			return msg.reply(
				`You cannot disable the \`${args.cmdOrGrp.name}\` ${args.cmdOrGrp.group ? 'command' : 'group'}.`
			);
		}
		this.client.dbs.settings.findOne({guildID: msg.guild.id}, async (err, db) => {
			if(db){
				if(!db.misc.commands.includes(args.cmdOrGrp.name)){
				db.misc.commands.push(args.cmdOrGrp.name);
				db.save().catch(() => {})
				}
			}
		})
		args.cmdOrGrp.setEnabledIn(msg.guild, false);
		return msg.reply(`Disabled the \`${args.cmdOrGrp.name}\` ${args.cmdOrGrp.group ? 'command' : 'group'}.`);
	}
};
