import type { INodeProperties } from 'n8n-workflow';

export const auditLogsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Audit Logs",
					"value": "Get Account Audit Logs",
					"action": "List Audit Logs in Account",
					"description": "Get Details of Audit Log entries for an Account. This endpoint is only available in Enterprise editions and requires the audit_logs feature to be enabled.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/audit_logs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/audit_logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs"
					],
					"operation": [
						"Get Account Audit Logs"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Page number for pagination",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs"
					],
					"operation": [
						"Get Account Audit Logs"
					]
				}
			}
		},
];
