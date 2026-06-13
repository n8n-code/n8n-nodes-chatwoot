import type { INodeProperties } from 'n8n-workflow';

export const messagesApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					]
				}
			},
			"options": [
				{
					"name": "Create A Message",
					"value": "Create A Message",
					"action": "Create a message",
					"description": "Create a message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				},
				{
					"name": "List All Conversation Messages",
					"value": "List All Conversation Messages",
					"action": "List all messages",
					"description": "List all messages in the conversation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages"
						}
					}
				},
				{
					"name": "Update A Message",
					"value": "Update A Message",
					"action": "Update a message",
					"description": "Update a message",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}/contacts/{{$parameter[\"contact_identifier\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/messages/{{$parameter[\"message_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					],
					"operation": [
						"Create A Message"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "Hello, how can I help you?",
			"description": "Content for the message",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					],
					"operation": [
						"Create A Message"
					]
				}
			}
		},
		{
			"displayName": "Echo ID",
			"name": "echo_id",
			"type": "string",
			"default": "1234567890",
			"description": "Temporary identifier which will be passed back via websockets",
			"routing": {
				"send": {
					"property": "echo_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					],
					"operation": [
						"Create A Message"
					]
				}
			}
		},
		{
			"displayName": "GET /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					],
					"operation": [
						"List All Conversation Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /public/api/v1/inboxes/{inbox_identifier}/contacts/{contact_identifier}/conversations/{conversation_id}/messages/{message_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					],
					"operation": [
						"Update A Message"
					]
				}
			}
		},
		{
			"displayName": "Submitted Values",
			"name": "submitted_values",
			"type": "json",
			"default": "{\n  \"name\": \"My Name\",\n  \"title\": \"My Title\",\n  \"value\": \"value\",\n  \"csat_survey_response\": {\n    \"feedback_message\": \"Great service!\",\n    \"rating\": 5\n  }\n}",
			"description": "Replies to the Bot Message Types",
			"routing": {
				"send": {
					"property": "submitted_values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messages API"
					],
					"operation": [
						"Update A Message"
					]
				}
			}
		},
];
