# Twilio Signature CLI

[![npm version](https://img.shields.io/npm/v/twilio-signature-cli.svg)](https://www.npmjs.com/package/twilio-signature-cli)
[![License](https://img.shields.io/npm/l/twilio-signature-cli.svg)](https://github.com/yourusername/twilio-signature-cli/blob/main/LICENSE)

A command-line interface tool for generating Twilio signatures to validate webhook requests.

If you need a module to use in your application, check out [twilio-signature](https://www.npmjs.com/package/twilio-signature).

## Overview

This CLI tool makes it easy to generate Twilio signatures for webhook validation without writing any code. It's perfect for testing and debugging Twilio webhook integrations, or for generating signatures in automated scripts.

## Installation

You can install the CLI globally:

```bash
npm install -g twilio-signature-cli
```

Or run it directly with npx:

```bash
npx twilio-signature-cli [options]
```

## Usage

```bash
twilio-signature -t YOUR_AUTH_TOKEN -u YOUR_WEBHOOK_URL [options]
```

### Required Options

- `-t, --token <token>` - Your Twilio Auth Token
- `-u, --url <url>` - The complete URL of the webhook endpoint

### Optional Parameters

- `-p, --params <params...>` - Webhook POST parameters as key=value pairs
- `-V, --version` - Display version number
- `-h, --help` - Display help information

## Examples

### Basic Usage

Generate a signature for a simple webhook URL:

```bash
twilio-signature -t abcd1234efgh5678 -u https://example.com/twilio/webhook
```

### With POST Parameters

Include the parameters Twilio would send in the request:

```bash
twilio-signature -t abcd1234efgh5678 -u https://example.com/twilio/webhook \
  -p From=+14155551212 \
  To=+16505551212 \
  Body="Hello world" \
  MessageSid=SM123456789
```
