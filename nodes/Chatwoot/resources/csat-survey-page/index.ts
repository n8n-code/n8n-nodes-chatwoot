import type { INodeProperties } from 'n8n-workflow';

export const csatSurveyPageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"CSAT Survey Page"
					]
				}
			},
			"options": [
				{
					"name": "Get Csat Survey Page",
					"value": "Get Csat Survey Page",
					"action": "Get CSAT survey page",
					"description": "You can redirect the client to this URL, instead of implementing the CSAT survey component yourself.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/survey/responses/{{$parameter[\"conversation_uuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /survey/responses/{conversation_uuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"CSAT Survey Page"
					],
					"operation": [
						"Get Csat Survey Page"
					]
				}
			}
		},
];
