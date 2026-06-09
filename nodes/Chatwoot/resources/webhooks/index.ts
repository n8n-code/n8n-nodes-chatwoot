import type { INodeProperties } from 'n8n-workflow';

export const webhooksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "List All Webhooks",
					"value": "List All Webhooks",
					"action": "List all webhooks",
					"description": "List all webhooks in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Create A Webhook",
					"value": "Create A Webhook",
					"action": "Add a webhook",
					"description": "Add a webhook subscription to the account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Update A Webhook",
					"value": "Update A Webhook",
					"action": "Update a webhook object",
					"description": "Update a webhook object in the account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks/{{$parameter[\"webhook_id\"]}}"
						}
					}
				},
				{
					"name": "Delete A Webhook",
					"value": "Delete A Webhook",
					"action": "Delete a webhook",
					"description": "Delete a webhook from the account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/webhooks/{{$parameter[\"webhook_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"List All Webhooks"
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
						"Webhooks"
					],
					"operation": [
						"List All Webhooks"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Create A Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Create A Webhook"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "https://example.com/webhook",
			"description": "The url where the events should be sent",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Create A Webhook"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the webhook",
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
						"Webhooks"
					],
					"operation": [
						"Create A Webhook"
					]
				}
			}
		},
		{
			"displayName": "Subscriptions",
			"name": "subscriptions",
			"type": "json",
			"default": "[\n  \"conversation_created\",\n  \"conversation_status_changed\"\n]",
			"description": "The events you want to subscribe to.",
			"routing": {
				"send": {
					"property": "subscriptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Create A Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Create A Webhook"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/webhooks/{webhook_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update A Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Update A Webhook"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "https://example.com/webhook",
			"description": "The url where the events should be sent",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update A Webhook"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the webhook",
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
						"Webhooks"
					],
					"operation": [
						"Update A Webhook"
					]
				}
			}
		},
		{
			"displayName": "Subscriptions",
			"name": "subscriptions",
			"type": "json",
			"default": "[\n  \"conversation_created\",\n  \"conversation_status_changed\"\n]",
			"description": "The events you want to subscribe to.",
			"routing": {
				"send": {
					"property": "subscriptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Update A Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Update A Webhook"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/webhooks/{webhook_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhooks"
					],
					"operation": [
						"Delete A Webhook"
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
						"Webhooks"
					],
					"operation": [
						"Delete A Webhook"
					]
				}
			}
		},
];
