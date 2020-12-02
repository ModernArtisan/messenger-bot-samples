const config = {
    webhook: {
        "endpoint": "/webhook",
        "verify_token": "1a378d945a4c2531a0403fefd3d271c4",
        "port": 9999,
        "app_secret": "563996d797b74ecded2951d62135c513"
    },
    client: {
        "page_token": "EAAFqmYzMUSQBAPAh8PiKJP1wisAeY2EZCZCm2BuMAe0WnOQQzHXerRidWh2Ld4X0eznsGXfbmYHKssRbZAv0S7S6Dp2u7k1Ga5jDyF2YVflZBfIOsbqGOLnt5JPBpgrZA8bGy0A7uYpwHn3QewMHvlF8H9I2eECZBPADZClWGjDf9YRQVR8M5gZAPVJnJgGbtBEZD"
    },
    fba: {
        "app_id": "398682701451556",
        "page_id": "3137513363007445"
    },
    survey_type: "NPS", // Can be 'NPS' or 'CSAT'
    customer_service_app_id: "263902037430900" // 263902037430900 is the default Facebook page inbox
};

module.exports = config;
