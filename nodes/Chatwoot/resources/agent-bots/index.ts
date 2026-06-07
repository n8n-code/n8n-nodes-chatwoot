import type { INodeProperties } from 'n8n-workflow';

export const agentBotsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					]
				}
			},
			"options": [
				{
					"name": "List All Agent Bots",
					"value": "List All Agent Bots",
					"action": "List all AgentBots",
					"description": "List all agent bots available",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/api/v1/agent_bots"
						}
					}
				},
				{
					"name": "Create An Agent Bot",
					"value": "Create An Agent Bot",
					"action": "Create an Agent Bot",
					"description": "Create an agent bot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/api/v1/agent_bots"
						}
					}
				},
				{
					"name": "Get Details Of A Single Agent Bot",
					"value": "Get Details Of A Single Agent Bot",
					"action": "Get an agent bot details",
					"description": "Get the details of an agent bot",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/api/v1/agent_bots/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update An Agent Bot",
					"value": "Update An Agent Bot",
					"action": "Update an agent bot",
					"description": "Update an agent bot's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/platform/api/v1/agent_bots/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete An Agent Bot",
					"value": "Delete An Agent Bot",
					"action": "Delete an AgentBot",
					"description": "Delete an AgentBot",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/platform/api/v1/agent_bots/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/api/v1/agent_bots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"List All Agent Bots"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_platformappapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.",
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
						"Agent Bots"
					],
					"operation": [
						"List All Agent Bots"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/api/v1/agent_bots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
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
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
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
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Outgoing Url",
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
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"type": "number",
			"default": 1,
			"description": "The account ID to associate the agent bot with",
			"routing": {
				"send": {
					"property": "account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
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
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Avatar Url",
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
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_platformappapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.",
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
						"Agent Bots"
					],
					"operation": [
						"Create An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/api/v1/agent_bots/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"Get Details Of A Single Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_platformappapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.",
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
						"Agent Bots"
					],
					"operation": [
						"Get Details Of A Single Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "PATCH /platform/api/v1/agent_bots/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
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
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
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
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Outgoing Url",
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
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "account_id",
			"type": "number",
			"default": 1,
			"description": "The account ID to associate the agent bot with",
			"routing": {
				"send": {
					"property": "account_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
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
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Avatar Url",
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
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_platformappapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.",
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
						"Agent Bots"
					],
					"operation": [
						"Update An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "DELETE /platform/api/v1/agent_bots/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agent Bots"
					],
					"operation": [
						"Delete An Agent Bot"
					]
				}
			}
		},
		{
			"displayName": "Api Access Token",
			"name": "security_platformappapikey",
			"type": "string",
			"default": "",
			"description": "This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.",
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
						"Agent Bots"
					],
					"operation": [
						"Delete An Agent Bot"
					]
				}
			}
		},
];
