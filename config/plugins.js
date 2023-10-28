module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },

    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: 'hello@example.com',
                defaultReplyTo: 'hello@example.com',
            },
        },
    },

    "io": {
        "enabled": true,
        "config": {
            "IOServerOptions": {
                "cors": { "origin": "http://localhost:5000", "methods": ["GET"] },
            },
            "contentTypes": {
                "message": "*",
                "chat": ["create"]
            },
            "events": [
                {
                    "name": "connection",
                    "handler": ({ strapi }, socket) => {
                        strapi.log.info(`[io] new connection with id ${socket.id}`);
                    },
                },
            ]
        },
    },

    "strapi-chatgpt": {
        enabled: true,
    },
    // ...
});