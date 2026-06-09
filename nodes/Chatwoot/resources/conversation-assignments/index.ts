import type { INodeProperties } from 'n8n-workflow';

export const conversationAssignmentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation Assignments"
					]
				}
			},
			"options": [
				{
					"name": "Assign A Conversation",
					"value": "Assign A Conversation",
					"action": "Assign Conversation",
					"description": "Assign a conversation to an agent or a team",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/conversations/{{$parameter[\"conversation_id\"]}}/assignments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation Assignments"
					],
					"operation": [
						"Assign A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Assignee ID",
			"name": "assignee_id",
			"type": "number",
			"default": 1,
			"description": "Id of the assignee user",
			"routing": {
				"send": {
					"property": "assignee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation Assignments"
					],
					"operation": [
						"Assign A Conversation"
					]
				}
			}
		},
		{
			"displayName": "Team ID",
			"name": "team_id",
			"type": "number",
			"default": 1,
			"description": "Id of the team. If the assignee_id is present, this param would be ignored",
			"routing": {
				"send": {
					"property": "team_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation Assignments"
					],
					"operation": [
						"Assign A Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
			"name": "security_userapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by visiting the profile page or via rails console. Provides access to  endpoints based on the user permissions levels. This token can be saved by an external system when user is created via API, to perform activities on behalf of the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"api_access_token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation Assignments"
					],
					"operation": [
						"Assign A Conversation"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
			"name": "security_agentbotapikey",
			"type": "string",
			"default": "",
			"description": "This token should be provided by system admin or obtained via rails console. This token can be used to build bot integrations and can only access limited apis.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"api_access_token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation Assignments"
					],
					"operation": [
						"Assign A Conversation"
					]
				}
			}
		},
];
