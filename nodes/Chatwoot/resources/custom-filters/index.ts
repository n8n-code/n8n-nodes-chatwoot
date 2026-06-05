import type { INodeProperties } from 'n8n-workflow';

export const customFiltersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					]
				}
			},
			"options": [
				{
					"name": "List All Filters",
					"value": "List All Filters",
					"action": "List all custom filters",
					"description": "List all custom filters in a category of a user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters"
						}
					}
				},
				{
					"name": "Create A Custom Filter",
					"value": "Create A Custom Filter",
					"action": "Create a custom filter",
					"description": "Create a custom filter in the account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters"
						}
					}
				},
				{
					"name": "Get Details Of A Single Custom Filter",
					"value": "Get Details Of A Single Custom Filter",
					"action": "Get a custom filter details",
					"description": "Get the details of a custom filter in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters/{{$parameter[\"custom_filter_id\"]}}"
						}
					}
				},
				{
					"name": "Update A Custom Filter",
					"value": "Update A Custom Filter",
					"action": "Update a custom filter",
					"description": "Update a custom filter's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters/{{$parameter[\"custom_filter_id\"]}}"
						}
					}
				},
				{
					"name": "Delete A Custom Filter",
					"value": "Delete A Custom Filter",
					"action": "Delete a custom filter",
					"description": "Delete a custom filter from the account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_filters/{{$parameter[\"custom_filter_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/custom_filters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"List All Filters"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/custom_filters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Create A Custom Filter"
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
						"Custom Filters"
					],
					"operation": [
						"Create A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Custom Filter",
			"description": "The name of the custom filter",
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
						"Custom Filters"
					],
					"operation": [
						"Create A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "conversation",
			"description": "The description about the custom filter",
			"options": [
				{
					"name": "Conversation",
					"value": "conversation"
				},
				{
					"name": "Contact",
					"value": "contact"
				},
				{
					"name": "Report",
					"value": "report"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Create A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{}",
			"description": "A query that needs to be saved as a custom filter",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Create A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Get Details Of A Single Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Update A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Custom Filter",
			"description": "The name of the custom filter",
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
						"Custom Filters"
					],
					"operation": [
						"Update A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "conversation",
			"description": "The description about the custom filter",
			"options": [
				{
					"name": "Conversation",
					"value": "conversation"
				},
				{
					"name": "Contact",
					"value": "contact"
				},
				{
					"name": "Report",
					"value": "report"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Update A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{}",
			"description": "A query that needs to be saved as a custom filter",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Update A Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/custom_filters/{custom_filter_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Filters"
					],
					"operation": [
						"Delete A Custom Filter"
					]
				}
			}
		},
];
