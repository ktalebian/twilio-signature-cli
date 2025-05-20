#!/usr/bin/env node

import { Command } from "commander";
import { createTwilioSignature } from "twilio-signature";

const program = new Command();

program
  .name("twilio-signature")
  .description("Generate a Twilio signature for webhook validation")
  .version("1.0.0")
  .requiredOption("-t, --token <token>", "Twilio Auth Token")
  .requiredOption("-u, --url <url>", "Webhook URL")
  .option("-p, --params <params...>", "POST parameters as key=value pairs");

program.parse(process.argv);

const opts = program.opts();

const paramPairs: string[] = opts.params || [];
const params: Record<string, string> = {};

paramPairs.forEach((pair) => {
  const [key, value] = pair.split("=");
  if (key && value) params[key] = value;
});

const signature = createTwilioSignature(opts.token, opts.url, params);
console.log(signature);
