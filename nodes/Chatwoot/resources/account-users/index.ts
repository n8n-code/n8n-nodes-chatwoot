import type { INodeProperties } from 'n8n-workflow';

export const accountUsersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Users"
					]
				}
			},
			"options": [
				{
					"name": "List All Account Users",
					"value": "List All Account Users",
					"action": "List all Account Users",
					"description": "List all account users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}/account_users"
						}
					}
				},
				{
					"name": "Create An Account User",
					"value": "Create An Account User",
					"action": "Create an Account User",
					"description": "Create an Account User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}/account_users"
						}
					}
				},
				{
					"name": "Delete An Account User",
					"value": "Delete An Account User",
					"action": "Delete an Account User",
					"description": "Delete an Account User",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}/account_users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/api/v1/accounts/{account_id}/account_users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Users"
					],
					"operation": [
						"List All Account Users"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Account Users"
					],
					"operation": [
						"List All Account Users"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/api/v1/accounts/{account_id}/account_users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Users"
					],
					"operation": [
						"Create An Account User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User ID",
			"name": "user_id",
			"type": "number",
			"default": 1,
			"description": "The ID of the user",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Users"
					],
					"operation": [
						"Create An Account User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "string",
			"default": "administrator",
			"description": "whether user is an administrator or agent",
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
						"Account Users"
					],
					"operation": [
						"Create An Account User"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Account Users"
					],
					"operation": [
						"Create An Account User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /platform/api/v1/accounts/{account_id}/account_users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Users"
					],
					"operation": [
						"Delete An Account User"
					]
				}
			}
		},
		{
			"displayName": "API Access Token",
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
						"Account Users"
					],
					"operation": [
						"Delete An Account User"
					]
				}
			}
		},
];
