import type { INodeProperties } from 'n8n-workflow';

export const accountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Create An Account",
					"value": "Create An Account",
					"action": "Create an Account",
					"description": "Create an Account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/api/v1/accounts"
						}
					}
				},
				{
					"name": "Get Details Of An Account",
					"value": "Get Details Of An Account",
					"action": "Get an account details",
					"description": "Get the details of an account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Update An Account",
					"value": "Update An Account",
					"action": "Update an account",
					"description": "Update an account's attributes",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				},
				{
					"name": "Delete An Account",
					"value": "Delete An Account",
					"action": "Delete an Account",
					"description": "Delete an Account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/platform/api/v1/accounts/{{$parameter[\"account_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /platform/api/v1/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Account",
			"description": "Name of the account",
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
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "en",
			"description": "The locale of the account",
			"routing": {
				"send": {
					"property": "locale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.com",
			"description": "The domain of the account",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Support Email",
			"name": "support_email",
			"type": "string",
			"default": "support@example.com",
			"description": "The support email of the account",
			"routing": {
				"send": {
					"property": "support_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the account",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Suspended",
					"value": "suspended"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Limits",
			"name": "limits",
			"type": "json",
			"default": "{}",
			"description": "The limits of the account",
			"routing": {
				"send": {
					"property": "limits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "The custom attributes of the account",
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
						"Accounts"
					],
					"operation": [
						"Create An Account"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/api/v1/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Details Of An Account"
					]
				}
			}
		},
		{
			"displayName": "PATCH /platform/api/v1/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "My Account",
			"description": "Name of the account",
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
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "en",
			"description": "The locale of the account",
			"routing": {
				"send": {
					"property": "locale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Domain",
			"name": "domain",
			"type": "string",
			"default": "example.com",
			"description": "The domain of the account",
			"routing": {
				"send": {
					"property": "domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Support Email",
			"name": "support_email",
			"type": "string",
			"default": "support@example.com",
			"description": "The support email of the account",
			"routing": {
				"send": {
					"property": "support_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "The status of the account",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Suspended",
					"value": "suspended"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Limits",
			"name": "limits",
			"type": "json",
			"default": "{}",
			"description": "The limits of the account",
			"routing": {
				"send": {
					"property": "limits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "Custom Attributes",
			"name": "custom_attributes",
			"type": "json",
			"default": "{}",
			"description": "The custom attributes of the account",
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
						"Accounts"
					],
					"operation": [
						"Update An Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /platform/api/v1/accounts/{account_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Delete An Account"
					]
				}
			}
		},
];
