# @n8n-dev/n8n-nodes-chatwoot

![chatwoot Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-chatwoot.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-chatwoot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing chatwoot API integrations by hand.**

Every time you connect n8n to chatwoot, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to chatwoot took 5 minutes, not half a day?**

This node gives you **32+ resources** out of the box: **Accounts**, **Account Users**, **Agent Bots**, **Users**, **Inbox API**, and 27 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-chatwoot
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-chatwoot`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **chatwoot API** → paste your API key
3. Drag the **chatwoot** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Accounts | POST Create an Account, GET Get an account details, PATCH Update an account, DELETE Delete an Account |
| Account Users | GET List all Account Users, POST Create an Account User, DELETE Delete an Account User |
| Agent Bots | GET List all AgentBots, POST Create an Agent Bot, GET Get an agent bot details, PATCH Update an agent bot, DELETE Delete an AgentBot |
| Users | POST Create a User, GET Get an user details, PATCH Update a user, DELETE Delete a User, GET Get User SSO Link |
| Inbox API | GET Inbox details |
| Contacts | GET List Contacts, POST Create Contact, GET Show Contact, PUT Update Contact, DELETE Delete Contact, GET Contact Conversations, GET Search Contacts, POST Contact Filter, POST Create contact inbox, GET Get Contactable Inboxes, POST Merge Contacts |
| Contact Labels | GET List Labels, POST Add Labels |
| Conversation Assignments | POST Assign Conversation |
| Conversations | GET Get Conversation Counts, GET Conversations List, POST Create New Conversation, POST Conversations Filter, GET Conversation Details, PATCH Update Conversation, POST Toggle Status, POST Toggle Priority, POST Toggle Typing Status, POST Update Custom Attributes, GET List Labels, POST Add Labels, GET Conversation Reporting Events |
| Custom Filters | GET List all custom filters, POST Create a custom filter, GET Get a custom filter details, PATCH Update a custom filter, DELETE Delete a custom filter |
| Inboxes | GET List all inboxes, POST Create an inbox, GET Get an inbox, PATCH Update Inbox, GET Show Inbox Agent Bot, POST Add or remove agent bot, GET List Agents in Inbox, POST Add a New Agent, PATCH Update Agents in Inbox, DELETE Remove an Agent from Inbox |
| Integrations | GET List all the Integrations, POST Create an integration hook, PATCH Update an Integration Hook, DELETE Delete an Integration Hook |
| Labels | GET List all labels, POST Create a label, GET Get a label, PATCH Update a label, DELETE Delete a label |
| Messages | GET Get messages, POST Create New Message, DELETE Delete a message |
| Reports | GET Account Reporting Events, GET Get Account reports, GET Get Account reports summary, GET Account Conversation Metrics, GET Agent Conversation Metrics, GET Get conversation statistics grouped by channel type, GET Get conversation statistics grouped by inbox, GET Get conversation statistics grouped by agent, GET Get conversation statistics grouped by team, GET Get first response time distribution by channel, GET Get inbox-label matrix report, GET Get outgoing messages count grouped by entity |
| Teams | GET List all teams, POST Create a team, GET Get a team details, PATCH Update a team, DELETE Delete a team, GET List Agents in Team, POST Add a New Agent, PATCH Update Agents in Team, DELETE Remove an Agent from Team |
| Automation Rule | GET List all automation rules in an account, POST Add a new automation rule, GET Get a automation rule details, PATCH Update automation rule in Account, DELETE Remove a automation rule from account |
| Help Center | POST Add a new portal, GET List all portals in an account, PATCH Update a portal, POST Add a new category, POST Add a new article |
| Contacts API | POST Create a contact, GET Get a contact, PATCH Update a contact |
| Conversations API | POST Create a conversation, GET List all conversations, GET Get a single conversation, POST Resolve a conversation, POST Toggle typing status, POST Update last seen |
| Messages API | POST Create a message, GET List all messages, PATCH Update a message |
| CSAT Survey Page | GET Get CSAT survey page |
| Account | GET Get account details, PATCH Update account |
| Audit Logs | GET List Audit Logs in Account |
| Account Agent Bots | GET List all AgentBots, POST Create an Agent Bot, GET Get an agent bot details, PATCH Update an agent bot, DELETE Delete an AgentBot |
| Agents | GET List Agents in Account, POST Add a New Agent, PATCH Update Agent in Account, DELETE Remove an Agent from Account |
| Canned Responses | GET List all Canned Responses in an Account, POST Add a New Canned Response, PATCH Update Canned Response in Account, DELETE Remove a Canned Response from Account |
| Custom Attributes | GET List all custom attributes in an account, POST Add a new custom attribute, GET Get a custom attribute details, PATCH Update custom attribute in Account, DELETE Remove a custom attribute from account |
| Profile | GET Fetch user profile, PUT Update user profile |
| Webhooks | GET List all webhooks, POST Add a webhook, PATCH Update a webhook object, DELETE Delete a webhook |
| Conversation | GET Get messages from a conversation |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from chatwoot docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official chatwoot OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **chatwoot** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the chatwoot API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
