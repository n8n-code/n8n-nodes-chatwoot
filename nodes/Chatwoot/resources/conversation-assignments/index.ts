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
			"displayName": "Assignee Id",
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
			"displayName": "Team Id",
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
];
