export function about_usFields() {
  return [
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "intro",
      label: "Intro",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "object",
      name: "team",
      label: "Team",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "object",
          name: "people",
          label: "People",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "role",
              label: "Role",
              required: true,
            },
            {
              type: "image",
              name: "thumbnail",
              label: "Thumbnail",
              ui: {
                format(value) {
                    if (!value) return '';
                    return value.includes("../../../static") ? value.replace("../../../static", '') : value;
                },
                parse(value) {
                  if (!value) return ''
                  return value.includes("../../../static") ? value : "../../../static" + value;
                },
              }
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "collaboration",
      label: "Collaboration",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "companies",
          label: "Companies",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "image",
              name: "thumbnail",
              label: "Thumbnail",
              ui: {
                format(value) {
                    if (!value) return '';
                    return value.includes("../../../static") ? value.replace("../../../static", '') : value;
                },
                parse(value) {
                  if (!value) return ''
                  return value.includes("../../../static") ? value : "../../../static" + value;
                },
              }
            },
          ],
        },
      ],
    },
  ]
}
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
      ui: {
        format(value) {
            if (!value) return '';
            return value.includes("../../../static") ? value.replace("../../../static", '') : value;
        },
        parse(value) {
          if (!value) return ''
          return value.includes("../../../static") ? value : "../../../static" + value;
        },
      }
    },
    {
      type: "datetime",
      name: "date",
      label: "Published at",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      required: true,
    },
  ]
}
export function call_to_action_blockFields() {
  return [
    {
      type: "string",
      name: "button",
      label: "Button",
      required: true,
    },
  ]
}
export function default_pageFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "string",
      name: "template",
      label: "template",
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      required: true,
    },
  ]
}
export function domestic___business_helpFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      required: true,
    },
    {
      type: "object",
      name: "navigation",
      label: "Navigation",
      list: true,
      fields: [
        {
          type: "string",
          name: "anchor",
          label: "Anchor",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
          required: true,
        },
        {
          type: "boolean",
          name: "isActive",
          label: "Active",
        },
      ],
    },
    {
      type: "object",
      name: "note",
      label: "Sticky note",
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
          ui: {
            format(value) {
                if (!value) return '';
                return value.includes("../../../static") ? value.replace("../../../static", '') : value;
            },
            parse(value) {
              if (!value) return ''
              return value.includes("../../../static") ? value : "../../../static" + value;
            },
          }
        },
      ],
    },
    {
      type: "object",
      name: "banner",
      label: "Banner",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
          ui: {
            format(value) {
                if (!value) return '';
                return value.includes("../../../static") ? value.replace("../../../static", '') : value;
            },
            parse(value) {
              if (!value) return ''
              return value.includes("../../../static") ? value : "../../../static" + value;
            },
        }
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
        },
      ],
    },
  ]
}
export function business_helpFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      required: true,
    },
    {
      type: "object",
      name: "navigation",
      label: "Navigation",
      list: true,
      fields: [
        {
          type: "string",
          name: "anchor",
          label: "Anchor",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
          required: true,
        },
        {
          type: "boolean",
          name: "isActive",
          label: "Active",
        },
      ],
    },
    {
      type: "object",
      name: "note",
      label: "Sticky note",
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
          ui: {
            format(value) {
                if (!value) return '';
                return value.includes("../../../static") ? value.replace("../../../static", '') : value;
            },
            parse(value) {
              if (!value) return ''
              return value.includes("../../../static") ? value : "../../../static" + value;
            },
          }
        },
      ],
    },
  ]
}
export function faq_pageFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "Seo",
      fields: [...seoFields()],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "object",
      name: "questions",
      label: "Questions",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
          required: true,
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
  ]
}
export function homepageFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "object",
      name: "lead",
      label: "Lead",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
          ui: {
            format(value) {
                if (!value) return '';
                return value.includes("../../../../../../static") ? value.replace("../../../../../../static", '') : value;
            },
            parse(value) {
              if (!value) return ''
              return value.includes("../../../../../../static") ? value : "../../../../../../static" + value;
            },
          }
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
        {
          type: "string",
          name: "lookingForWorker",
          label: "Looking for worker",
        },
        {
          type: "string",
          name: "lookingForClient",
          label: "Looking for client",
        },
      ],
    },
    {
      type: "object",
      name: "history",
      label: "History",
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "usp",
      label: "Unique selling proposition",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "propositions",
          label: "Propositions",
          list: true,
          fields: [
            {
              type: "image",
              name: "icon",
              label: "Icon",
              ui: {
                format(value) {
                    if (!value) return '';
                    return value.includes("../../../../../../static") ? value.replace("../../../../../../static", '') : value;
                },
                parse(value) {
                  if (!value) return ''
                  return value.includes("../../../../../../static") ? value : "../../../../../../static" + value;
                },
              }
            },
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "banner",
      label: "Banner",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
          ui: {
            format(value) {
                if (!value) return '';
                return value.includes("../../../../../../static") ? value.replace("../../../../../../static", '') : value;
            },
            parse(value) {
              if (!value) return ''
              return value.includes("../../../../../../static") ? value : "../../../../../../static" + value;
            },
          }
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
        },
      ],
    },
    {
      type: "object",
      name: "introduction",
      label: "Introduction",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
          ui: {
            format(value) {
                if (!value) return '';
                return value.includes("../../../../../../static") ? value.replace("../../../../../../static", '') : value;
            },
            parse(value) {
              if (!value) return ''
              return value.includes("../../../../../../static") ? value : "../../../../../../static" + value;
            },
          }
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "ourTeam",
      label: "Team",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "members",
          label: "Members",
          list: true,
          fields: [
            {
              type: "image",
              name: "picture",
              label: "Picture",
              ui: {
                format(value) {
                    if (!value) return '';
                    return value.includes("../../../../../../static") ? value.replace("../../../../../../static", '') : value;
                },
                parse(value) {
                  if (!value) return ''
                  return value.includes("../../../../../../static") ? value : "../../../../../../static" + value;
                },
              }
            },
            {
              type: "string",
              name: "alt",
              label: "Alt",
              required: true,
            },
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "role",
              label: "Role",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "feedback",
      label: "Feedback",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "string",
          name: "score",
          label: "Score",
          required: true,
        },
        {
          type: "object",
          name: "reviews",
          label: "Reviews",
          list: true,
          fields: [
            {
              type: "string",
              name: "author",
              label: "Author",
              required: true,
            },
            {
              type: "string",
              name: "score",
              label: "Score",
              required: true,
            },
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "footnote",
          label: "Footnote",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "readMore",
          label: "Read more",
        },
        {
          type: "string",
          name: "feedbackCompanyUrl",
          label: "Feedback Company URL",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
        },
      ],
    },
    {
      type: "object",
      name: "faq",
      label: "FAQ",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "questions",
          label: "Questions",
          list: true,
          fields: [
            {
              type: "string",
              name: "question",
              label: "Question",
              required: true,
            },
            {
              type: "string",
              name: "answer",
              label: "Answer",
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "textblock",
      label: "Textblock",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "recentPosts",
      label: "Recent posts",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "string",
          name: "button",
          label: "Button",
        },
      ],
    },
  ]
}

