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
		{
			"displayName": "Q",
			"name": "q",
			"description": "Filter entries by the name or email of the user who performed the action",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
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
		{
			"displayName": "Types",
			"name": "types",
			"description": "Filter entries by the type of the audited record",
			"default": "[\n  \"Inbox\"\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "types",
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
		{
			"displayName": "Since",
			"name": "since",
			"description": "Only return entries created at or after this unix timestamp",
			"default": 1755388800,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
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
		{
			"displayName": "Until",
			"name": "until",
			"description": "Only return entries created at or before this unix timestamp",
			"default": 1755993599,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "until",
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
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Order of the entries by creation time",
			"default": "desc",
			"type": "options",
			"options": [
				{
					"name": "Desc",
					"value": "desc"
				},
				{
					"name": "Asc",
					"value": "asc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
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
						"Audit Logs"
					],
					"operation": [
						"Get Account Audit Logs"
					]
				}
			}
		},
];
