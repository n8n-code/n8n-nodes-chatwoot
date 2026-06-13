import type { INodeProperties } from 'n8n-workflow';

export const automationRuleDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Automation Rule",
					"value": "Get Account Automation Rule",
					"action": "List all automation rules in an account",
					"description": "Get details of automation rules in an Account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules"
						}
					}
				},
				{
					"name": "Add New Automation Rule To Account",
					"value": "Add New Automation Rule To Account",
					"action": "Add a new automation rule",
					"description": "Add a new automation rule to account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules"
						}
					}
				},
				{
					"name": "Get Details Of A Single Automation Rule",
					"value": "Get Details Of A Single Automation Rule",
					"action": "Get a automation rule details",
					"description": "Get the details of a automation rule in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Automation Rule In Account",
					"value": "Update Automation Rule In Account",
					"action": "Update automation rule in Account",
					"description": "Update a automation rule in account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Automation Rule From Account",
					"value": "Delete Automation Rule From Account",
					"action": "Remove a automation rule from account",
					"description": "Remove a automation rule from account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/automation_rules/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/automation_rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Get Account Automation Rule"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "account_id",
			"required": true,
			"description": "The numeric ID of the account",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Get Account Automation Rule"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page parameter",
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
						"Automation Rule"
					],
					"operation": [
						"Get Account Automation Rule"
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
						"Automation Rule"
					],
					"operation": [
						"Get Account Automation Rule"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/automation_rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Add label on message create event",
			"description": "Rule name",
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
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Add label support and sales on message create event if incoming message content contains text help",
			"description": "The description about the automation and actions",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "event_name",
			"type": "options",
			"default": "message_created",
			"description": "The event when you want to execute the automation actions",
			"options": [
				{
					"name": "Conversation Created",
					"value": "conversation_created"
				},
				{
					"name": "Conversation Updated",
					"value": "conversation_updated"
				},
				{
					"name": "Conversation Resolved",
					"value": "conversation_resolved"
				},
				{
					"name": "Message Created",
					"value": "message_created"
				}
			],
			"routing": {
				"send": {
					"property": "event_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Enable/disable automation rule",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  {\n    \"action_name\": \"add_label\",\n    \"action_params\": [\n      \"support\"\n    ]\n  }\n]",
			"description": "Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "[\n  {\n    \"attribute_key\": \"content\",\n    \"filter_operator\": \"contains\",\n    \"query_operator\": \"OR\",\n    \"values\": [\n      \"help\"\n    ]\n  }\n]",
			"description": "Array of conditions on which conversation filter would work, e.g message content contains text help.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
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
						"Automation Rule"
					],
					"operation": [
						"Add New Automation Rule To Account"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/automation_rules/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Get Details Of A Single Automation Rule"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The ID of the automation rule to be updated.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Get Details Of A Single Automation Rule"
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
						"Automation Rule"
					],
					"operation": [
						"Get Details Of A Single Automation Rule"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/automation_rules/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The ID of the automation rule to be updated.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Add label on message create event",
			"description": "Rule name",
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
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Add label support and sales on message create event if incoming message content contains text help",
			"description": "The description about the automation and actions",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "Event Name",
			"name": "event_name",
			"type": "options",
			"default": "message_created",
			"description": "The event when you want to execute the automation actions",
			"options": [
				{
					"name": "Conversation Created",
					"value": "conversation_created"
				},
				{
					"name": "Conversation Updated",
					"value": "conversation_updated"
				},
				{
					"name": "Conversation Resolved",
					"value": "conversation_resolved"
				},
				{
					"name": "Message Created",
					"value": "message_created"
				}
			],
			"routing": {
				"send": {
					"property": "event_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Enable/disable automation rule",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  {\n    \"action_name\": \"add_label\",\n    \"action_params\": [\n      \"support\"\n    ]\n  }\n]",
			"description": "Array of actions which you want to perform when condition matches, e.g add label support if message contains content help.",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "[\n  {\n    \"attribute_key\": \"content\",\n    \"filter_operator\": \"contains\",\n    \"query_operator\": \"OR\",\n    \"values\": [\n      \"help\"\n    ]\n  }\n]",
			"description": "Array of conditions on which conversation filter would work, e.g message content contains text help.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
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
						"Automation Rule"
					],
					"operation": [
						"Update Automation Rule In Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/automation_rules/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Delete Automation Rule From Account"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The ID of the automation rule to be deleted",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Automation Rule"
					],
					"operation": [
						"Delete Automation Rule From Account"
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
						"Automation Rule"
					],
					"operation": [
						"Delete Automation Rule From Account"
					]
				}
			}
		},
];
