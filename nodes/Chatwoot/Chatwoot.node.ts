import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountsDescription } from './resources/accounts';
import { accountUsersDescription } from './resources/account-users';
import { agentBotsDescription } from './resources/agent-bots';
import { usersDescription } from './resources/users';
import { inboxApiDescription } from './resources/inbox-api';
import { contactsDescription } from './resources/contacts';
import { contactLabelsDescription } from './resources/contact-labels';
import { conversationAssignmentsDescription } from './resources/conversation-assignments';
import { conversationsDescription } from './resources/conversations';
import { customFiltersDescription } from './resources/custom-filters';
import { inboxesDescription } from './resources/inboxes';
import { integrationsDescription } from './resources/integrations';
import { labelsDescription } from './resources/labels';
import { messagesDescription } from './resources/messages';
import { reportsDescription } from './resources/reports';
import { teamsDescription } from './resources/teams';
import { automationRuleDescription } from './resources/automation-rule';
import { helpCenterDescription } from './resources/help-center';
import { contactsApiDescription } from './resources/contacts-api';
import { conversationsApiDescription } from './resources/conversations-api';
import { messagesApiDescription } from './resources/messages-api';
import { csatSurveyPageDescription } from './resources/csat-survey-page';
import { accountDescription } from './resources/account';
import { auditLogsDescription } from './resources/audit-logs';
import { accountAgentBotsDescription } from './resources/account-agent-bots';
import { agentsDescription } from './resources/agents';
import { cannedResponsesDescription } from './resources/canned-responses';
import { customAttributesDescription } from './resources/custom-attributes';
import { profileDescription } from './resources/profile';
import { webhooksDescription } from './resources/webhooks';
import { conversationDescription } from './resources/conversation';

export class Chatwoot implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'chatwoot',
		name: 'N8nDevChatwoot',
		icon: { light: 'file:./chatwoot.png', dark: 'file:./chatwoot.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Chatwoot customer engagement platform',
		defaults: { name: 'chatwoot' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevChatwootApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Accounts",
					"value": "Accounts",
					"description": "Account management APIs"
				},
				{
					"name": "Account Users",
					"value": "Account Users",
					"description": "Account user management APIs"
				},
				{
					"name": "Agent Bots",
					"value": "Agent Bots",
					"description": "Bot integrations"
				},
				{
					"name": "Users",
					"value": "Users",
					"description": "User management APIs"
				},
				{
					"name": "Inbox API",
					"value": "Inbox API",
					"description": ""
				},
				{
					"name": "Contacts",
					"value": "Contacts",
					"description": "Contact management APIs"
				},
				{
					"name": "Contact Labels",
					"value": "Contact Labels",
					"description": "Manage contact labels"
				},
				{
					"name": "Conversation Assignments",
					"value": "Conversation Assignments",
					"description": "Manage conversation assignments"
				},
				{
					"name": "Conversations",
					"value": "Conversations",
					"description": "Conversation management APIs"
				},
				{
					"name": "Custom Filters",
					"value": "Custom Filters",
					"description": "Saved filters for conversations"
				},
				{
					"name": "Inboxes",
					"value": "Inboxes",
					"description": "Communication channels setup"
				},
				{
					"name": "Integrations",
					"value": "Integrations",
					"description": "Third-party integrations"
				},
				{
					"name": "Labels",
					"value": "Labels",
					"description": "Account label management APIs"
				},
				{
					"name": "Messages",
					"value": "Messages",
					"description": "Message management APIs"
				},
				{
					"name": "Reports",
					"value": "Reports",
					"description": "Analytics and reporting APIs"
				},
				{
					"name": "Teams",
					"value": "Teams",
					"description": "Team management APIs"
				},
				{
					"name": "Automation Rule",
					"value": "Automation Rule",
					"description": "Workflow automation rules"
				},
				{
					"name": "Help Center",
					"value": "Help Center",
					"description": "Knowledge base management"
				},
				{
					"name": "Contacts API",
					"value": "Contacts API",
					"description": "Public contact APIs"
				},
				{
					"name": "Conversations API",
					"value": "Conversations API",
					"description": "Public conversation APIs"
				},
				{
					"name": "Messages API",
					"value": "Messages API",
					"description": "Public message APIs"
				},
				{
					"name": "CSAT Survey Page",
					"value": "CSAT Survey Page",
					"description": "Customer satisfaction survey"
				},
				{
					"name": "Account",
					"value": "Account",
					"description": ""
				},
				{
					"name": "Audit Logs",
					"value": "Audit Logs",
					"description": ""
				},
				{
					"name": "Account Agent Bots",
					"value": "Account Agent Bots",
					"description": "Account-specific Agent Bots"
				},
				{
					"name": "Agents",
					"value": "Agents",
					"description": "Agent management APIs"
				},
				{
					"name": "Canned Responses",
					"value": "Canned Responses",
					"description": "Pre-defined responses for common queries"
				},
				{
					"name": "Custom Attributes",
					"value": "Custom Attributes",
					"description": "Custom fields for contacts and conversations"
				},
				{
					"name": "Profile",
					"value": "Profile",
					"description": "User profile APIs"
				},
				{
					"name": "Webhooks",
					"value": "Webhooks",
					"description": "Event notification webhooks"
				},
				{
					"name": "Conversation",
					"value": "Conversation",
					"description": ""
				}
			],
			"default": ""
		},
		...accountsDescription,
		...accountUsersDescription,
		...agentBotsDescription,
		...usersDescription,
		...inboxApiDescription,
		...contactsDescription,
		...contactLabelsDescription,
		...conversationAssignmentsDescription,
		...conversationsDescription,
		...customFiltersDescription,
		...inboxesDescription,
		...integrationsDescription,
		...labelsDescription,
		...messagesDescription,
		...reportsDescription,
		...teamsDescription,
		...automationRuleDescription,
		...helpCenterDescription,
		...contactsApiDescription,
		...conversationsApiDescription,
		...messagesApiDescription,
		...csatSurveyPageDescription,
		...accountDescription,
		...auditLogsDescription,
		...accountAgentBotsDescription,
		...agentsDescription,
		...cannedResponsesDescription,
		...customAttributesDescription,
		...profileDescription,
		...webhooksDescription,
		...conversationDescription
		],
	};
}
