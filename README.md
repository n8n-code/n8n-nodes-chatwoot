# @n8n-dev/n8n-nodes-chatwoot

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-chatwoot.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-chatwoot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing chatwoot API integrations by hand.**

Every time you connect n8n to chatwoot, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if your n8n node just... worked?**

This node gives you **32+ resources** out of the box: **Accounts**, **Account Users**, **Agent Bots**, **Users**, **Inbox API**, and 27 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **32+ resources**: **Accounts**, **Account Users**, **Agent Bots**, **Users**, **Inbox API**, and 27 more
- **Full CRUD**: Create, Read, Update, Delete operations for every resource
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
| Accounts | Create an Account, Get an account details, Update an account, Delete an Account |
| Account Users | List all Account Users, Create an Account User, Delete an Account User |
| Agent Bots | List all AgentBots, Create an Agent Bot, Get an agent bot details, Update an agent bot, Delete an AgentBot |
| Users | Create a User, Get an user details, Update a user, Delete a User, Get User SSO Link |
| Inbox API | Inbox details |
| Contacts | List Contacts, Create Contact, Show Contact, Update Contact, Delete Contact, Contact Conversations, Search Contacts, Contact Filter, Create contact inbox, Get Contactable Inboxes, Merge Contacts |
| Contact Labels | List Labels, Add Labels |
| Conversation Assignments | Assign Conversation |
| Conversations | Get Conversation Counts, Conversations List, Create New Conversation, Conversations Filter, Conversation Details, Update Conversation, Toggle Status, Toggle Priority, Toggle Typing Status, Update Custom Attributes, List Labels, Add Labels, Conversation Reporting Events |
| Custom Filters | List all custom filters, Create a custom filter, Get a custom filter details, Update a custom filter, Delete a custom filter |
| Inboxes | List all inboxes, Create an inbox, Get an inbox, Update Inbox, Show Inbox Agent Bot, Add or remove agent bot, List Agents in Inbox, Add a New Agent, Update Agents in Inbox, Remove an Agent from Inbox |
| Integrations | List all the Integrations, Create an integration hook, Update an Integration Hook, Delete an Integration Hook |
| Labels | List all labels, Create a label, Get a label, Update a label, Delete a label |
| Messages | Get messages, Create New Message, Delete a message |
| Reports | Account Reporting Events, Get Account reports, Get Account reports summary, Account Conversation Metrics, Agent Conversation Metrics, Get conversation statistics grouped by channel type, Get conversation statistics grouped by inbox, Get conversation statistics grouped by agent, Get conversation statistics grouped by team, Get first response time distribution by channel, Get inbox-label matrix report, Get outgoing messages count grouped by entity |
| Teams | List all teams, Create a team, Get a team details, Update a team, Delete a team, List Agents in Team, Add a New Agent, Update Agents in Team, Remove an Agent from Team |
| Automation Rule | List all automation rules in an account, Add a new automation rule, Get a automation rule details, Update automation rule in Account, Remove a automation rule from account |
| Help Center | Add a new portal, List all portals in an account, Update a portal, Add a new category, Add a new article |
| Contacts API | Create a contact, Get a contact, Update a contact |
| Conversations API | Create a conversation, List all conversations, Get a single conversation, Resolve a conversation, Toggle typing status, Update last seen |
| Messages API | Create a message, List all messages, Update a message |
| CSAT Survey Page | Get CSAT survey page |
| Account | Get account details, Update account |
| Audit Logs | List Audit Logs in Account |
| Account Agent Bots | List all AgentBots, Create an Agent Bot, Get an agent bot details, Update an agent bot, Delete an AgentBot |
| Agents | List Agents in Account, Add a New Agent, Update Agent in Account, Remove an Agent from Account |
| Canned Responses | List all Canned Responses in an Account, Add a New Canned Response, Update Canned Response in Account, Remove a Canned Response from Account |
| Custom Attributes | List all custom attributes in an account, Add a new custom attribute, Get a custom attribute details, Update custom attribute in Account, Remove a custom attribute from account |
| Profile | Fetch user profile, Update user profile |
| Webhooks | List all webhooks, Add a webhook, Update a webhook object, Delete a webhook |
| Conversation | Get messages from a conversation |

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
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate).

When the chatwoot API updates, this node updates too.

---

## Support This Project

This node was built by one developer who wanted to make n8n + OpenAPI effortless for everyone.

Your donation funds new features, more API support, and better tooling for every developer after you.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/kelvinzer0)
