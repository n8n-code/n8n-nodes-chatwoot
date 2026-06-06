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
| Accounts | Create An Account, Get Details Of An Account, Update An Account, Delete An Account |
| Account Users | List All Account Users, Create An Account User, Delete An Account User |
| Agent Bots | List All Agent Bots, Create An Agent Bot, Get Details Of A Single Agent Bot, Update An Agent Bot, Delete An Agent Bot |
| Users | Create A User, Get Details Of A User, Update A User, Delete A User, Get Sso Url Of A User |
| Inbox API | Get Details Of A Inbox |
| Contacts | Contact List, Contact Create, Contact Details, Contact Update, Contact Delete, Contact Conversations, Contact Search, Contact Filter, Contact Inbox Creation, Contactable Inboxes Get, Contact Merge |
| Contact Labels | List All Labels Of A Contact, Contact Add Labels |
| Conversation Assignments | Assign A Conversation |
| Conversation Labels | — |
| Conversations | Conversation List Meta, Conversation List, New Conversation, Conversation Filter, Get Details Of A Conversation, Update Conversation, Toggle Status Of A Conversation, Toggle Priority Of A Conversation, Toggle Typing Status Of A Conversation, Update Custom Attributes Of A Conversation, List All Labels Of A Conversation, Conversation Add Labels, Get Conversation Reporting Events |
| Custom Filters | List All Filters, Create A Custom Filter, Get Details Of A Single Custom Filter, Update A Custom Filter, Delete A Custom Filter |
| Inboxes | List All Inboxes, Inbox Creation, Get Inbox, Update Inbox, Get Inbox Agent Bot, Update Agent Bot, Get Inbox Members, Add New Agent To Inbox, Update Agents In Inbox, Delete Agent In Inbox |
| Integrations | Get Details Of All Integrations, Create An Integration Hook, Update An Integrations Hook, Delete An Integration Hook |
| Labels | List All Labels, Create A Label, Get Details Of A Single Label, Update A Label, Delete A Label |
| Messages | List All Messages, Create A New Message In A Conversation, Delete A Message |
| Reports | Get Account Reporting Events, List All Conversation Statistics, List All Conversation Statistics Summary, Get Account Conversation Metrics, Get Agent Conversation Metrics, Get Channel Summary Report, Get Inbox Summary Report, Get Agent Summary Report, Get Team Summary Report, Get First Response Time Distribution, Get Inbox Label Matrix, Get Outgoing Messages Count |
| Teams | List All Teams, Create A Team, Get Details Of A Single Team, Update A Team, Delete A Team, Get Team Members, Add New Agent To Team, Update Agents In Team, Delete Agent In Team |
| Automation Rule | Get Account Automation Rule, Add New Automation Rule To Account, Get Details Of A Single Automation Rule, Update Automation Rule In Account, Delete Automation Rule From Account |
| Help Center | Add New Portal To Account, Get Portal, Update Portal To Account, Add New Category To Account, Add New Article To Account |
| Contacts API | Create A Contact, Get Details Of A Contact, Update A Contact |
| Conversations API | Create A Conversation, List All Contact Conversations, Get Single Conversation, Resolve Conversation, Toggle Typing Status, Update Last Seen |
| Messages API | Create A Message, List All Conversation Messages, Update A Message |
| CSAT Survey Page | Get Csat Survey Page |
| Account | Get Account Details, Update Account |
| Audit Logs | Get Account Audit Logs |
| Account Agent Bots | List All Account Agent Bots, Create An Account Agent Bot, Get Details Of A Single Account Agent Bot, Update An Account Agent Bot, Delete An Account Agent Bot |
| Agents | Get Account Agents, Add New Agent To Account, Update Agent In Account, Delete Agent From Account |
| Canned Responses | Get Account Canned Response, Add New Canned Response To Account, Update Canned Response In Account, Delete Canned Response From Account |
| Custom Attributes | Get Account Custom Attribute, Add New Custom Attribute To Account, Get Details Of A Single Custom Attribute, Update Custom Attribute In Account, Delete Custom Attribute From Account |
| Profile | Fetch Profile, Update Profile |
| Webhooks | List All Webhooks, Create A Webhook, Update A Webhook, Delete A Webhook |
| Conversation | Get Conversation Messages |

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