export function homepageFieldsForPage() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "object",
      name: "lead",
      label: "Lead",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
        {
          type: "string",
          name: "lookingForWorker",
          label: "Looking for worker",
        },
        {
          type: "string",
          name: "lookingForClient",
          label: "Looking for client",
        },
      ],
    },
    {
      type: "object",
      name: "history",
      label: "History",
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "usp",
      label: "Unique selling proposition",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "propositions",
          label: "Propositions",
          list: true,
          fields: [
            {
              type: "image",
              name: "icon",
              label: "Icon",
            },
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "banner",
      label: "Banner",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
        },
      ],
    },
    {
      type: "object",
      name: "introduction",
      label: "Introduction",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "ourTeam",
      label: "Team",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "members",
          label: "Members",
          list: true,
          fields: [
            {
              type: "image",
              name: "picture",
              label: "Picture",
            },
            {
              type: "string",
              name: "alt",
              label: "Alt",
              required: true,
            },
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "role",
              label: "Role",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "feedback",
      label: "Feedback",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "string",
          name: "score",
          label: "Score",
          required: true,
        },
        {
          type: "object",
          name: "reviews",
          label: "Reviews",
          list: true,
          fields: [
            {
              type: "string",
              name: "author",
              label: "Author",
              required: true,
            },
            {
              type: "string",
              name: "score",
              label: "Score",
              required: true,
            },
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "footnote",
          label: "Footnote",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "readMore",
          label: "Read more",
        },
        {
          type: "string",
          name: "feedbackCompanyUrl",
          label: "Feedback Company URL",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
        },
      ],
    },
    {
      type: "object",
      name: "faq",
      label: "FAQ",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "object",
          name: "questions",
          label: "Questions",
          list: true,
          fields: [
            {
              type: "string",
              name: "question",
              label: "Question",
              required: true,
            },
            {
              type: "string",
              name: "answer",
              label: "Answer",
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "button",
          label: "Button",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "textblock",
      label: "Textblock",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "recentPosts",
      label: "Recent posts",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "string",
          name: "button",
          label: "Button",
        },
      ],
    },
  ]
}

