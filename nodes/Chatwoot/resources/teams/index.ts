import type { INodeProperties } from 'n8n-workflow';

export const teamsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					]
				}
			},
			"options": [
				{
					"name": "List All Teams",
					"value": "List All Teams",
					"action": "List all teams",
					"description": "List all teams available in the current account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams"
						}
					}
				},
				{
					"name": "Create A Team",
					"value": "Create A Team",
					"action": "Create a team",
					"description": "Create a team in the account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams"
						}
					}
				},
				{
					"name": "Get Details Of A Single Team",
					"value": "Get Details Of A Single Team",
					"action": "Get a team details",
					"description": "Get the details of a team in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
						}
					}
				},
				{
					"name": "Update A Team",
					"value": "Update A Team",
					"action": "Update a team",
					"description": "Update a team's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
						}
					}
				},
				{
					"name": "Delete A Team",
					"value": "Delete A Team",
					"action": "Delete a team",
					"description": "Delete a team from the account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}"
						}
					}
				},
				{
					"name": "Get Team Members",
					"value": "Get Team Members",
					"action": "List Agents in Team",
					"description": "Get Details of Agents in an Team",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
						}
					}
				},
				{
					"name": "Add New Agent To Team",
					"value": "Add New Agent To Team",
					"action": "Add a New Agent",
					"description": "Add a new Agent to Team",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
						}
					}
				},
				{
					"name": "Update Agents In Team",
					"value": "Update Agents In Team",
					"action": "Update Agents in Team",
					"description": "All agents except the one passed in params will be removed",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
						}
					}
				},
				{
					"name": "Delete Agent In Team",
					"value": "Delete Agent In Team",
					"action": "Remove an Agent from Team",
					"description": "Remove an Agent from Team",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/teams/{{$parameter[\"team_id\"]}}/team_members"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/teams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"List All Teams"
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
						"Teams"
					],
					"operation": [
						"List All Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/teams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Create A Team"
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
						"Teams"
					],
					"operation": [
						"Create A Team"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Support Team",
			"description": "The name of the team",
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
						"Teams"
					],
					"operation": [
						"Create A Team"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This is a team of support agents",
			"description": "The description of the team",
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
						"Teams"
					],
					"operation": [
						"Create A Team"
					]
				}
			}
		},
		{
			"displayName": "Allow Auto Assign",
			"name": "allow_auto_assign",
			"type": "boolean",
			"default": true,
			"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
			"routing": {
				"send": {
					"property": "allow_auto_assign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Create A Team"
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
						"Teams"
					],
					"operation": [
						"Create A Team"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/teams/{team_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Get Details Of A Single Team"
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
						"Teams"
					],
					"operation": [
						"Get Details Of A Single Team"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/teams/{team_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Update A Team"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Support Team",
			"description": "The name of the team",
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
						"Teams"
					],
					"operation": [
						"Update A Team"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This is a team of support agents",
			"description": "The description of the team",
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
						"Teams"
					],
					"operation": [
						"Update A Team"
					]
				}
			}
		},
		{
			"displayName": "Allow Auto Assign",
			"name": "allow_auto_assign",
			"type": "boolean",
			"default": true,
			"description": "If this setting is turned on, the system would automatically assign the conversation to an agent in the team while assigning the conversation to a team",
			"routing": {
				"send": {
					"property": "allow_auto_assign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Update A Team"
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
						"Teams"
					],
					"operation": [
						"Update A Team"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/teams/{team_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Delete A Team"
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
						"Teams"
					],
					"operation": [
						"Delete A Team"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Get Team Members"
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
						"Teams"
					],
					"operation": [
						"Get Team Members"
					]
				}
			}
		},
		{
			"displayName": "Team Id",
			"name": "team_id",
			"required": true,
			"description": "The ID of the team to be updated",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Get Team Members"
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
						"Teams"
					],
					"operation": [
						"Get Team Members"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Add New Agent To Team"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  1\n]",
			"description": "IDs of users to be added to the team",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Add New Agent To Team"
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
						"Teams"
					],
					"operation": [
						"Add New Agent To Team"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Update Agents In Team"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  1\n]",
			"description": "IDs of users to be added to the team",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Update Agents In Team"
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
						"Teams"
					],
					"operation": [
						"Update Agents In Team"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/teams/{team_id}/team_members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Delete Agent In Team"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Ids",
			"name": "user_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "IDs of users to be deleted from the team",
			"routing": {
				"send": {
					"property": "user_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Teams"
					],
					"operation": [
						"Delete Agent In Team"
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
						"Teams"
					],
					"operation": [
						"Delete Agent In Team"
					]
				}
			}
		},
];
