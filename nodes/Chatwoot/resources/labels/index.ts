import type { INodeProperties } from 'n8n-workflow';

export const labelsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					]
				}
			},
			"options": [
				{
					"name": "List All Labels",
					"value": "List All Labels",
					"action": "List all labels",
					"description": "List all labels available in the current account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels"
						}
					}
				},
				{
					"name": "Create A Label",
					"value": "Create A Label",
					"action": "Create a label",
					"description": "Create a label in the account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels"
						}
					}
				},
				{
					"name": "Get Details Of A Single Label",
					"value": "Get Details Of A Single Label",
					"action": "Get a label",
					"description": "Get the details of a label in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update A Label",
					"value": "Update A Label",
					"action": "Update a label",
					"description": "Update a label's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete A Label",
					"value": "Delete A Label",
					"action": "Delete a label",
					"description": "Delete a label from the account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/labels/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"List All Labels"
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
						"Labels"
					],
					"operation": [
						"List All Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/labels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Create A Label"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "support",
			"description": "The label title",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Create A Label"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Conversations that need support follow-up",
			"description": "A short description for the label",
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
						"Labels"
					],
					"operation": [
						"Create A Label"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "#1f93ff",
			"description": "Hex color code for the label",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Create A Label"
					]
				}
			}
		},
		{
			"displayName": "Show On Sidebar",
			"name": "show_on_sidebar",
			"type": "boolean",
			"default": true,
			"description": "Whether the label should appear in the sidebar",
			"routing": {
				"send": {
					"property": "show_on_sidebar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Create A Label"
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
						"Labels"
					],
					"operation": [
						"Create A Label"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/labels/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Get Details Of A Single Label"
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
						"Labels"
					],
					"operation": [
						"Get Details Of A Single Label"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/labels/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Update A Label"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "support",
			"description": "The label title",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Update A Label"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Conversations that need support follow-up",
			"description": "A short description for the label",
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
						"Labels"
					],
					"operation": [
						"Update A Label"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "#1f93ff",
			"description": "Hex color code for the label",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Update A Label"
					]
				}
			}
		},
		{
			"displayName": "Show On Sidebar",
			"name": "show_on_sidebar",
			"type": "boolean",
			"default": true,
			"description": "Whether the label should appear in the sidebar",
			"routing": {
				"send": {
					"property": "show_on_sidebar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Update A Label"
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
						"Labels"
					],
					"operation": [
						"Update A Label"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/labels/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Labels"
					],
					"operation": [
						"Delete A Label"
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
						"Labels"
					],
					"operation": [
						"Delete A Label"
					]
				}
			}
		},
];
