import type { INodeProperties } from 'n8n-workflow';

export const inboxApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Inbox API"
					]
				}
			},
			"options": [
				{
					"name": "Get Details Of A Inbox",
					"value": "Get Details Of A Inbox",
					"action": "Inbox details",
					"description": "Get the details of an inbox",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/public/api/v1/inboxes/{{$parameter[\"inbox_identifier\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /public/api/v1/inboxes/{inbox_identifier}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inbox API"
					],
					"operation": [
						"Get Details Of A Inbox"
					]
				}
			}
		},
];
