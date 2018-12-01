let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://5zqiz1hdgg.execute-api.eu-west-1.amazonaws.com/dev/"
    process.env.restaurants_table = "restaurants-dev-devternity"
    process.env.AWS_REGION        = "eu-west-1"
    process.env.order_events_stream = 'orders-dev-devternity'
    process.env.restaurant_notification_topic = 'restaurants-dev-devternity'

    initialized = true
}

module.exports = {
    init
}

