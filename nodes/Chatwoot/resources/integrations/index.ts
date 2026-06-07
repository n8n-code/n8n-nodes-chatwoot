import type { INodeProperties } from 'n8n-workflow';

export const integrationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					]
				}
			},
			"options": [
				{
					"name": "Get Details Of All Integrations",
					"value": "Get Details Of All Integrations",
					"action": "List all the Integrations",
					"description": "Get the details of all Integrations available for the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/apps"
						}
					}
				},
				{
					"name": "Create An Integration Hook",
					"value": "Create An Integration Hook",
					"action": "Create an integration hook",
					"description": "Create an integration hook",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/hooks"
						}
					}
				},
				{
					"name": "Update An Integrations Hook",
					"value": "Update An Integrations Hook",
					"action": "Update an Integration Hook",
					"description": "Update an Integration Hook",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/hooks/{{$parameter[\"hook_id\"]}}"
						}
					}
				},
				{
					"name": "Delete An Integration Hook",
					"value": "Delete An Integration Hook",
					"action": "Delete an Integration Hook",
					"description": "Delete an Integration Hook",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/integrations/hooks/{{$parameter[\"hook_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/integrations/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Get Details Of All Integrations"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
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
						"Integrations"
					],
					"operation": [
						"Get Details Of All Integrations"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/integrations/hooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
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
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "App Id",
			"name": "app_id",
			"type": "number",
			"default": 1,
			"description": "The ID of app for which integration hook is being created",
			"routing": {
				"send": {
					"property": "app_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "Inbox Id",
			"name": "inbox_id",
			"type": "number",
			"default": 1,
			"description": "The inbox ID, if the hook is an inbox hook",
			"routing": {
				"send": {
					"property": "inbox_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "number",
			"default": 1,
			"description": "The status of the integration (0 for inactive, 1 for active)",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "Settings",
			"name": "settings",
			"type": "json",
			"default": "{}",
			"description": "The settings required by the integration",
			"routing": {
				"send": {
					"property": "settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
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
						"Integrations"
					],
					"operation": [
						"Create An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Update An Integrations Hook"
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
						"Integrations"
					],
					"operation": [
						"Update An Integrations Hook"
					]
				}
			}
		},
		{
			"displayName": "Hook Id",
			"name": "hook_id",
			"required": true,
			"description": "The numeric ID of the integration hook",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Update An Integrations Hook"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "number",
			"default": 1,
			"description": "The status of the integration (0 for inactive, 1 for active)",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Update An Integrations Hook"
					]
				}
			}
		},
		{
			"displayName": "Settings",
			"name": "settings",
			"type": "json",
			"default": "{}",
			"description": "The settings required by the integration",
			"routing": {
				"send": {
					"property": "settings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Update An Integrations Hook"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
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
						"Integrations"
					],
					"operation": [
						"Update An Integrations Hook"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/integrations/hooks/{hook_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Delete An Integration Hook"
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
						"Integrations"
					],
					"operation": [
						"Delete An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "Hook Id",
			"name": "hook_id",
			"required": true,
			"description": "The numeric ID of the integration hook",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Delete An Integration Hook"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
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
						"Integrations"
					],
					"operation": [
						"Delete An Integration Hook"
					]
				}
			}
		},
];
