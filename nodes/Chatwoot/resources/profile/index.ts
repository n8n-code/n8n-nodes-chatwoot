import type { INodeProperties } from 'n8n-workflow';

export const profileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					]
				}
			},
			"options": [
				{
					"name": "Fetch Profile",
					"value": "Fetch Profile",
					"action": "Fetch user profile",
					"description": "Get the user profile details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/profile"
						}
					}
				},
				{
					"name": "Update Profile",
					"value": "Update Profile",
					"action": "Update user profile",
					"description": "Update the user profile details",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/profile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Fetch Profile"
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
						"Profile"
					],
					"operation": [
						"Fetch Profile"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Profile",
			"name": "profile",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "profile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Profile"
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
						"Profile"
					],
					"operation": [
						"Update Profile"
					]
				}
			}
		},
];
