import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Details",
					"value": "Get Account Details",
					"action": "Get account details",
					"description": "Get the details of the current account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Update Account",
					"value": "Update Account",
					"action": "Update account",
					"description": "Update account details, settings, and custom attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Details"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Get Account Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Account",
			"description": "Name of the account",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "en",
			"description": "The locale of the account",
			"routing": {
				"send": {
					"property": "locale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.com",
			"description": "The domain of the account",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Support Email",
			"name": "support_email",
			"type": "string",
			"default": "support@example.com",
			"description": "The support email of the account",
			"routing": {
				"send": {
					"property": "support_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Auto Resolve After",
			"name": "auto_resolve_after",
			"type": "number",
			"default": 1440,
			"description": "Auto resolve conversations after specified minutes",
			"routing": {
				"send": {
					"property": "auto_resolve_after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Auto Resolve Message",
			"name": "auto_resolve_message",
			"type": "string",
			"default": "This conversation has been automatically resolved due to inactivity",
			"description": "Message to send when auto resolving",
			"routing": {
				"send": {
					"property": "auto_resolve_message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Auto Resolve Ignore Waiting",
			"name": "auto_resolve_ignore_waiting",
			"type": "boolean",
			"default": false,
			"description": "Whether to ignore waiting conversations for auto resolve",
			"routing": {
				"send": {
					"property": "auto_resolve_ignore_waiting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Industry",
			"name": "industry",
			"type": "string",
			"default": "Technology",
			"description": "Industry type",
			"routing": {
				"send": {
					"property": "industry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Company Size",
			"name": "company_size",
			"type": "string",
			"default": "50-100",
			"description": "Company size",
			"routing": {
				"send": {
					"property": "company_size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "UTC",
			"description": "Account timezone",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Update Account"
					]
				}
			}
		},
];