export function navbarFields() {
  return [
    {
      type: "object",
      name: "navigation",
      label: "Navigation",
      list: true,
      fields: [
        {
          type: "string",
          name: "anchor",
          label: "Anchor",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url Link",
        },
      ],
    },
  ]
}
export function seoFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Meta title",
    },
    {
      type: "string",
      name: "description",
      label: "Meta description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "keywords",
      label: "Meta keywords",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "lang",
      label: "Lang",
    },
  ]
}
export function servicesFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      required: true,
    },
    {
      type: "string",
      name: "intro",
      label: "Intro",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "object",
      name: "faq",
      label: "FAQ",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "object",
          name: "categories",
          label: "Categories",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: {
                component: "textarea",
              },
              required: true,
            },
            {
              type: "image",
              name: "icon",
              label: "Icon",
              ui: {
                format(value) {
                    if (!value) return '';
                    return value.includes("../../../static") ? value.replace("../../../static", '') : value;
                },
                parse(value) {
                  if (!value) return ''
                  return value.includes("../../../static") ? value : "../../../static" + value;
                },
              }
            },
            {
              type: "string",
              name: "url",
              label: "Url Link",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "communication",
      label: "Communication",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "object",
          name: "methods",
          label: "Methods",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
            },
            {
              type: "string",
              name: "fontawesome",
              label: "Fontawesome icon",
              options: [
                "fas fa-phone",
                "fas fa-envelope",
                "fas fa-phone",
                "fab fa-facebook-messenger",
                "fas fa-comments",
              ],
              required: true,
            },
          ],
        },
        {
          type: "string",
          name: "footnote",
          label: "Footnote",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "location",
      label: "Location",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
          required: true,
        },
        {
          type: "string",
          name: "address",
          label: "Address",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Google maps link",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "overview",
      label: "Overview",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "object",
          name: "correspondence",
          label: "Correspondence",
          fields: [
            {
              type: "string",
              name: "headline",
              label: "Headline",
            },
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          name: "company",
          label: "Company",
          fields: [
            {
              type: "string",
              name: "headline",
              label: "Headline",
            },
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          name: "bank",
          label: "Bank",
          fields: [
            {
              type: "string",
              name: "headline",
              label: "Headline",
            },
            {
              type: "string",
              name: "content",
              label: "Content",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ]
}
export function sitemapFields() {
  return [
    {
      type: "string",
      name: "path",
      label: "Path",
      required: true,
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      required: true,
    },
    {
      type: "object",
      name: "seo",
      label: "Seo",
      fields: [...seoFields()],
    },
    {
      type: "object",
      name: "sections",
      label: "Sections",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: ["standard", "blog"],
          required: true,
        },
        {
          type: "object",
          name: "items",
          label: "Items",
          list: true,
          fields: [
            {
              type: "string",
              name: "anchor",
              label: "Anchor",
              required: true,
            },
            {
              type: "string",
              name: "url",
              label: "Url Link",
              required: true,
            },
          ],
        },
      ],
    },
  ]
}
