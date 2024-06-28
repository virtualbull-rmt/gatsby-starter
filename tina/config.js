import { defineConfig } from "tinacms";
import { about_usFields } from "./templates"
import { blog_postFields } from "./templates"
import { call_to_action_blockFields } from "./templates"
import { default_pageFields } from "./templates"
import { domestic___business_helpFields } from "./templates"
import { business_helpFields } from "./templates"
import { faq_pageFields } from "./templates"
import { homepageFields } from "./templates"
import { homepageFieldsForPage } from "./templates"
import { navbarFields } from "./templates"
import { seoFields } from "./templates"
import { servicesFields } from "./templates"
import { sitemapFields } from "./templates"

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,
    client: { skip: true },
    build: {
        outputFolder: "admin",
        publicFolder: "static",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "static",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [{
                format: "md",
                label: "Client",
                name: "client",
                path: "src/content/pages/homepage/client",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "index",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "icon",
                                        label: "Icon",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "picture",
                                        label: "Picture",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                                label: "Link",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "object",
                        name: "textblock",
                        label: "Textblock",
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "PGB",
                name: "pgb",
                path: "src/content/pages/homepage/client",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "pgb",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "icon",
                                        label: "Icon",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "picture",
                                        label: "Picture",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "Thuiszorg",
                name: "thuiszorg",
                path: "src/content/pages/homepage/client",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "thuiszorg",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "icon",
                                        label: "Icon",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "picture",
                                        label: "Picture",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                                label: "Link",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "object",
                        name: "textblock",
                        label: "Textblock",
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "Witte werkster",
                name: "witte_werkster",
                path: "src/content/pages/homepage/client",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "witte-werkster",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "icon",
                                        label: "Icon",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "picture",
                                        label: "Picture",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                                label: "Link",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "object",
                        name: "textblock",
                        label: "Textblock",
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "WMO",
                name: "wmo",
                path: "src/content/pages/homepage/client",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "wmo",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "icon",
                                        label: "Icon",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "picture",
                                        label: "Picture",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                                label: "Link",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "object",
                        name: "textblock",
                        label: "Textblock",
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "Worker",
                name: "worker",
                path: "src/content/pages/homepage/worker",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "index",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "icon",
                                        label: "Icon",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                        return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                    },
                                    parse(value) {
                                      if (!value) return ''
                                      return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
                                        type: "image",
                                        name: "picture",
                                        label: "Picture",
                                        ui: {
                                            format(value) {
                                                if (!value) return '';
                                                return value.includes("../../../../../static") ? value.replace("../../../../../static", '') : value;
                                            },
                                            parse(value) {
                                              if (!value) return ''
                                              return value.includes("../../../../../static") ? value : "../../../../../static" + value;
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
                        fields: [{
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
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                                label: "Link",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "object",
                        name: "textblock",
                        label: "Textblock",
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "Client city pages",
                name: "client_city_pages",
                path: "src/content/pages/homepage/client/locations",
                match: {
                    include: "**/*",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
                    {
                        type: "string",
                        name: "city_name",
                        label: "City Name",
                    },
                    ...homepageFields(),
                ],
            },
            {
                format: "md",
                label: "Worker city pages",
                name: "worker_city_pages",
                path: "src/content/pages/homepage/worker/locations",
                match: {
                    include: "**/*",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
                    {
                        type: "string",
                        name: "city_name",
                        label: "City Name",
                    },
                    ...homepageFields(),
                ],
            },
            {
                format: "md",
                label: "Domestic help",
                name: "domestic_help",
                path: "src/content/pages",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "domestic-help",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "Business help",
                name: "business_help",
                path: "src/content/pages",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "business-help",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
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
                        fields: [{
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
                ],
            },
            {
                format: "md",
                label: "About us",
                name: "about_us",
                path: "src/content/pages",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "about_us",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
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
                        fields: [{
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
                                defaultItem: () => {
                                    return {
                                        name: "Member name",
                                        role: "Member role",
                                        image: null,
                                    }
                                },
                                fields: [{
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
                        fields: [{
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
                                fields: [{
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
                                                if (!value) return '';
                                                return value.includes("../../../static") ? value : "../../../static" + value;
                                            },
                                        }
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                format: "md",
                label: "Services",
                name: "services",
                path: "src/content/pages",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "services",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                        fields: [{
                                type: "string",
                                name: "headline",
                                label: "Headline",
                            },
                            {
                                type: "object",
                                name: "categories",
                                label: "Categories",
                                list: true,
                                fields: [{
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
                        fields: [{
                                type: "string",
                                name: "headline",
                                label: "Headline",
                            },
                            {
                                type: "object",
                                name: "methods",
                                label: "Methods",
                                list: true,
                                fields: [{
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
                        fields: [{
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
                        fields: [{
                                type: "string",
                                name: "headline",
                                label: "Headline",
                            },
                            {
                                type: "object",
                                name: "correspondence",
                                label: "Correspondence",
                                fields: [{
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
                                fields: [{
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
                                fields: [{
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
                ],
            },
            {
                format: "md",
                label: "Terms and conditions",
                name: "terms_and_conditions",
                path: "src/content/pages",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "conditions",
                },
                fields: [{
                    type: "rich-text",
                    name: "body",
                    label: "Body of Document",
                    description: "This is the markdown body",
                    isBody: true,
                }, ],
            },
            {
                format: "md",
                label: "FAQ",
                name: "faq",
                path: "src/content/pages/faq",
                match: {
                    include: "**/*",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
                    ...faq_pageFields(),
                ],
            },
            {
                format: "md",
                label: "Sitemap",
                name: "sitemap",
                path: "src/content/pages",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                match: {
                    include: "sitemap",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
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
                ],
            },
            {
                format: "md",
                label: "Blog",
                name: "blog",
                path: "src/content/blog",
                match: {
                    include: "**/*",
                },
                fields: [{
                        type: "rich-text",
                        name: "body",
                        label: "Body of Document",
                        description: "This is the markdown body",
                        isBody: true,
                    },
                    ...blog_postFields(),
                ],
            },
            {
                format: "md",
                label: "Other pages",
                name: "other_pages",
                path: "src/content/pages",
                match: {
                    include: "*",
                },
                templates: [{
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...default_pageFields(),
                        ],
                        label: "default-page",
                        name: "default_page",
                    },
                    {
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...homepageFieldsForPage(),
                        ],
                        label: "homepage",
                        name: "homepage",
                    },
                    {
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...domestic___business_helpFields(),
                        ],
                        label: "domestic-help",
                        name: "domestic_help",
                    },
                    {
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...business_helpFields(),
                        ],
                        label: "business-help",
                        name: "business_help",
                    },
                    {
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...about_usFields(),
                        ],
                        label: "about-us",
                        name: "about_us",
                    },
                    {
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...servicesFields(),
                        ],
                        label: "services",
                        name: "services",
                    },
                    {
                        fields: [{
                                type: "rich-text",
                                name: "body",
                                label: "Body of Document",
                                description: "This is the markdown body",
                                isBody: true,
                            },
                            ...sitemapFields(),
                        ],
                        label: "sitemap",
                        name: "sitemap",
                    },
                ],
            },
            {
                format: "yaml",
                label: "Components",
                name: "components",
                path: "src/content/components",
                match: {
                    include: "**/*",
                },
                fields: [{
                    type: "rich-text",
                    name: "body",
                    label: "Body of Document",
                    description: "This is the markdown body",
                    isBody: true,
                }, ],
                ui: {
                    allowedActions: {
                        create: false,
                    },
                },
            },
        ],
    },
});