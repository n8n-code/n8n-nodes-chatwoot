import type { INodeProperties } from 'n8n-workflow';

export const conversationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation"
					]
				}
			},
			"options": [
				{
					"name": "Get Conversation Messages",
					"value": "Get Conversation Messages",
					"action": "Get messages from a conversation",
					"description": "Returns all messages from a specific conversation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accounts/{account_id}/conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation"
					],
					"operation": [
						"Get Conversation Messages"
					]
				}
			}
		},
];
