import type { INodeProperties } from 'n8n-workflow';

export const accountAgentBotsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					]
				}
			},
			"options": [
				{
					"name": "List All Account Agent Bots",
					"value": "List All Account Agent Bots",
					"action": "List all AgentBots",
					"description": "List all agent bots available for the current account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots"
						}
					}
				},
				{
					"name": "Create An Account Agent Bot",
					"value": "Create An Account Agent Bot",
					"action": "Create an Agent Bot",
					"description": "Create an agent bot in the account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots"
						}
					}
				},
				{
					"name": "Get Details Of A Single Account Agent Bot",
					"value": "Get Details Of A Single Account Agent Bot",
					"action": "Get an agent bot details",
					"description": "Get the details of an agent bot in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update An Account Agent Bot",
					"value": "Update An Account Agent Bot",
					"action": "Update an agent bot",
					"description": "Update an agent bot's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete An Account Agent Bot",
					"value": "Delete An Account Agent Bot",
					"action": "Delete an AgentBot",
					"description": "Delete an AgentBot from the account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agent_bots/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/agent_bots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"List All Account Agent Bots"
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
						"Account Agent Bots"
					],
					"operation": [
						"List All Account Agent Bots"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/agent_bots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Agent Bot",
			"description": "The name of the agent bot",
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
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This is a sample agent bot",
			"description": "The description of the agent bot",
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
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Outgoing URL",
			"name": "outgoing_url",
			"type": "string",
			"default": "https://example.com/webhook",
			"description": "The webhook URL for the bot",
			"routing": {
				"send": {
					"property": "outgoing_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Avatar",
			"name": "avatar",
			"type": "string",
			"default": "",
			"description": "Send the form data with the avatar image binary or use the avatar_url",
			"routing": {
				"send": {
					"property": "avatar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Avatar URL",
			"name": "avatar_url",
			"type": "string",
			"default": "https://example.com/avatar.png",
			"description": "The url to a jpeg, png file for the agent bot avatar",
			"routing": {
				"send": {
					"property": "avatar_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Bot Type",
			"name": "bot_type",
			"type": "number",
			"default": 0,
			"description": "The type of the bot (0 for webhook)",
			"routing": {
				"send": {
					"property": "bot_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Bot Config",
			"name": "bot_config",
			"type": "json",
			"default": "{}",
			"description": "The configuration for the bot",
			"routing": {
				"send": {
					"property": "bot_config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
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
						"Account Agent Bots"
					],
					"operation": [
						"Create An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/agent_bots/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Get Details Of A Single Account Agent Bot"
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
						"Account Agent Bots"
					],
					"operation": [
						"Get Details Of A Single Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/agent_bots/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Agent Bot",
			"description": "The name of the agent bot",
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
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This is a sample agent bot",
			"description": "The description of the agent bot",
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
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Outgoing URL",
			"name": "outgoing_url",
			"type": "string",
			"default": "https://example.com/webhook",
			"description": "The webhook URL for the bot",
			"routing": {
				"send": {
					"property": "outgoing_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Avatar",
			"name": "avatar",
			"type": "string",
			"default": "",
			"description": "Send the form data with the avatar image binary or use the avatar_url",
			"routing": {
				"send": {
					"property": "avatar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Avatar URL",
			"name": "avatar_url",
			"type": "string",
			"default": "https://example.com/avatar.png",
			"description": "The url to a jpeg, png file for the agent bot avatar",
			"routing": {
				"send": {
					"property": "avatar_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Bot Type",
			"name": "bot_type",
			"type": "number",
			"default": 0,
			"description": "The type of the bot (0 for webhook)",
			"routing": {
				"send": {
					"property": "bot_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Bot Config",
			"name": "bot_config",
			"type": "json",
			"default": "{}",
			"description": "The configuration for the bot",
			"routing": {
				"send": {
					"property": "bot_config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
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
						"Account Agent Bots"
					],
					"operation": [
						"Update An Account Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/agent_bots/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Agent Bots"
					],
					"operation": [
						"Delete An Account Agent Bot"
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
						"Account Agent Bots"
					],
					"operation": [
						"Delete An Account Agent Bot"
					]
				}
			}
		},
];
