import type { INodeProperties } from 'n8n-workflow';

export const helpCenterDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					]
				}
			},
			"options": [
				{
					"name": "Add New Portal To Account",
					"value": "Add New Portal To Account",
					"action": "Add a new portal",
					"description": "Add a new portal to account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/portals"
						}
					}
				},
				{
					"name": "Get Portal",
					"value": "Get Portal",
					"action": "List all portals in an account",
					"description": "Get details of portals in an Account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/portals"
						}
					}
				},
				{
					"name": "Update Portal To Account",
					"value": "Update Portal To Account",
					"action": "Update a portal",
					"description": "Update a portal to account",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/portals/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Add New Category To Account",
					"value": "Add New Category To Account",
					"action": "Add a new category",
					"description": "Add a new category to portal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/portals/{{$parameter[\"id\"]}}/categories"
						}
					}
				},
				{
					"name": "Add New Article To Account",
					"value": "Add New Article To Account",
					"action": "Add a new article",
					"description": "Add a new article to portal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/accounts/{{$parameter[\"account_id\"]}}/portals/{{$parameter[\"id\"]}}/articles"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/portals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "#FFFFFF",
			"description": "Header color for help-center in hex format",
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
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Custom Domain",
			"name": "custom_domain",
			"type": "string",
			"default": "chatwoot.help",
			"description": "Custom domain to display help center.",
			"routing": {
				"send": {
					"property": "custom_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Header Text",
			"name": "header_text",
			"type": "string",
			"default": "Handbook",
			"description": "Help center header",
			"routing": {
				"send": {
					"property": "header_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Homepage Link",
			"name": "homepage_link",
			"type": "string",
			"default": "https://www.chatwoot.com/",
			"description": "link to main dashboard",
			"routing": {
				"send": {
					"property": "homepage_link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Handbook",
			"description": "Name for the portal",
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
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Page Title",
			"name": "page_title",
			"type": "string",
			"default": "Handbook",
			"description": "Page title for the portal",
			"routing": {
				"send": {
					"property": "page_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "handbook",
			"description": "Slug for the portal to display in link",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Archived",
			"name": "archived",
			"type": "boolean",
			"default": false,
			"description": "Status to check if portal is live",
			"routing": {
				"send": {
					"property": "archived",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"type": "json",
			"default": "{\n  \"allowed_locales\": [\n    \"en\",\n    \"es\"\n  ],\n  \"default_locale\": \"en\"\n}",
			"description": "Configuration about supporting locales",
			"routing": {
				"send": {
					"property": "config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
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
						"Help Center"
					],
					"operation": [
						"Add New Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/accounts/{account_id}/portals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Get Portal"
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
						"Help Center"
					],
					"operation": [
						"Get Portal"
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
						"Help Center"
					],
					"operation": [
						"Get Portal"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/accounts/{account_id}/portals/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
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
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The slug identifier of the portal",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "#FFFFFF",
			"description": "Header color for help-center in hex format",
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
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Custom Domain",
			"name": "custom_domain",
			"type": "string",
			"default": "chatwoot.help",
			"description": "Custom domain to display help center.",
			"routing": {
				"send": {
					"property": "custom_domain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Header Text",
			"name": "header_text",
			"type": "string",
			"default": "Handbook",
			"description": "Help center header",
			"routing": {
				"send": {
					"property": "header_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Homepage Link",
			"name": "homepage_link",
			"type": "string",
			"default": "https://www.chatwoot.com/",
			"description": "link to main dashboard",
			"routing": {
				"send": {
					"property": "homepage_link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Handbook",
			"description": "Name for the portal",
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
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Page Title",
			"name": "page_title",
			"type": "string",
			"default": "Handbook",
			"description": "Page title for the portal",
			"routing": {
				"send": {
					"property": "page_title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "handbook",
			"description": "Slug for the portal to display in link",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Archived",
			"name": "archived",
			"type": "boolean",
			"default": false,
			"description": "Status to check if portal is live",
			"routing": {
				"send": {
					"property": "archived",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"type": "json",
			"default": "{\n  \"allowed_locales\": [\n    \"en\",\n    \"es\"\n  ],\n  \"default_locale\": \"en\"\n}",
			"description": "Configuration about supporting locales",
			"routing": {
				"send": {
					"property": "config",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
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
						"Help Center"
					],
					"operation": [
						"Update Portal To Account"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/portals/{id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Category Name",
			"description": "The name of the category",
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
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Category description",
			"description": "A description for the category",
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
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "position",
			"type": "number",
			"default": 1,
			"description": "Category position in the portal list to sort",
			"routing": {
				"send": {
					"property": "position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "category-name",
			"description": "The category slug used in the URL",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "en",
			"description": "The locale of the category",
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
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Icon",
			"name": "icon",
			"type": "string",
			"default": "📚",
			"description": "The icon of the category as a string (emoji)",
			"routing": {
				"send": {
					"property": "icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Parent Category Id",
			"name": "parent_category_id",
			"type": "number",
			"default": 1,
			"description": "To define parent category, e.g product documentation has multiple level features in sales category or in engineering category.",
			"routing": {
				"send": {
					"property": "parent_category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "Associated Category Id",
			"name": "associated_category_id",
			"type": "number",
			"default": 2,
			"description": "To associate similar categories to each other, e.g same category of product documentation in different languages",
			"routing": {
				"send": {
					"property": "associated_category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
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
						"Help Center"
					],
					"operation": [
						"Add New Category To Account"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/accounts/{account_id}/portals/{id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "Article Title",
			"description": "The title of the article",
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
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "article-title",
			"description": "The slug of the article",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "position",
			"type": "number",
			"default": 1,
			"description": "article position in category",
			"routing": {
				"send": {
					"property": "position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "This is the content of the article",
			"description": "The text content.",
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
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "This is the description of the article",
			"description": "The description of the article",
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
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "category_id",
			"type": "number",
			"default": 1,
			"description": "The category id of the article",
			"routing": {
				"send": {
					"property": "category_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Author Id",
			"name": "author_id",
			"type": "number",
			"default": 1,
			"description": "The author agent id of the article",
			"routing": {
				"send": {
					"property": "author_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Associated Article Id",
			"name": "associated_article_id",
			"type": "number",
			"default": 2,
			"description": "To associate similar articles to each other, e.g to provide the link for the reference.",
			"routing": {
				"send": {
					"property": "associated_article_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "number",
			"default": 1,
			"description": "The status of the article. 0 for draft, 1 for published, 2 for archived",
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
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "en",
			"description": "The locale of the article",
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
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
		{
			"displayName": "Meta",
			"name": "meta",
			"type": "json",
			"default": "{\n  \"tags\": [\n    \"article_name\"\n  ],\n  \"title\": \"article title\",\n  \"description\": \"article description\"\n}",
			"description": "Use for search",
			"routing": {
				"send": {
					"property": "meta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
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
						"Help Center"
					],
					"operation": [
						"Add New Article To Account"
					]
				}
			}
		},
];
