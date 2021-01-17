import { ModerationCase } from '@lib/structures/ModerationCases';

declare module 'klasa' {
	export interface LanguageKeys {
		default: (key: string) => string;
		defaultLanguage: string;
		prefixReminder: (prefix: string) => string;
		settingGatewayExpectsGuild: string;
		settingGatewayValueForKeyNoext: (data: any, key: any) => string;
		settingGatewayValueForKeyAlrext: (data: any, key: any) => string;
		settingGatewaySpecifyValue: string;
		settingGatewayKeyNotArray: (key: any) => string;
		settingGatewayKeyNoext: (key: any) => string;
		settingGatewayInvalidType: string;
		settingGatewayInvalidFilteredValue: (piece: any, value: any) => string;
		resolverMultiTooFew: (name: string, min: number) => string;
		resolverInvalidBool: (name: string) => string;
		resolverInvalidChannel: (name: string) => string;
		resolverInvalidCustom: (name: string, type: string) => string;
		resolverInvalidDate: (name: string) => string;
		resolverInvalidDuration: (name: string) => string;
		resolverInvalidEmoji: (name: string) => string;
		resolverInvalidFloat: (name: number) => string;
		resolverInvalidGuild: (name: string) => string;
		resolverInvalidInt: (name: number) => string;
		resolverInvalidLiteral: (name: string) => string;
		resolverInvalidMember: (name: string) => string;
		resolverInvalidMessage: (name: string) => string;
		resolverInvalidPiece: (name: string, piece: string) => string;
		resolverInvalidRegexMatch: (name: string, pattern: string) => string;
		resolverInvalidRole: (name: string) => string;
		resolverInvalidString: (name: string) => string;
		resolverInvalidTime: (name: string) => string;
		resolverInvalidUrl: (name: string) => string;
		resolverInvalidUser: (name: string) => string;
		resolverStringSuffix: string;
		resolverMinmaxExactly: (name: string, min: number, suffix: string) => string;
		resolverMinmaxBoth: (name: string, min: number, max: number, suffix: string) => string;
		resolverMinmaxMin: (name: string, min: number, suffix: string) => string;
		resolverMinmaxMax: (name: string, max: number, suffix: string) => string;
		reactionHandlerPrompt: string;
		commandMessageMissing: string;
		commandMessageMissingRequired: (name: string) => string;
		commandMessageMissingOptionals: (possibles: string) => string;
		commandMessageNoMatch: (possibles: string) => string;
		monitorCommandHandlerReprompt: (tag: string, name: string, time: number, abortOptions: string[]) => string;
		monitorCommandHandlerRepeatingReprompt: (tag: string, name: string, time: number, cancelOptions: string[]) => string;
		monitorCommandHandlerAborted: string;
		inhibitorCooldown: (remainng: number, guildCooldown: boolean) => string;
		inhibitorDisabledGuild: string;
		inhibitorDisabledGlobal: string;
		inhibitorMissingBotPerms: (missing: string) => string;
		inhibitorNsfw: string;
		inhibitorPermissions: (cmdName: string) => string;
		inhibitorRequiredSettings: (settings: string[]) => string;
		inhibitorRunIn: (types: string) => string;
		inhibitorRunInNone: (name: string) => string;
		commandBlacklistDescription: string;
		commandBlacklistSuccess: (usersAdded: string[], usersRemoved: string[], guildsAdded: string[], guildsRemoved: string[]) => string;
		commandEvalDescription: string;
		commandEvalExtended: string;
		commandEvalError: (time: string, output: string, type: string) => string;
		commandEvalOutput: (time: string, output: string, type: string) => string;
		commandEvalSendFile: (time: string, type: string) => string;
		commandEvalSendConsole: (time: string, type: string) => string;
		commandUnload: (type: string, name: string) => string;
		commandUnloadDescription: string;
		commandUnloadWarn: string;
		commandTransferError: string;
		commandTransferSuccess: (type: string, name: string) => string;
		commandTransferFailed: (type: string, name: string) => string;
		commandTransferDescription: string;
		commandReload: (type: string, name: string, time: string) => string;
		commandReloadFailed: (type: string, name: string) => string;
		commandReloadAll: (type: string, time: string) => string;
		commandReloadEverything: (time: string) => string;
		commandReloadDescription: string;
		commandReboot: string;
		commandRebootDescription: string;
		commandLoad: (time: string, type: string, name: string) => string;
		commandLoadFail: string;
		commandLoadError: (type: string, name: string, error: string) => string;
		commandLoadDescription: string;
		commandPing: string;
		commandPingDescription: string;
		commandPingPong: (diff: number, ping: number) => string;
		commandInvite: () => string[];
		commandInviteDescription: string;
		commandInfo: string[];
		commandInfoDescription: string;
		commandHelpDescription: string;
		commandHelpData: {
			title: (description: string) => string;
			usage: (usage: string) => string;
			extended: (extendedHelp: string) => string;
			footer: (name: string) => string;
		};
		commandHelpBeginning: (prefix: string) => string;
		commandHelpNoExtended: string;
		commandHelpDm: string;
		commandHelpNoDm: string;
		commandHelpUsage: (usage: string) => string;
		commandHelpExtended: string;
		commandEnable: (type: string, name: string) => string;
		commandEnableDescription: string;
		commandDisable: (type: string, name: string) => string;
		commandDisableDescription: string;
		commandDisableWarn: string;
		commandConfNoKey: string;
		commandConfNoValue: string;
		commandConfGuarded: (name: string) => string;
		commandConfUpdated: (key: string, response: string) => string;
		commandConfKeyNotArray: string;
		commandConfGetNoExt: (key: string) => string;
		commandConfGet: (key: string, value: string) => string;
		commandConfReset: (key: string, response: string) => string;
		commandConfNoChange: (key: string) => string;
		commandConfServerDescription: string;
		commandConfServerExtended: string;
		commandConfServer: (key: string, list: string) => string;
		commandConfUserDescription: string;
		commandConfUserExtended: string;
		commandConfUser: (key: string, list: string) => string;
		commandStats: (memUsage: number, uptime: string, users: number, guilds: number, channels: number, klasaVersion: string, discordVersion: string, processVersion: string) => string[];
		commandStatsDescription: string;
		commandStatsExtended: string;
		commandStatsEmbed: {
			fieldTitles: {
				memoryUsage: string;
				uptime: string;
				users: string;
				guilds: string;
				channels: string;
				klasa: string;
				discordjs: string;
				node: string;
			};
			footer: string;
			title: string;
		};
		commandDiscordStatusDescription: string;
		commandDiscordStatusError: string;
		commandDiscordStautsEmbed: {
			decription: (incident: string) => string;
			footer: (time: string) => string;
		};
		messagePromptTimeout: string;
		textPromptAbortOptions: string[];
		userNotFound: string;
		userNotInGuild: (user: string) => string;
		none: string;
		noParentCategory: string;
		working: string;
		argumentRoleNameCouldNotFind: (name: string, arg: string) => string;
		argumentRoleNameMultipleMatches: (matches: string, name: string) => string;
		argumentTimespanInvalid: (arg: string) => string;
		argumentUsernameCannotFind: (search: string) => string;
		argumentUsernameMultiple: (users: string) => string;
		commandLyricsDescription: string;
		commandLyricsExtended: string;
		commandLyricsEmbed: {
			title: string;
		};
		commandLyricsNoLyrics: string;
		commandChooseDescription: string;
		commandChooseExtended: string;
		commandChooseResponse: (choice: string) => string;
		commandChooseTooFew: string;
		commandRateDescription: string;
		commandRateExtended: string;
		commandRateResponse: (thing: string, rating: number) => string;
		commandRockPaperScissorsDescription: string;
		commandRockPaperScissorsExtended: string;
		commandRockPaperScissorsWinner: (playerMove: string, steveMove: string, winner: number) => string;
		commandRollDescription: string;
		commandRollExtended: string;
		commandRollResponse: string;
		commandRollEmojiResponse: (emoji: string, message: string) => string;
		commandAudinoDescription: string;
		commandAudinoExtended: string;
		commandAudinoId: string;
		commandFDescription: string;
		commandFExtended: string;
		commandFId: string;
		command_8BallDescription: string;
		command_8BallExtended: string;
		command_8BallResponses: string[];
		commandDftbaDescription: string;
		commandDftbaExtended: string;
		commandXkcdDescription: string;
		commandXkcdExtended: string;
		commandXkcdInvalid: string;
		moderationNoDuration: string;
		moderationNoReason: string;
		moderationNoSteve: string;
		moderationNoSelf: string;
		moderationHigherRole: (user: string) => string;
		moderationCaseDisplayFieldTarget: string;
		moderationCaseDisplayFieldModerator: string;
		moderationCaseDisplayFieldDuration: string;
		moderationCaseDisplayFieldReason: string;
		moderationCaseDisplayFooter: (caseNumber: number, targetID: string) => string;
		moderationCaseDisplayTimeRemaining: (time: string) => string;
		commandMuteDescription: string;
		commandMuteExtended: string;
		commandMuteSuccess: (target: string, thisCase: ModerationCase) => string;
		commandMuteUnable: (target: string) => string;
		commandDeafenDescription: string;
		commandDeafenExtended: string;
		commandDeafenUnable: (target: string) => string;
		commandDeafenSuccess: (target: string, thisCase: ModerationCase) => string;
		commandBanDescription: string;
		commandBanExtended: string;
		commandBanUnable: (target: string) => string;
		commandBanSuccess: (target: string, thisCase: ModerationCase) => string;
		commandKickDescription: string;
		commandKickExtended: string;
		commandKickUnable: (target: string) => string;
		commandKickSuccess: (target: string, thisCase: ModerationCase) => string;
		commandUnbanDescription: string;
		commandUnbanExtended: string;
		commandUnbanUnable: (target: string) => string;
		commandUnbanSuccess: (target: string, thisCase: ModerationCase) => string;
		commandUnmuteDescription: string;
		commandUnmuteExtended: string;
		commandUnmuteUnable: (target: string) => string;
		commandUnmuteSuccess: (target: string, thisCase: ModerationCase) => string;
		commandUndeafenDescription: string;
		commandUndeafenExtended: string;
		commandUndeafenUnable: (target: string) => string;
		commandUndeafenSuccess: (target: string, thisCase: ModerationCase) => string;
		commandPermissionsDescription: string;
		commandPermissionsHasAll: (user: string) => string;
		commandClearRoleDescription: string;
		commandClearRoleExtended: string;
		commandClearRoleRoleEmpty: (role: string) => string;
		commandClearRole: (size: number, role: string) => string;
		commandNicknameDescription: string;
		commandNicknameExtended: string;
		commandNicknameSet: (user: string) => string;
		commandNicknameCleared: (user: string) => string;
		commandRoleDescription: string;
		commandRoleExtended: string;
		commandRoleRemove: (roles: string) => string;
		commandRoleAdd: (roles: string) => string;
		commandLockDescription: string;
		commandLockExtended: string;
		commandLockLocked: string;
		commandUnlockDescription: string;
		commandUnlockExtended: string;
		commandUnlockUnlocked: string;
		commandSlowModeDescription: string;
		commandSlowModeExtended: string;
		commandSlowModeReset: string;
		commandSlowModeSet: (duration: string) => string;
		commandPurgeDescription: string;
		commandPurgeExtended: string;
		commandPurgePurged: (size: number) => string;
		commandRoleAliasDescription: string;
		commandRoleAliasExtended: string;
		commandRoleAliasAlreadyExists: (alias: string) => string;
		commandRoleAliasDoesNotExist: (alias: string) => string;
		commandRoleAliasAdd: (alias: string, role: string) => string;
		commandRoleAliasRemove: (alias: string) => string;
		commandSnippetDescription: string;
		commandSnippetExtended: string;
		commandSnippetAdd: (name: string) => string;
		commandSnippetEdit: (name: string) => string;
		commandSnippetRemove: (name: string) => string;
		commandSnippetNoPermission: string;
		commandSnippetAlreadyExists: (name: string) => string;
		commandSnippetInvalid: (name: string) => string;
		commandSnippetNoSnipsInGuild: string;
		commandSnippetReset: string;
		commandRemindDescription: string;
		commandRemindExtended: string;
		resolverReminderLength: string;
		resolverReminderInvalid: (arg: string | number) => string;
		commandRemindCreated: (duration: string) => string;
		commandRemindCanceled: (content: string) => string;
		commandRemindNoReminders: string;
		commandReminderDisplayHidden: string;
		commandRemindViewEmbed: {
			title: string;
		};
		commandPomodoroDescription: string;
		commandPomodoroExtended: string;
		commandPomodoroUnderConstruction: string;
		commandAssignDescription: string;
		commandAssignExtended: string;
		commandAssignNoRoleProvided: string;
		commandAssignNotAssignable: (role: string) => string;
		commandAssignRoleAdd: (roles: string) => string;
		commandAssignRoleRemove: (roles: string) => string;
		commandAssignRoleNeedTrusted: (role: string) => string;
		commandWhoIsDescription: string;
		commandWhoIsExtended: string;
		commandWhoIsDate: (duration: string, date: string) => string;
		commandWhoIsJoinedGuildHours: (hours: number, date: string) => string;
		commandWhoIsEmbed: {
			fieldTitles: {
				displayName: string;
				accountCreated: string;
				joinedGuild: string;
				roles: string;
			};
			footer: (id: string) => string;
		};
		commandAvatarDescription: string;
		commandAvatarCannotDisplay: (user: string) => string;
		commandServerInfoDescription: string;
		commandServerInfoExtended: string;
		commandServerInfoEmbed: {
			fieldTitles: {
				totalMembers: string;
				bots: string;
				textChannels: string;
				voiceChannels: string;
				roles: string;
				emojis: string;
			};
			footer: (date: string, duration: string) => string;
		};
		commandRoleInfoDescription: string;
		commandRoleInfoExtended: string;
		commandRoleInfoRestricted: string;
		commandRoleInfoNoMembers: string;
		commandRoleInfoTooMany: string;
		commandRoleInfoEmbed: {
			description: (role: string, date: string) => string;
			fieldTitles: {
				aliases: string;
				members: (num: number) => string;
			};
			footer: (assignable: boolean) => string;
		};
		commandManageDisabledCommandsDescription: string;
		commandManageDisabledCommandsExtended: string;
		commandManageDisabledCommandsNoCommandsDisabled: string;
		commandManageDisabledCommands: (cmdName: string, enabling: boolean) => string;
		commandSetMemberLogDescription: string;
		commandSetMemberLogExtended: string;
		commandSetMemberLogSet: (channel: string) => string;
		commandServerLogDescription: string;
		commandServerLogExtended: string;
		commandServerLogSet: (channel: string) => string;
		commandSetReminderChannelDescription: string;
		commandSetReminderChannelExtended: string;
		commandSetReminderChannelSet: (channel: string) => string;
		commandSetAdministratorRoleDescription: string;
		commandSetAdministratorRoleExtended: string;
		commandSetAdministratorRoleSet: (role: string) => string;
		commandSetModeratorRoleDescription: string;
		commandSetModeratorRoleExtended: string;
		commandSetModeratorRoleSet: (role: string) => string;
		commandSetTrustedRoleDescription: string;
		commandSetTrustedRoleExtended: string;
		commandSetTrustedRoleSet: (role: string) => string;
		commandSetMutedRoleDescription: string;
		commandSetMutedRoleExtended: string;
		commandSetMutedRoleSet: (role: string) => string;
		commandSetDeafenedRoleDescription: string;
		commandSetDeafenedRoleExtended: string;
		commandSetDeafenedRoleSet: (role: string) => string;
		commandSetBanDeleteDaysDescription: string;
		commandSetBanDeleteDaysExtended: string;
		commandSetBanDeleteDaysSet: (days: number) => string;
		commandManageRestrictedRolesDescription: string;
		commandManageRestrictedRolesExtended: string;
		commandManageRestrictedRolesManageRemoved: (removedRoles: string) => string;
		commandManageRestrictedRolesManageAdded: (addedRoles: string) => string;
		commandManageRestrictedRolesReset: string;
		commandManageRestrictedrolesShowNoRoles: string;
		commandManageRestrictedrolesShowRoleNotFound: string;
		commandManageAssignableRolesDescription: string;
		commandManageAssignableRolesExtended: string;
		commandManageAssignableRolesManageRemoved: (removedRoles: string) => string;
		commandManageAssignableRolesManageAdded: (addedRoles: string) => string;
		commandManageAssignableRolesReset: string;
		commandManageAssignableRolesShowNoRoles: string;
		commandManageAssignableRolesShowRoleNotFound: string;
		commandManageWordBlacklistDescription: string;
		commandManageWordBlacklistExtended: string;
		commandManageWordBlacklistEnabled: string;
		commandManageWordBlacklistDisabled: string;
		commandManageWordBlacklistReset: string;
		commandManageWordBlacklistUpdate: (removing: boolean) => string;
		commandToggleTrustedRoleRequirementDescription: string;
		commandToggleTrustedRoleRequirementExtended: string;
		commandToggleTrustedRoleRequirementDisable: string;
		commandToggleTrustedRoleRequirementEnable: string;
		commandSetEmbedColorDescription: string;
		commandSetEmbedColorExtended: string;
		resolverInvalidColor: (hex: string) => string;
		commandSetEmbedColorReset: string;
		commandSetEmbedColorShow: (hex: string) => string;
		commandSetEmbedColorShowNone: string;
		commandSetEmbedColorSet: (hex: string) => string;
		commandFeedbackDescription: string;
		commandFeedbackExtended: string;
		commandFeedbackNoGuild: string;
		commandFeedbackNoChannel: string;
		commandFeedbackSent: string;
		commandSupportDescription: string;
		commandToggleChannelCreateDescription: string;
		commandToggleChannelCreate: (disabled: boolean) => string;
		commandToggleChannelDeleteDescription: string;
		commandToggleChannelDelete: (disabled: boolean) => string;
		commandToggleChannelUpdateDescription: string;
		commandToggleChannelUpdateExtended: string;
		commandToggleChannelUpdate: (disabled: boolean) => string;
		commandToggleEmojiCreateDescription: string;
		commandToggleEmojiCreate: (disabled: boolean) => string;
		commandToggleEmojiDeleteDescription: string;
		commandToggleEmojiDelete: (disabled: boolean) => string;
		commandToggleEmojiUpdateDescription: string;
		commandToggleEmojiUpdateExtended: string;
		commandToggleEmojiUpdate: (disabled: boolean) => string;
		commandToggleGuildBanAddDescription: string;
		commandToggleGuildBanAdd: (disabled: boolean) => string;
		commandToggleGuildBanRemoveDescription: string;
		commandToggleGuildBanRemove: (disabled: boolean) => string;
		commandToggleGuildMemberAddDescription: string;
		commandToggleGuildMemberAdd: (disabled: boolean) => string;
		commandToggleGuildMemberRemoveDescription: string;
		commandToggleGuildMemberRemove: (disabled: boolean) => string;
		commandToggleGuildMemberUpdateDescription: string;
		commandToggleGuildMemberUpdateExtended: string;
		commandToggleGuildMemberUpdate: (disabled: boolean) => string;
		commandToggleInviteCreateDescription: string;
		commandToggleInviteCreate: (disabled: boolean) => string;
		commandToggleInviteDeleteDescription: string;
		commandToggleInviteDelete: (disabled: boolean) => string;
		commandToggleMessageDeleteDescription: string;
		commandToggleMessageDelete: (disabled: boolean) => string;
		commandToggleMessageDeleteBulkDescription: string;
		commandToggleMessageDeleteBulk: (disabled: boolean) => string;
		commandToggleRoleCreateDescription: string;
		commandToggleRoleCreate: (disabled: boolean) => string;
		commandToggleRoleDeleteDescription: string;
		commandToggleRoleDelete: (disabled: boolean) => string;
		commandToggleRoleUpdateDescription: string;
		commandToggleRoleUpdateExtended: string;
		commandToggleRoleUpdate: (disabled: boolean) => string;
		eventChannelCreateEmbed: {
			footer: (id: string) => string;
			title: (type: string, name: string) => string;
		};
		eventChannelDeleteEmbed: {
			footer: (id: string) => string;
			title: (type: string, name: string) => string;
		};
		eventChannelUpdateNameChangeEmbed: {
			footer: (id: string) => string;
			title: (oldName: string, newName: string, type: string) => string;
		};
		eventEmojiCreateEmbed: {
			footer: (id: string) => string;
			title: (name: string) => string;
		};
		eventEmojiDeleteEmbed: {
			footer: (id: string) => string;
			title: (name: string) => string;
		};
		eventEmojiUpdateNameChangeEmbedx: {
			footer: (id: string) => string;
			title: (oldName: string, newName: string, animated: boolean) => string;
		};
		eventRoleCreateEmbed: {
			footer: (id: string) => string;
			title: (name: string) => string;
		};
		eventRoleDeleteEmbed: {
			footer: (id: string) => string;
			title: (name: string) => string;
		};
		eventRoleUpdateNameChangeEmbed: {
			footer: (id: string) => string;
			title: (oldName: string, newName: string) => string;
		};
		eventGuildMemberAddEmbed: {
			fieldTitles: {
				bot: (executor: string) => string;
				human: string;
			};
			fieldValues: {
				accountAge: (duration: string) => string;
			};
			footer: (id: string) => string;
		};
		eventGuildMemberRemoveEmbed: {
			fieldTitles: {
				joinDate: (bot: boolean) => string;
				roles: string;
			};
			fieldValues: {
				joinDate: (duration: string) => string;
			};
			footer: (id: string) => string;
		};
		eventGuildMemberUpdateRoleUpdateEmbed: {
			footer: (id: string) => string;
			title: (type: string, role: string, executor: string) => string;
		};
		eventGuildMemberUpdateRoleUpdateRemovedFrom: string;
		eventGuildMemberUpdateRoleUpdateAddedTo: string;
		eventGuildMemberUpdateDisplayNameChangeEmbed: {
			fieldTitles: {
				newDisplayName: string;
			};
			footer: (id: string) => string;
		};
		eventInviteCreateEmbed: {
			footer: (code: string) => string;
			title: (channel: string) => string;
		};
		eventInviteDeleteEmbed: {
			footer: (code: string) => string;
			title: (channel: string) => string;
		};
		eventMessageDeleteUnableToDisplay: string;
		eventMessageDeleteEmbed: {
			fieldTitles: {
				channel: (name: string, parent: string) => string;
			};
			footer: (id: string, time: string) => string;
		};
		eventMessageDeleteBulkEmbed: {
			footer: (id: string) => string;
			title: (size: number, name: string, parent: string) => string;
		};
		eventGuildBanAddEmbed: {
			footer: (id: string) => string;
			title: (executor: string) => string;
		};
		eventGuildBanRemoveEmbed: {
			footer: (id: string) => string;
			title: (executor: string) => string;
		};
		monitorMentionSpamMax: (maxMentions: number) => string;
		monitorWordBlacklistFiltered: string;
		inhibitorPingProtectionEveryone: string;
		inhibitorPingprotectionEveryone: string;
		serializerColorInvalidHex: (code: string) => string;
		serializerTrustedRoleSettingInvalidSetting: (setting: string) => string;
	}
}
