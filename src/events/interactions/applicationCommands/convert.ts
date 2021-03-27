import { ConversionUnit } from '@lib/structures/commands/UnitConversionCommand';
import { ApplicationCommand } from '@lib/structures/events/ApplicationCommand';
import { InteractionCreatePacket, InteractionResponseData } from '@lib/types/Interactions';
import convert = require('convert-units');
import { MessageEmbed } from 'discord.js';

export default class extends ApplicationCommand {

	// eslint-disable-next-line @typescript-eslint/require-await
	public async handle(data: InteractionCreatePacket): Promise<InteractionResponseData> {
		const amount = data.data.options[0].options[0].value as number;
		const firstUnit = data.data.options[0].options[1].value as ConversionUnit;
		const secondUnit = data.data.options[0].options[2].value as ConversionUnit;

		// eslint-disable-next-line newline-per-chained-call
		const convertedValue = Number(convert(amount).from(firstUnit).to(secondUnit).toFixed(2));

		const embed = new MessageEmbed()
			.addFields(
				{ name: convert().describe(firstUnit).plural, value: amount, inline: true },
				{ name: convert().describe(secondUnit).plural, value: convertedValue, inline: true }
			)
			.setColor(0x71adcf);

		return { embeds: [embed] };
	}

}
