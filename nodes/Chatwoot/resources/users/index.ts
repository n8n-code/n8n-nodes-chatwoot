import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Create A User",
					"value": "Create A User",
					"action": "Create a User",
					"description": "Create a User",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/api/v1/users"
						}
					}
				},
				{
					"name": "Get Details Of A User",
					"value": "Get Details Of A User",
					"action": "Get an user details",
					"description": "Get the details of an user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update A User",
					"value": "Update A User",
					"action": "Update a user",
					"description": "Update a user's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete A User",
					"value": "Delete A User",
					"action": "Delete a User",
					"description": "Delete a User",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Sso URL Of A User",
					"value": "Get Sso URL Of A User",
					"action": "Get User SSO Link",
					"description": "Get the sso link of a user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/api/v1/users/{{$parameter[\"id\"]}}/login"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /platform/api/v1/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create A User"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Daniel",
			"description": "Name of the user",
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
						"Users"
					],
					"operation": [
						"Create A User"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "display_name",
			"type": "string",
			"default": "Dan",
			"description": "Display name of the user",
			"routing": {
				"send": {
					"property": "display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create A User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "daniel@acme.inc",
			"description": "Email of the user",
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
						"Users"
					],
					"operation": [
						"Create A User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "Password2!",
			"description": "Password must contain uppercase, lowercase letters, number and a special character",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create A User"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "Custom attributes you want to associate with the user",
			"routing": {
				"send": {
					"property": "custom_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Create A User"
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
						"Users"
					],
					"operation": [
						"Create A User"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/api/v1/users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Details Of A User"
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
						"Users"
					],
					"operation": [
						"Get Details Of A User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /platform/api/v1/users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update A User"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Daniel",
			"description": "Name of the user",
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
						"Users"
					],
					"operation": [
						"Update A User"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "display_name",
			"type": "string",
			"default": "Dan",
			"description": "Display name of the user",
			"routing": {
				"send": {
					"property": "display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update A User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "daniel@acme.inc",
			"description": "Email of the user",
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
						"Users"
					],
					"operation": [
						"Update A User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "Password2!",
			"description": "Password must contain uppercase, lowercase letters, number and a special character",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update A User"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "Custom attributes you want to associate with the user",
			"routing": {
				"send": {
					"property": "custom_attributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update A User"
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
						"Users"
					],
					"operation": [
						"Update A User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /platform/api/v1/users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete A User"
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
						"Users"
					],
					"operation": [
						"Delete A User"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/api/v1/users/{id}/login",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Sso URL Of A User"
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
						"Users"
					],
					"operation": [
						"Get Sso URL Of A User"
					]
				}
			}
		},
];
