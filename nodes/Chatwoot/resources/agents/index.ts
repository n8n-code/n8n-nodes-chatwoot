import type { INodeProperties } from 'n8n-workflow';

export const agentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Agents",
					"value": "Get Account Agents",
					"action": "List Agents in Account",
					"description": "Get Details of Agents in an Account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents"
						}
					}
				},
				{
					"name": "Add New Agent To Account",
					"value": "Add New Agent To Account",
					"action": "Add a New Agent",
					"description": "Add a new Agent to Account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents"
						}
					}
				},
				{
					"name": "Update Agent In Account",
					"value": "Update Agent In Account",
					"action": "Update Agent in Account",
					"description": "Update an Agent in Account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Agent From Account",
					"value": "Delete Agent From Account",
					"action": "Remove an Agent from Account",
					"description": "Remove an Agent from Account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/agents/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/agents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Get Account Agents"
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
						"Agents"
					],
					"operation": [
						"Get Account Agents"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/agents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "John Doe",
			"description": "Full Name of the agent",
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
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "john.doe@acme.inc",
			"description": "Email of the Agent",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "options",
			"default": "agent",
			"description": "Whether its administrator or agent",
			"options": [
				{
					"name": "Agent",
					"value": "agent"
				},
				{
					"name": "Administrator",
					"value": "administrator"
				}
			],
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
					]
				}
			}
		},
		{
			"displayName": "Availability",
			"name": "availability",
			"type": "options",
			"default": "online",
			"description": "The configured availability of the agent.",
			"options": [
				{
					"name": "Online",
					"value": "online"
				},
				{
					"name": "Busy",
					"value": "busy"
				},
				{
					"name": "Offline",
					"value": "offline"
				}
			],
			"routing": {
				"send": {
					"property": "availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
					]
				}
			}
		},
		{
			"displayName": "Auto Offline",
			"name": "auto_offline",
			"type": "boolean",
			"default": true,
			"description": "Whether the agent is automatically marked offline when they are away.",
			"routing": {
				"send": {
					"property": "auto_offline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
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
						"Agents"
					],
					"operation": [
						"Add New Agent To Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/agents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Update Agent In Account"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The ID of the agent to be updated.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Update Agent In Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "options",
			"default": "agent",
			"description": "Whether its administrator or agent",
			"options": [
				{
					"name": "Agent",
					"value": "agent"
				},
				{
					"name": "Administrator",
					"value": "administrator"
				}
			],
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Update Agent In Account"
					]
				}
			}
		},
		{
			"displayName": "Availability",
			"name": "availability",
			"type": "options",
			"default": "online",
			"description": "The configured availability of the agent.",
			"options": [
				{
					"name": "Online",
					"value": "online"
				},
				{
					"name": "Busy",
					"value": "busy"
				},
				{
					"name": "Offline",
					"value": "offline"
				}
			],
			"routing": {
				"send": {
					"property": "availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Update Agent In Account"
					]
				}
			}
		},
		{
			"displayName": "Auto Offline",
			"name": "auto_offline",
			"type": "boolean",
			"default": true,
			"description": "Whether the agent is automatically marked offline when they are away.",
			"routing": {
				"send": {
					"property": "auto_offline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Update Agent In Account"
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
						"Agents"
					],
					"operation": [
						"Update Agent In Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/agents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Delete Agent From Account"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The ID of the agent to be deleted.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Agents"
					],
					"operation": [
						"Delete Agent From Account"
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
						"Agents"
					],
					"operation": [
						"Delete Agent From Account"
					]
				}
			}
		},
];
