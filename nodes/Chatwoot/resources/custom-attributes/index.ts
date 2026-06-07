import type { INodeProperties } from 'n8n-workflow';

export const customAttributesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					]
				}
			},
			"options": [
				{
					"name": "Get Account Custom Attribute",
					"value": "Get Account Custom Attribute",
					"action": "List all custom attributes in an account",
					"description": "Get details of custom attributes in an Account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions"
						}
					}
				},
				{
					"name": "Add New Custom Attribute To Account",
					"value": "Add New Custom Attribute To Account",
					"action": "Add a new custom attribute",
					"description": "Add a new custom attribute to account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions"
						}
					}
				},
				{
					"name": "Get Details Of A Single Custom Attribute",
					"value": "Get Details Of A Single Custom Attribute",
					"action": "Get a custom attribute details",
					"description": "Get the details of a custom attribute in the account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Custom Attribute In Account",
					"value": "Update Custom Attribute In Account",
					"action": "Update custom attribute in Account",
					"description": "Update a custom attribute in account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Delete Custom Attribute From Account",
					"value": "Delete Custom Attribute From Account",
					"action": "Remove a custom attribute from account",
					"description": "Remove a custom attribute from account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/custom_attribute_definitions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/custom_attribute_definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Get Account Custom Attribute"
					]
				}
			}
		},
		{
			"displayName": "Attribute Model",
			"name": "attribute_model",
			"required": true,
			"description": "conversation_attribute(0)/contact_attribute(1)",
			"default": "0",
			"type": "options",
			"options": [
				{
					"name": "0",
					"value": "0"
				},
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "attribute_model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Get Account Custom Attribute"
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
						"Custom Attributes"
					],
					"operation": [
						"Get Account Custom Attribute"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/custom_attribute_definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Display Name",
			"name": "attribute_display_name",
			"type": "string",
			"default": "Custom Attribute",
			"description": "Attribute display name",
			"routing": {
				"send": {
					"property": "attribute_display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Display Type",
			"name": "attribute_display_type",
			"type": "number",
			"default": 0,
			"description": "Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)",
			"routing": {
				"send": {
					"property": "attribute_display_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Description",
			"name": "attribute_description",
			"type": "string",
			"default": "This is a custom attribute",
			"description": "Attribute description",
			"routing": {
				"send": {
					"property": "attribute_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Key",
			"name": "attribute_key",
			"type": "string",
			"default": "custom_attribute",
			"description": "Attribute unique key value",
			"routing": {
				"send": {
					"property": "attribute_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Values",
			"name": "attribute_values",
			"type": "json",
			"default": "[\n  \"value1\",\n  \"value2\"\n]",
			"description": "Attribute values",
			"routing": {
				"send": {
					"property": "attribute_values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Model",
			"name": "attribute_model",
			"type": "number",
			"default": 0,
			"description": "Attribute type(conversation_attribute- 0, contact_attribute- 1)",
			"routing": {
				"send": {
					"property": "attribute_model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Regex Pattern",
			"name": "regex_pattern",
			"type": "string",
			"default": "^[a-zA-Z0-9]+$",
			"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
			"routing": {
				"send": {
					"property": "regex_pattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "Regex Cue",
			"name": "regex_cue",
			"type": "string",
			"default": "Please enter a valid value",
			"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
			"routing": {
				"send": {
					"property": "regex_cue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
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
						"Custom Attributes"
					],
					"operation": [
						"Add New Custom Attribute To Account"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Get Details Of A Single Custom Attribute"
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
						"Custom Attributes"
					],
					"operation": [
						"Get Details Of A Single Custom Attribute"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of the custom attribute to be updated.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Get Details Of A Single Custom Attribute"
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
						"Custom Attributes"
					],
					"operation": [
						"Get Details Of A Single Custom Attribute"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of the custom attribute to be updated.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Display Name",
			"name": "attribute_display_name",
			"type": "string",
			"default": "Custom Attribute",
			"description": "Attribute display name",
			"routing": {
				"send": {
					"property": "attribute_display_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Display Type",
			"name": "attribute_display_type",
			"type": "number",
			"default": 0,
			"description": "Attribute display type (text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7)",
			"routing": {
				"send": {
					"property": "attribute_display_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Description",
			"name": "attribute_description",
			"type": "string",
			"default": "This is a custom attribute",
			"description": "Attribute description",
			"routing": {
				"send": {
					"property": "attribute_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Key",
			"name": "attribute_key",
			"type": "string",
			"default": "custom_attribute",
			"description": "Attribute unique key value",
			"routing": {
				"send": {
					"property": "attribute_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Values",
			"name": "attribute_values",
			"type": "json",
			"default": "[\n  \"value1\",\n  \"value2\"\n]",
			"description": "Attribute values",
			"routing": {
				"send": {
					"property": "attribute_values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Attribute Model",
			"name": "attribute_model",
			"type": "number",
			"default": 0,
			"description": "Attribute type(conversation_attribute- 0, contact_attribute- 1)",
			"routing": {
				"send": {
					"property": "attribute_model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Regex Pattern",
			"name": "regex_pattern",
			"type": "string",
			"default": "^[a-zA-Z0-9]+$",
			"description": "Regex pattern (Only applicable for type- text). The regex pattern is used to validate the attribute value(s).",
			"routing": {
				"send": {
					"property": "regex_pattern",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "Regex Cue",
			"name": "regex_cue",
			"type": "string",
			"default": "Please enter a valid value",
			"description": "Regex cue message (Only applicable for type- text). The cue message is shown when the regex pattern is not matched.",
			"routing": {
				"send": {
					"property": "regex_cue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
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
						"Custom Attributes"
					],
					"operation": [
						"Update Custom Attribute In Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/accounts/{account_id}/custom_attribute_definitions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Delete Custom Attribute From Account"
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
						"Custom Attributes"
					],
					"operation": [
						"Delete Custom Attribute From Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The ID of the custom attribute to be deleted",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Custom Attributes"
					],
					"operation": [
						"Delete Custom Attribute From Account"
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
						"Custom Attributes"
					],
					"operation": [
						"Delete Custom Attribute From Account"
					]
				}
			}
		},
];
