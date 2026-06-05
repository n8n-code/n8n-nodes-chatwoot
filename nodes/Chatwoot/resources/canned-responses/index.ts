import type { INodeProperties } from 'n8n-workflow';

export const cannedResponsesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Canned Response",
					"value": "Get Account Canned Response",
					"action": "List all Canned Responses in an Account",
					"description": "Get Details of Canned Responses in an Account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses"
						}
					}
				},
				{
					"name": "Add New Canned Response To Account",
					"value": "Add New Canned Response To Account",
					"action": "Add a New Canned Response",
					"description": "Add a new Canned Response to Account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses"
						}
					}
				},
				{
					"name": "Update Canned Response In Account",
					"value": "Update Canned Response In Account",
					"action": "Update Canned Response in Account",
					"description": "Update a Canned Response in Account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Canned Response From Account",
					"value": "Delete Canned Response From Account",
					"action": "Remove a Canned Response from Account",
					"description": "Remove a Canned Response from Account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/canned_responses/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/canned_responses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Get Account Canned Response"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/canned_responses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Add New Canned Response To Account"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "Hello, {{contact.name}}! Welcome to our service.",
			"description": "Message content for canned response",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Add New Canned Response To Account"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "short_code",
			"type": "string",
			"default": "welcome",
			"description": "Short Code for quick access of the canned response",
			"routing": {
				"send": {
					"property": "short_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Add New Canned Response To Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/canned_responses/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Update Canned Response In Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of the canned response to be updated.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Update Canned Response In Account"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "Hello, {{contact.name}}! Welcome to our service.",
			"description": "Message content for canned response",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Update Canned Response In Account"
					]
				}
			}
		},
		{
			"displayName": "Short Code",
			"name": "short_code",
			"type": "string",
			"default": "welcome",
			"description": "Short Code for quick access of the canned response",
			"routing": {
				"send": {
					"property": "short_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Update Canned Response In Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/canned_responses/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Delete Canned Response From Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of the canned response to be deleted",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Canned Responses"
					],
					"operation": [
						"Delete Canned Response From Account"
					]
				}
			}
		},
];
