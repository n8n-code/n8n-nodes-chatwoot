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
];
