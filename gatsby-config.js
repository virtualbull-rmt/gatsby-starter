/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const process = require("process")
let activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: `http://homeworks.nl`,
        lang: "nl-NL",
        businessUnit: "homeworks",
        seo: {
            title: `Huishoudelijke hulp | Home Works`,
            description: "Huishoudelijke hulp gezocht? Ervaar de service van Home Works",
            keywords: "Huishoudelijke hulp, huishoudelijk werk",
            author: "Home Works Huishoudelijke hulp",
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static`,
                name: "img",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: "srcimgages",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/img`,
                name: "srcimg",
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    // {
                    //     resolve: `gatsby-remark-relative-source`,
                    //     // options: {
                    //     //     staticFolderName: 'static', // Ensure this is 'static'
                    //     // },
                    // },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 648,
                            withWebp: true,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_self",
                            rel: "nofollow",
                        },
                    },
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 648,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                        },
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                sitemap: "/sitemap.xml",
                policy: [{
                    userAgent: "*",
                    allow: "/",
                    disallow: [
                        "/gelukt/we-gaan-voor-je-aan-de-slag",
                        "/gelukt/we-gaan-voor-je-aan-de-slag/",
                        "/gelukt/huishoudelijke-werk-is-onderweg",
                        "/gelukt/huishoudelijke-werk-is-onderweg/",
                        "/gefeliciteerd/aanmelding-is-bijna-compleet",
                        "/gefeliciteerd/aanmelding-is-bijna-compleet/",
                        "/gefeliciteerd/jouw-aanmelding-is-bijna-compleet",
                        "/gefeliciteerd/jouw-aanmelding-is-bijna-compleet/",
                    ],
                }, ],
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                additionalData: '@import "variables.scss";',
                sassOptions: {
                    includePaths: ["src/styles"]
                }
            }
            // options: {
            //   data: '@import "variables.scss";',
            //   includePaths: ["src/styles"],
            // },
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                sitemapSize: 5000,
                exclude: [
                    "/dev-404-page",
                    "/404",
                    "/404.html",
                    "/offline-plugin-app-shell-fallback",
                    "/not-found/",
                    "/gelukt/we-gaan-voor-u-aan-de-slag",
                    "/gelukt/we-gaan-voor-u-aan-de-slag/",
                    "/gelukt/huishoudelijke-werk-is-onderweg",
                    "/gelukt/huishoudelijke-werk-is-onderweg/",
                    "/gefeliciteerd/uw-aanmelding-is-bijna-compleet",
                    "/gefeliciteerd/uw-aanmelding-is-bijna-compleet/",
                    "/gefeliciteerd/jouw-aanmelding-is-bijna-compleet",
                    "/gefeliciteerd/jouw-aanmelding-is-bijna-compleet/",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `HomeWorks`,
                short_name: `HomeWorks`,
                start_url: `/`,
                background_color: `#f8f8f8`,
                theme_color: `#4DC7E9`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
        `gatsby-plugin-remove-serviceworker`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve("./src/components/layout/base.jsx"),
            },
        },
        // We use netlify to inject gtm script (performance)
        // {
        //   resolve: `gatsby-plugin-google-tagmanager`,
        //   options: {
        //     id: `GTM-WHQVBKJ`,
        //     includeInDevelopment: false,
        //     enableWebVitalsTracking: false,
        //   },
        // },
        `gatsby-plugin-netlify`,
        `gatsby-plugin-netlify-cms`
    ],
}